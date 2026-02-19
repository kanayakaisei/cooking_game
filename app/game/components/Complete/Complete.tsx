"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./complete.module.css";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import GameStartBtn from "@/components/GameStartBtn/GameStartBtn";
import { playCompleteBgm, stopCompleteBgm } from "@/lib/bgmPlayer";

type Props = {
    completeImage: string;
};

const Complete = ({ completeImage }: Props) => {
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
                <Image
                    src="/image/game/Completed.png"
                    width={800}
                    height={400}
                    alt="かんせいタイトル"
                    className={styles.title}
                />
                <Image
                    src={completeImage}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    alt="完成料理"
                />
                <Link href="/cookingList" className={styles.completeBtn}>
                    <GameStartBtn
                        text={"おわり"}
                        isPlaying={isPlaying}
                        onToggle={setIsPlaying}
                        variant="end"
                    />
                </Link >
            </div>
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