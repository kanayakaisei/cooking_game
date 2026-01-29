"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./cutStep.module.css";
import Image from "next/image";

type CutImage = {
    steps: string[];
};

type CutStep = {
    cut: CutImage[];
};

type Props = {
    onComplete: () => void;
}

const cookingImages: CutStep = {
    cut: [
        {
            steps: [
                "/image/game/ingredients/potato_1.png",
                "/image/game/ingredients/potato_2.png",
                "/image/game/ingredients/potato_3.png",
                "/image/game/ingredients/potato_4.png"
            ]
        },
        {
            steps: [
                "/image/game/ingredients/meat_1.png",
                "/image/game/ingredients/meat_2.png",
                "/image/game/ingredients/meat_3.png",
                "/image/game/ingredients/meat_4.png",
                "/image/game/ingredients/meat_5.png"
            ]
        },
        {
            steps: [
                "/image/game/ingredients/onion_1.png",
                "/image/game/ingredients/onion_2.png",
                "/image/game/ingredients/onion_3.png",
                "/image/game/ingredients/onion_4.png",
                "/image/game/ingredients/onion_5.png"
            ]
        },
        {
            steps: [
                "/image/game/ingredients/carrot_1.png",
                "/image/game/ingredients/carrot_2.png",
                "/image/game/ingredients/carrot_3.png",
                "/image/game/ingredients/carrot_4.png",
                "/image/game/ingredients/carrot_5.png"
            ]
        }
    ],
};

const Cut = ({ onComplete }: Props) => {
    const [imageStep, setStep] = useState(0);
    const [cutCount, setCount] = useState(0);
    const [updateTime, setUpdateTime] = useState(0);
    const [knifeActive, setKnifeActive] = useState(false);
    const [showComplete, setShowComplete] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);
    const totalSteps = cookingImages.cut.reduce((sum, item) => sum + item.steps.length, 0);

    const cutSound = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const timer = setInterval(async () => {
            if (isWaiting) return;
            try {
                const data = await fetch("https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_cut.php")
                    .then(res => res.text());

                const newValue = parseInt(data) || 0;
                // DBの値が変わった場合のみ
                if (newValue !== cutCount) {
                    const now = Date.now();
                    // 1.5秒経っていない場合は画像を進めない
                    if (now - updateTime >= 800) {
                        setStep(prev => prev + 1);
                        setUpdateTime(now); // 時刻を更新
                    }
                    setCount(newValue);
                }
            } catch (e) {
                console.error(e);
            }
        }, 500);
        return () => clearInterval(timer);
    }, [cutCount, updateTime, isWaiting]);

    useEffect(() => {
        if (isWaiting) return;
        const ingredientSteps = cookingImages.cut[ingredientIndex]?.steps.length ?? 0;
        // steps[] の最後に到達した瞬間
        if (remaining === ingredientSteps - 1) {
            setIsWaiting(true);
            setShowComplete(true);

            const timer = setTimeout(() => {
                setShowComplete(false);
                setIsWaiting(false);
                setStep(prev => prev + 1);
            }, 2000);
            return () => clearTimeout(timer);
        }
        if (imageStep >= totalSteps) {
            onComplete();
        }
    }, [imageStep]);

    // Cut音追加/音量調整
    useEffect(() => {
        cutSound.current = new Audio("/sounds/cut.mp3");
        cutSound.current.volume = 1;
    }, [])

    useEffect(() => {
        if (imageStep > 0 && imageStep < totalSteps) {
            // 効果音
            if (cutSound.current) {
                cutSound.current.currentTime = 0;
                cutSound.current.play().catch(() => { });
            }
            // 包丁アニメーションON
            setKnifeActive(true);
            // アニメーション終了後にOFF（再トリガー用）
            const timer = setTimeout(() => {
                setKnifeActive(false);
            }, 300); // CSSのanimation時間と合わせる
            return () => clearTimeout(timer);
        }
        if (imageStep >= totalSteps) {
            onComplete();
        }
    }, [imageStep]);

    let remaining = imageStep;
    let ingredientIndex = 0;

    while (remaining >= cookingImages.cut[ingredientIndex].steps.length) {
        remaining -= cookingImages.cut[ingredientIndex].steps.length;
        ingredientIndex++;
        if (ingredientIndex >= cookingImages.cut.length) break;
    }

    const ingredient = cookingImages.cut[ingredientIndex];

    return (
        <div className={styles.content}>
            <div className={styles.imageWrap}>
                {ingredient && (
                    <Image
                        src={ingredient.steps[remaining]}
                        width={495}
                        height={251}
                        alt="食材"
                        className={styles.ingredients}
                    />
                )}
                <Image
                    src="/image/game/cutBoard.png"
                    width={840}
                    height={280}
                    alt="まないた"
                    className={styles.cutBoard}
                />
                <Image
                    src="/image/game/knife.png"
                    width={220}
                    height={420}
                    alt="包丁"
                    className={`${styles.knife} ${knifeActive ? styles.knifeActive : ""}`}
                />
            </div>
            {showComplete && (

                <div className={styles.complete}>
                    できた！
                </div>

            )}
        </div>
    );
};

export default Cut;