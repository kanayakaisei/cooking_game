"use client";
import { useState } from "react";
import styles from "./cutStep.module.css";
import Image from "next/image";



const Cut = () => {

    const [potatoImage, setPotatoImage] = useState("/image/potato.png");



    const handleImage = () => {
        setPotatoImage("/image/cutPotato.png");
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
                    src={potatoImage}
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
}

export default Cut;