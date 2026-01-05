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
        }, 2000);
        return () => clearTimeout(timeout);
    }, [isAfter]);

    return (
        <>
            <Image
                src="/image/game/dish.png"
                width={437}
                height={349}
                alt="皿"
                className={styles.dish}
            />
            <Image
                src={isAfter ? "/image/game/ladle_flip_after1.png" : "/image/game/ladle_flip.png"}
                width={320}
                height={353}
                alt="おたま"
                className={styles.ladle}
            />
            <Image
                src="/image/game/pot_flip1.png"
                width={508}
                height={307}
                alt="肉じゃがを皿に移すときの鍋"
                className={styles.pot_flip}
            />
        </>
    );
};

export default Flip;
