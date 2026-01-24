"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const image = [
    "/image/components/loadingImg1.svg",
    "/image/components/loadingImg2.svg"
];

type LoadingProps = {
    onComplete: () => void;
};

const Loading = ({ onComplete }: LoadingProps) => {
    const [number, setNumber] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const loadingTimer = setInterval(() => {
            setNumber((prev) => Math.min(prev + 1, 100));
        }, 80);
        return () => clearInterval(loadingTimer);
    }, []);

    useEffect(() => {
        if (number === 100) {
            onComplete();
        }
    }, [number, onComplete]);

    useEffect(() => {
        const stepTime = setInterval(() => {
            setStep((prev) => (prev + 1) % image.length);
        }, 1000);

        return () => clearInterval(stepTime);
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.loadingTxt}>ロード中...</p>

            <div className={styles.barWrap}>
                <div
                    className={styles.bar}
                    style={{ width: `${number}%` }}
                />
            </div>

            <Image
                src={image[step]}
                alt="キャラクター"
                width={477}
                height={200}
            />
        </div>
    );
};

export default Loading;
