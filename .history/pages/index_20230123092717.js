import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link' 

const inter = Inter({ subsets: ['latin'] })

console.log(data);
export default function Home() {

  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       
      <div className={styles.mainheader}>
        <h1>Find YOUR Mentor!</h1>
       
      </div>




        <div className={styles.grid}>
          <div className={styles.gridlayout}>
           
              
          <div className={styles.scroll}>
          <div>
        <h2 className={styles.busdeg}>Business Degrees: </h2>
          {information && information.map((info, index) => {
            if(info.department === "Business") {
              return (
                <Card key={index} degree={info.degree} colour="#946E83" font="20px"/>
              )
            }
          
           
          })}
          </div>
        
        <div>
          <h2 className={styles.compdeg}>Computing Degrees:</h2>
            {information && information.map((info, index) => {
            if(info.department.toLowerCase() === "computing") {
              return (
                <Card key={index} degree={info.degree} colour="#605770" font="15px" gap="5px"/>
              )
            }
          })}

          </div>
         
          </div>
         
          <Image 
          className={styles.deskimage}
          width={1700}
          height={1030}
          src={'/vector/desk.png'}
         
         />
        
        </div>
        <button className={styles.button}> <Link href="about">About</Link></button>
        </div>
       
      
         
      
      </main>
    </>
  )
}
