"use client";
import { useState, useEffect } from "react";
import styles from "./flipStep.module.css";
import Image from "next/image";

type Props = {
    onComplete: () => void;
}

const Flip = ({ onComplete }: Props) => {
    const [flipCount, setFlipCount] = useState(0);
    const [isAfter, setIsAfter] = useState(false);

    useEffect(() => {
        const timer = setInterval(async () => {
            try {
                const data = await fetch("https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_flip.php")
                    .then(res => res.text());
                const value = parseInt(data) || 0;

                if (value !== flipCount) {
                    setIsAfter(true);
                    setFlipCount(value);
                }
            } catch (e) {
                console.error(e);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [flipCount]);

    useEffect(() => {
        if (!isAfter) return;
        const timeout = setTimeout(() => {
            onComplete();
        }, 5000);
        return () => clearTimeout(timeout);
    }, [isAfter]);

    return (
        <>
            {/* <Image
                src={isAfter ? "/image/frypan_flip.png" : "/image/frypan.png"}
                width={260}
                height={400}
                alt="フライパン"
            /> */}
            <Image
                src="/image/dish.png"
                width={437}
                height={349}
                alt="皿"
                className={styles.dish}
            />
            <Image
                src={isAfter ? "/image/ladle_flip_after.png" : "/image/ladle_flip.png"}
                width={300}
                height={333}
                alt="おたま"
                className={styles.ladle}
            />
        </>
    );
};

export default Flip;
