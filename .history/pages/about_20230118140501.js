import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/workplace.json'
import { useState } from 'react'
import Card from '../components/Card'

const inter = Inter({ subsets: ['latin'] })

console.log(data);
export default function About() {

    const [details, setDetails] = useState([...data])

    return (
        <>
        <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main className={styles.main}>
<div className={styles.grid}>
<div className={styles.gridlayout}>
<div>
<h2 className={styles.busdeg}>Department Roles: </h2>
{details && details.map((det, workplace) => {
  if(det.department === "Frontend Developer") {
    return (
      <Card key={workplace} role={det.role} colour="red" font="20px"/>
    )
  }

 
})}
</div>


</div>
</div>
</main>
</>
    )
}