"use client";
import { useState, useEffect } from "react";
import styles from "./cutStep.module.css";
import Image from "next/image";

type CutImage = {
    before: string[];
    after: string[];
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
            before: ["/image/potato.png"],
            after: ["/image/potato_cut.png"],
        },
        {
            before: ["/image/meat.png"],
            after: ["/image/meat_cut.png"],
        },
        {
            before: ["/image/onion.png"],
            after: ["/image/onion_cut.png"],
        },
        {
            before: ["/image/carrot.png"],
            after: ["/image/carrot_cut.png"],
        },
    ],
};

const Cut = ({ onComplete }: Props) => {
    const [imageStep, setStep] = useState(0);
    const [cutCount, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(async () => {
            try {
                const data = await fetch("https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_cut.php")
                    .then(res => res.text()
                    );
                const newValue = parseInt(data) || 0;
                if (newValue !== cutCount) {
                    setStep(prev => prev + 1);
                    setCount(newValue);
                }
            } catch (e) {
                console.error(e);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [cutCount]);

    useEffect(() => {
        if (imageStep >= 8) {
            onComplete();
        }
    }, [imageStep]);

    const ingredientIndex = Math.floor(imageStep / 2);
    const after = imageStep % 2 === 1;
    const ingredient = cookingImages.cut[ingredientIndex];

    return (
        <>
            <div className={styles.imageWrap}>
                {ingredient ? (
                    <Image
                        src={after ? ingredient.after[0] : ingredient.before[0]}
                        width={495}
                        height={251}
                        alt="食材"
                        className={styles.ingredients}
                    />
                ) : (
                    <p>成功！</p>
                )}
                <Image
                    src="/image/cutBoard.png"
                    width={840}
                    height={280}
                    alt="まないた"
                    className={styles.cutBoard}
                />
                <Image
                    src="/image/knife.png"
                    width={220}
                    height={420}
                    alt="包丁"
                    className={styles.knife}
                />
            </div>
        </>
    )
};

export default Cut;