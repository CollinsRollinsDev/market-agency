import Header from '../Header';
import styles from './Login.module.css';
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import jwt  from 'jsonwebtoken';
import Link from 'next/link';
// import Cookie from 'js-cookie';
import cookieCutter from 'cookie-cutter'
import axios from 'axios'
let access;
const Login = () => {
    const router = useRouter();
    const [emailAddress, setEmailAddress] = useState()
    const [password, setPassword] = useState()
    const [btnMsg, setBtnMsg] = useState("Login")

    const sendData = async(e) => {
        setBtnMsg("Authenticating....")
        const res = await axios.post("api/login",{
            emailAddress:emailAddress,
            password:password
        });
        const data = await res.data;
        if(data.success == false){
            alert(data.message)
        } else{
           try {
            alert(data.message);
            const makeAsync = async() => {
                const cookie = await cookieCutter.get('auth');
                let user_data = await jwt.decode(cookie);
                // dispatch(updatingUserDetails(user_data))
                access = await "user confirmed";
                console.log(user_data);

                if(access === "user confirmed"){
                    setBtnMsg("Access Granted. Redirecting to dashboard...");
                    setTimeout(() => {
                        router.push("/register");
                    }, 2000);
                }
               }
               makeAsync();
           } catch (error) {
                   setBtnMsg("Sign In")
                alert("Something Went wrong!")
                location.reload();
           }
        }
    }

    const handleClick = async(e) => {
        e.preventDefault()
        // subission of form
        if(!emailAddress || !password){
            alert("Please fill in your details")
        } else{
              // Send data
              try {
                sendData();
            } catch (error) {
                alert("Something went worng")
            }
        } 
    }
        


    return (
        <section className={styles.container}>
            <Header />
            <section className={styles.loginHolder}>
                <form onSubmit={handleClick}>
                    <input type="text" placeholder="email address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button>{btnMsg}</button>
                </form>
                <div className={styles.sub}>
                    <p>Forgotten Password?</p>
                    <p>Create an account here!</p>
                </div>
            </section>
        </section>
    )
}

export default Login
