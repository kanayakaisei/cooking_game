"use client"
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { playStartBgm } from "@/lib/bgmPlayer";

export default function Home() {
  const router = useRouter();
  const [start, setStart] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      setStart(true);
    }, 1000);
    return () => clearTimeout(time)
  }, [])


  const handleStart = async () => {
    await playStartBgm();

    router.push("/cookingList");
  };

  return (
    <div className={styles.mainVisual}>
      <h1 className={styles.logo}>
        <Image
          src="/image/top/logo.svg"
          alt="ロゴ"
          width={940}
          height={350}
        />
      </h1>
      <div className={styles.btnWrap}>
        {start && (
          <button
            type="button"
            onClick={handleStart}
            className={`${styles.startBtn} ${styles.fadeIn}`}
          >
            <p>はじめる</p>
          </button>
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
