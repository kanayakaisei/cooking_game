"use client";
import { useState, useEffect } from "react";
import styles from "./cutStep.module.css";
import Image from "next/image";

type cutImage = {
    before: string[];
    after: string[];
};

type CutStep = {
    cut: cutImage[];
};

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

const Cut = () => {
    const [imageStep, setImageStep] = useState(0);
    const [prevCountCut, setPrevCountCut] = useState(0);

    useEffect(() => {
        const timer = setInterval(async () => {
            try {
                const cut = await fetch("https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_cut.php").then(res => res.text());
                const newValue = parseInt(cut) || 0;
                if (newValue !== prevCountCut) {
                    setImageStep(prev => prev + 1);
                    setPrevCountCut(newValue);
                }
            } catch (e) {
                console.error(e);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [prevCountCut]);

    const ingredientIndex = Math.floor(imageStep / 2);
    const isAfter = imageStep % 2 === 1;
    const ingredient = cookingImages.cut[ingredientIndex];

    return (
        <>
            <div className={styles.imageWrap}>
                <Image
                    src="/image/cutBoard.png"
                    width={840}
                    height={280}
                    alt="まないた"
                    className={styles.cutBoard}
                />
                {ingredient ? (
                    <Image
                        src={isAfter ? ingredient.after[0] : ingredient.before[0]}
                        width={495}
                        height={251}
                        alt="食材"
                        className={styles.ingredients}
                    />
                ) : (
                    <p>すべて終了！</p>
                )}
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