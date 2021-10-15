import Header from '../Header';
import styles from './Register.module.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState();
    const [emailAddress, setEmailAddress] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState();
    const [btnMsg, setBtnMsg] = useState("Register")

    const sendData = async(e) => {
        setBtnMsg("Creating user......")
        const res = await axios.post("api/register",{
            fullName: fullName,
            emailAddress:emailAddress,
            password:password
        });
        const data = await res.data;
        if(data.success == false){
            alert(data.message)
        } else{
            alert(data.message);
            setTimeout(() => {
                router.push("/signin");
            }, 2000);
        }
    }

    // useEffect(() => {
    //    sendData();
    // }, [])

    const handleClick = async(e) => {
        e.preventDefault()
        // subission of form
        if(!fullName || !emailAddress || !password || !confirmPassword){
            alert("Please fill in your details")
        } else{
            if(password != confirmPassword){
                alert("Passwords does not match")
            } else{
                // Send data
                try {
                    sendData();
                    setBtnMsg("User Created!")
                } catch (error) {
                    alert("Something went worng")
                }
            }
        }
    }

    return (
        <section className={styles.container}>
            <Header />
            <section className={styles.RegisterHolder}>
                <form onSubmit={handleClick}>
                    <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <input type="text" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
                    <input type="password" placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" placeholder="confirm password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <button>{btnMsg}</button>
                </form>
                <div className={styles.sub}>
                    {/* <p>Forgotten Password?</p> */}
                    <p>Already have an account? Sign in!</p>
                </div>
            </section>
        </section>
    )
}

export default Register