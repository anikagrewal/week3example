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
    return(
        <> About Page </>
    )
}

