"use client";
import { useState, useEffect } from "react";
import styles from "./flipStep.module.css";
import Image from "next/image";

type FlipSteps = {
    pot: string[][];
    dish: string[][];
    ladle: string[][];
};

type Props = {
    flipImage?: FlipSteps;
    onComplete: () => void;
};

const Flip = ({ onComplete, flipImage }: Props) => {
    const [prevFlip, setPrevFlip] = useState(0);
    const [step, setStep] = useState(0);
    const [phase, setPhase] = useState<0 | 1>(0);
    const [isPlaying, setIsPlaying] = useState(false);

    if (!flipImage) return null;
    const { pot, dish, ladle } = flipImage;
    const TOTAL_STEP = pot.length;

    const potImg = `/image/game/${pot[step][phase]}.png`;
    const dishImg = `/image/game/${dish[step][phase]}.png`;
    const ladleImg = `/image/game/${ladle[step][phase]}.png`;

    // ===== データ取得 =====
    useEffect(() => {
        const timer = setInterval(async () => {
            try {
                const res = await fetch("https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_flip.php");
                const value = parseInt(await res.text()) || 0;
                setPrevFlip(prev => {
                    if (value > prev) {
                        setPhase(0);
                        setIsPlaying(true);
                        return value;
                    }
                    return prev;
                });
            } catch (e) {
                console.error(e);
            }
        }, 300);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (!isPlaying || phase !== 0) return;
        const t = setTimeout(() => {
            setPhase(1);
        }, 1000);
        return () => clearTimeout(t);
    }, [isPlaying, phase]);

    useEffect(() => {
        if (!isPlaying || phase !== 1) return;
        if (step < TOTAL_STEP - 1) {
            const t = setTimeout(() => {
                setStep(prev => prev + 1);
                setPhase(0);
                setIsPlaying(false);
            }, 2000);

            return () => clearTimeout(t);
        }
    }, [phase, step, isPlaying]);

    // 最後 
    useEffect(() => {
        if (step === TOTAL_STEP - 1 && phase === 1) {
            const time = setTimeout(() => {
                onComplete();
            }, 100);
            return () => clearTimeout(time);
        }
    }, [step, phase, TOTAL_STEP]);

    return (
        <div className={styles.wrap}>
            <Image
                src={dishImg}
                width={537}
                height={349}
                alt="皿"
                className={styles.dish}
            />
            <Image
                src={ladleImg}
                width={320}
                height={353}
                alt="おたま"
                className={styles.ladle}
            />
            <Image
                src={potImg}
                width={508}
                height={307}
                alt="鍋"
                className={styles.pot_flip}
            />
        </div>
    );
};

export default Flip;
