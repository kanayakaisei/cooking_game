"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./mixStep.module.css";
import Image from "next/image";

type Props = {
    mixImages: string[];
    onComplete: () => void;
}

const Mix = ({ onComplete, mixImages }: Props) => {
    const [mixValue, setMixValue] = useState(0);
    const [mixStep, setMixStep] = useState(0);
    const mixSound = useRef<HTMLAudioElement | null>(null);
    console.log("mixImages:", mixImages);


    useEffect(() => {
        const timer = setInterval(async () => {
            try {
                const mix = await fetch("https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_mix.php")
                    .then(res => res.text());
                const newValue = parseInt(mix) || 0;
                if (newValue !== mixValue) {
                    setMixStep(prev => prev + 1);
                    setMixValue(newValue);
                }
            } catch (e) {
                console.error(e);
            }
        }, 300);
        return () => clearInterval(timer);
    }, [mixValue]);

    useEffect(() => {
        mixSound.current = new Audio("/sounds/mix.mp3");
        mixSound.current.loop = true;
        mixSound.current.volume = 0.2;

        return () => {
            mixSound.current?.pause();
            mixSound.current = null;
        };
    }, []);

    useEffect(() => {
        if (!mixSound.current) return;
        if (mixStep === 1) {
            mixSound.current.play().catch(() => { });
        }

        if (mixStep >= 15) {
            mixSound.current?.pause();
            onComplete();
        }
    }, [mixStep]);

    if (!mixImages.length) return null;
    const ladle = mixImages[mixStep % mixImages.length];

    // ゲージの最大値：15
    const gauge = Math.min((mixStep / 15) * 100, 100);

    return (
        <div className={styles.mixWrap}>
            <div className={styles.contents}>
                <div className={styles.imageWrap}>
                    <Image
                        src={ladle}
                        width={613}
                        height={555}
                        alt="鍋で煮込む"
                        className={styles.ladle}
                    />
                </div>

                {/* ゲージ */}
                <div className={styles.gauge}>
                    <div
                        className={styles.gaugeFill}
                        style={{ width: `${gauge}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Mix;
