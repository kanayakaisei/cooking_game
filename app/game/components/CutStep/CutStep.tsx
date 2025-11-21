"use client";
import { useState } from "react";
import styles from "./cutStep.module.css";
import Image from "next/image";



const Cut = () => {



    // ingredients = 食材 を訳してigds

    const igdsImages = [
        "/image/potato.png",
        "/image/cutPotato.png",
        "/image/carrots.png",
        // "image/cutCarrots.png",
        "/image/meat.png",
        // "/image/cutMeat.png",


    ];

    const [ImageCount, setImageCount] = useState(0);

    const handleImage = () => {
        setImageCount((prev) => {

            const nextIndex = prev + 1;
            if (nextIndex >= igdsImages.length) {
                return 0;
            }
            return nextIndex;
        });
    };



    return (
        <>

            <div className={styles.imageWrap}>
                <Image
                    src="/image/cutBoard.png"
                    width={840}
                    height={280}
                    alt="まないた"
                    className={styles.cutBoard}
                ></Image >
                <Image
                    src={igdsImages[ImageCount]}
                    width={450}
                    height={250}
                    alt="じゃがいも"
                    className={styles.potato}
                ></Image >
                <Image
                    src="/image/knife.png"
                    width={220}
                    height={420}
                    alt="包丁"
                    className={styles.knife}
                ></Image>
            </div>

            <button onClick={handleImage} className={styles.cutButton}>きる画面クリック</button>

        </>
    )
};

export default Cut;