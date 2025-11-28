"use client";
import { useState, useEffect } from "react";
import styles from "./cutStep.module.css";
import Image from "next/image";
import Link from "next/link";


const Complete = () => {
    return (
        <>
            <div className={styles.completeTitle}>
                <h1>完成！！</h1>
            </div>
            <Image
                src="/image/mete_potato.png"
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