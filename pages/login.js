import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/landingPage/Auth/Login'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  )
}
