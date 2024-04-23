'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import Loading from '@/app/loading';

export default function Home() {
  const [isLoading, setLoading] = useState(true);



  return isLoading ? <Loading/> : (
    <main className={styles.main}>
     <p>Main page</p>
    </main>
  );
}
