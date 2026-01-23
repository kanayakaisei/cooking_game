"use client";
import { useState, useEffect } from "react";
import styles from "./flipStep.module.css";
import Image from "next/image";

type Props = {
    onComplete: () => void;
};

const potStep = [
    ["pot1", "pot1"],
    ["pot2", "pot2"],
    ["pot3", "pot3"],
    ["pot3", "pot3"],
];

const dishStep = [
    ["dish1", "dish1"],
    ["dish2", "dish2"],
    ["dish3", "dish3"],
    ["dish4", "dish4"],
];

const ladleStep = [
    ["ladle1", "ladle2"],
    ["ladle1", "ladle2"],
    ["ladle1", "ladle2"],
    ["ladle", "ladle"],
];

const TOTAL_STEP = potStep.length;

const Flip = ({ onComplete }: Props) => {
    const [prevFlip, setPrevFlip] = useState(0);
    const [step, setStep] = useState(0);
    const [phase, setPhase] = useState<0 | 1>(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const potImg = `/image/game/${potStep[step][phase]}.png`;
    const dishImg = `/image/game/${dishStep[step][phase]}.png`;
    const ladleImg = `/image/game/${ladleStep[step][phase]}.png`;

    // ===== データ取得 =====
    useEffect(() => {
        const timer = setInterval(async () => {
            try {
                const res = await fetch(
                    "https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_flip.php"
                );
                const value = parseInt(await res.text()) || 0;

                if (value > prevFlip) {
                    setPrevFlip(value);
                    setPhase(0);
                    setIsPlaying(true);
                }
            } catch (e) {
                console.error(e);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [prevFlip]);

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
            const t = setTimeout(onComplete, 1000);
            return () => clearTimeout(t);
        }
    }, [step, phase]);

    return (
        <div className={styles.wrap}>
            <Image
                src={dishImg}
                width={437}
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
