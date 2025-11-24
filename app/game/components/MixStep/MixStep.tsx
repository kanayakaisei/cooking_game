"use client";
import styles from "./mixStep.module.css";
import Image from "next/image";

type Props = {
    position: number;
    count: number;
};

const Mix = ({ position, count }: Props) => {
    const positionClass = [
        styles.pos1,
        styles.pos2,
    ];

    // ゲージ
    const gauge = Math.min((count / 10) * 100, 100);

    return (
        <div className={styles.mixWrap}>
            <div className={styles.imageWrap}>
                <Image
                    src="/image/pot.png"
                    width={540}
                    height={330}
                    alt="なべ"
                    className={styles.pot}
                />

                <Image
                    src="/image/ladle.png"
                    width={190}
                    height={330}
                    alt="おたま"
                    className={`${styles.ladle} ${positionClass[position]}`}
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
