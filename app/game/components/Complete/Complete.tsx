"use client";
import { useState, useEffect } from "react";
import styles from "./complete.module.css";
import Image from "next/image";
import Link from "next/link";

import GameStartBtn from "@/components/GameStartBtn/GameStartBtn";


const Complete = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Image
                        src="/image/game/Completed.png"
                        width={860}
                        height={480}
                        alt="かんせいタイトル"
                    />
                </div>
                <Image
                    src="/image/game/meat_potato.png"
                    width={435}
                    height={357}
                    alt="肉じゃが"
                />
            </div>
            <div className={styles.completeBtn}>
                <Link href="/cookingList">
                    <GameStartBtn
                        text={"しゅうりょうする！"}
                        isPlaying={isPlaying}
                        onToggle={setIsPlaying}
                        variant="end"
                    />
                </Link >
            </div >
        </>
    )
}

export default Complete;