import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import data from '../data/workplace.json'
import { useState } from 'react'
import CardEmployee from '../components/CardEmployee'

const inter = Inter({ subsets: ['latin'] })

console.log(data);
export default function About() {

    const [information, setInformation] = useState([...data])

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
        <h2 className={styles.busdeg}>Section Roles: </h2>
        {information && information.map((info, index) => {
          if(info.section === "frontend developer") {
            return (
              <div key={index}>
                <CardEmployee role={info.role} colour="#946E83" font="20px"/>
              </div>
            )
          }

        
        })}
        </div>

        <div>
        <h2 className={styles.busdeg}>Section Roles: </h2>
        {information && information.map((info, index) => {
          if(info.section === "graphic designer") {
            return (
              <div key={index}>
                <CardEmployee role={info.role} colour="#605770" font="20px"/>
              </div>
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