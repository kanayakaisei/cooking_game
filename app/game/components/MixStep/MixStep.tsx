"use client";
import { useState } from "react";
import styles from "./mixStep.module.css";
import Image from "next/image";



const Mix = () => {

    const [position, setPosition] = useState(0);


    const positionClass = [
        styles.pos1,
        styles.pos2,
    ]



    const handleMove = () => {
        setPosition((prev) => {

            const nextPosition = prev + 1;
            if (nextPosition >= positionClass.length) {
                return 0;
            }
            return nextPosition;
        });

    };






    return (
        <>

            <div className={styles.imageWrap}>
                <Image
                    src="/image/pot.png"
                    width={540}
                    height={330}
                    alt="なべ"
                    className={styles.pot}
                ></Image >
                <Image
                    src="/image/ladle.png"
                    width={190}
                    height={330}
                    alt="おたま"
                    className={`${styles.ladle} ${positionClass[position]}`}
                ></Image>
            </div>

            <button onClick={handleMove} className={styles.mixButton}>混ぜる画面クリック</button>
        </>
    )
}

export default Mix;