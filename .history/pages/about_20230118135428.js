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

    return(
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
<h2 className={styles.busdeg}>Business Degrees: </h2>
{details && details.map((det, details) => {
  if(det.department === "Photoshop") {
    return (
      <Card key={workplace} department={det.deparetment} colour="red" font="20px"/>
    )
  }

 
})}
</div>

<div>
<h2 className={styles.compdeg}>Computing Degrees:</h2>
  {details && details.map((info, index) => {
  if(info.department.toLowerCase() === "computing") {
    return (
      <Card key={workplace} degree={info.degree} colour="blue" font="15px"/>
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