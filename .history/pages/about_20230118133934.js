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
        <> About Page </>
    )
}

<div className={styles.grid}>
<div className={styles.gridlayout}>
<div>
<h2 className={styles.busdeg}>Business Degrees: </h2>
{details && details.map((info, index) => {
  if(info.department === "Business") {
    return (
      <Card key={workplace} firstName={info.firstName} role={info.role} department={info.deparetment} colour="red" font="20px"/>
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