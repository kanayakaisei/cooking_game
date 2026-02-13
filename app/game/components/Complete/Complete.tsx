"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./complete.module.css";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import GameStartBtn from "@/components/GameStartBtn/GameStartBtn";
import { playCompleteBgm, stopCompleteBgm } from "@/lib/bgmPlayer";


const Complete = () => {
    useEffect(() => {
        playCompleteBgm();

        return () => {
            stopCompleteBgm();
        };
    }, []);

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
        <div className={styles.wrapper}>
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
                        text={"おわり！"}
                        isPlaying={isPlaying}
                        onToggle={setIsPlaying}
                        variant="end"
                    />
                </Link >
            </div >
            <div className={styles.charaWrap}>
                <div>
                    <Image
                        src="/image/game/chara/complete_mouse.svg"
                        alt="完成ねずみ"
                        width={324}
                        height={368}
                        className={styles.mouse}
                    />
                    <Image
                        src="/image/game/chara/complete_penguin.svg"
                        alt="完成ぺんぎん"
                        width={324}
                        height={368}
                        className={styles.penguin}
                    />
                </div>
                <div>
                    <Image
                        src="/image/game/chara/complete_tiger.svg"
                        alt="完成とら"
                        width={324}
                        height={368}
                        className={styles.tiger}
                    />
                    <Image
                        src="/image/game/chara/complete_cat.svg"
                        alt="完成ねこ"
                        width={324}
                        height={368}
                        className={styles.cat}
                    />
                </div>
            </div>
        </div>
    )
}

export default Complete;