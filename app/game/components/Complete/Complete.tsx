"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./complete.module.css";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import GameStartBtn from "@/components/GameStartBtn/GameStartBtn";


const Complete = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const fireFromSides = useCallback(() => {
        const y = 0.72;

        // 左 → 右
        confetti({
            particleCount: 180,
            angle: 20,
            spread: 30,
            startVelocity: 60,
            gravity: 0.7,
            ticks: 260,
            origin: { x: 0.02, y },
        });

        // 右 → 左
        confetti({
            particleCount: 180,
            angle: 150,
            spread: 30,
            startVelocity: 60,
            gravity: 0.7,
            ticks: 260,
            origin: { x: 0.98, y },
        });

        // 追い打ち
        const end = Date.now() + 900;
        (function loop() {
            confetti({
                particleCount: 10,
                angle: 90,
                spread: 120,
                startVelocity: 18,
                gravity: 0.55,
                ticks: 320,
                origin: { x: Math.random(), y: 0.1 },
            });
            if (Date.now() < end) requestAnimationFrame(loop);
        })();
    }, []);

    useEffect(() => {
        fireFromSides();
    }, [fireFromSides]);

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