import User from '../../models/User';
import dbConnect from '../../utils/dbConnect';

import { hash } from "bcrypt";
import { sign } from 'jsonwebtoken';

dbConnect();

export default async (req, res) => {
  // res.send('working properly')
  const method = req.method;

  if (method === "POST") {
    const user = await User.findOne({
      emailAddress: req.body.emailAddress,
    });

    if (user) {
      console.log("user exist");
      return res.status(400).json({
        success: false,
        message: `Sorry, a user with this credentials already exist`,
      });
    } else {
      try {
        hash(req.body.password, 12, async function (err, hash) {
          // Store hash in your password DB.
          // Convert incoming password to hashed password
          req.body.password = hash;
          //  save user to database
          const user = await User.create(req.body);
          return res.status(201).json({
            success: true,
            message: "User created successfully! You can now login.",
          });
          // res.status(201).json(user);
        });
      } catch (error) {
        return res.status(500).send(error);
      }
    }
  }
};