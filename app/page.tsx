"use client"
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [start, setStart] = useState("");

  useEffect(() => {
    const time = setInterval(() => {
      setStart("はじめる");
    }, 2000);
    return () => clearTimeout(time)
  }, [])

  return (
    <div className={styles.mainVisual}>
      <h1 className={styles.logo}>
        <Image
          src="/image/top/logo.svg"
          alt="ロゴ"
          width={1100}
          height={510}
        />
      </h1>
      <div className={styles.btnWrap}>
        {start && (
          <Link
            href="/cookingList"
            className={`${styles.startBtn} ${styles.fadeIn}`}
          >
            <p>はじめる</p>
          </Link>
        )}
      </div>

      <div className={styles.animal}>
        <div className={styles.penguin}>
          <Image
            src="/image/top/penguin.svg"
            alt="ぺんぎん"
            width={461}
            height={554} />
        </div>

        <div className={styles.mouse}>
          <Image
            src="/image/top/mouse.svg"
            alt="ねずみ"
            width={420}
            height={440} />
        </div>

        <div className={styles.tiger}>
          <Image
            src="/image/top/tiger.svg"
            alt="とら"
            width={377}
            height={470} />
        </div>

        <div className={styles.cat}>
          <Image
            src="/image/top/cat.svg"
            alt="ねこ"
            width={421}
            height={514} />
        </div>
      </div>
    </div>
  );
}
