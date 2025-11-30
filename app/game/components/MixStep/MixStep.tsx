"use client";
import { useState, useEffect } from "react";
import styles from "./mixStep.module.css";
import Image from "next/image";

type Props = {
    onComplete: () => void;
}

const Mix = ({ onComplete }: Props) => {
    const positionClass = [styles.pos1, styles.pos2]; //おたまcssスタイル
    const [mixValue, setMixValue] = useState(0);
    const [mixStep, setMixStep] = useState(0);

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
        }, 500);
        return () => clearInterval(timer);
    }, [mixValue]);

    useEffect(() => {
        if (mixStep >= 15) {
            onComplete();
        }
    }, [mixStep]);

    // 混ぜてるアニメーション（おたま）
    const ladle = positionClass[mixStep % 2];

    // ゲージの最大値：15
    const gauge = Math.min((mixStep / 15) * 100, 100);

    return (
        <div className={styles.mixWrap}>
            <div className={styles.imageWrap}>
                <Image
                    src="/image/potato_pot.png"
                    width={540}
                    height={330}
                    alt="鍋"
                    className={styles.pot}
                />

                <Image
                    src="/image/ladle.png"
                    width={190}
                    height={330}
                    alt="おたま"
                    className={`${styles.ladle} ${ladle}`}
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
    );
};

export default Mix;
