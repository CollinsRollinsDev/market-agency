import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

dbConnect();

let access;
let proceed;

export default async (req, res) => {
  // res.send('working properly')
  const method = req.method;

  if (method === "POST") {
    const user = await User.findOne({
      emailAddress: req.body.emailAddress,
    });

    if (user) {
      //   Check if username matches username on the database
      (await user.emailAddress) === req.body.emailAddress
        ? (proceed = true)
        : (proceed = false);
      if (proceed) {
        // Check if password matches password on the database using bcrypt and log user in.
        compare(req.body.password, user.password, async function (err, result) {
          if (!err && result) {
                const userData = {
                    username: user.username,
                    fullName: user.fullName,
                    id: user._id,
                };
                
                let token = sign( userData, '33e2ee24-0626-4e37-907a-909b5b3db991', { expiresIn: '1h'});
                res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                    httpOnly: false,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/'
                }))

                res.status(200).json({
                  success:true,
                  message: `Welcome ${user.fullName}`
                });

          } else {
            return res.status(200).json({
              success: false, 
              message: `Sorry, something went wrong. Consider checking your password.`,
            });
          }
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: `Sorry, but we can't find your details.`,
      });
    }
  }
};


const handleErrors = fn => async (req, res) => {    
    try {
        return await fn(req, res)
    } catch (error) {
        console.log(error.stack)
        send(res, 500, 'My Custom Error');
    }
}