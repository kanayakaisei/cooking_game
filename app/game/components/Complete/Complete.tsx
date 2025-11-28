"use client";
import { useState, useEffect } from "react";
import styles from "./complete.module.css";
import Image from "next/image";
import Link from "next/link";


const Complete = () => {
    return (
        <>
            <div className={styles.completeTitle}>
                <h1>かんせい</h1>
            </div>
            <Image
                src="/image/meat_potato.png"
                width={435}
                height={357}
                alt="肉じゃが"
                className={styles.mete_potato}
            />
            <Link href="/">トップへ</Link >
        </>
    )
}

export default Complete;