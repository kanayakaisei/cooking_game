"use client";
import { useState } from "react";
import styles from "./mixStep.module.css";
import Image from "next/image";



type Props = {
    position: number;
}

const Mix = ({ position }: Props) => {


    const positionClass = [
        styles.pos1,
        styles.pos2,
    ]

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

        </>
    )
}

export default Mix;