"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./page.module.css";
import Image from "next/image";
import GameStartBtn from "@/components/GameStartBtn/GameStartBtn";

const Select = () => {
    const charaList = [
        "/image/mouse.svg",
        "/image/penguin.svg",
        "/image/tiger.svg",
        "/image/cat.svg",
    ];
    const [selectChara, setSelectChara] = useState(charaList[0]);

    const router = useRouter();

    const [isPlaying, setIsPlaying] = useState(false);

    const [isStarting, setIsStarting] = useState(false);

    const handleStart = () => {
        if (isStarting) return;
        setIsStarting(true);


        window.setTimeout(() => {
            router.push(`/game?chara=${encodeURIComponent(selectChara)}`);
        }, 1500);
    };


    return (
        <>
            <div className={styles.mainVisual}>
                <div className={styles.titleWrap}>
                    <button className={styles.circle}>
                        <Image
                            src="/image/arrow.png"
                            width={80}
                            height={80}
                            alt="矢印"
                            className={styles.arrow}
                        />
                    </button>
                    <h1 className={styles.title}>キャラクターせんたく</h1>
                </div>

                <div className={styles.content}>
                    <div className={styles.charaScroll}>
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 3,
                                perMove: 1,
                                focus: "center",
                                arrows: true,
                                pagination: false,
                            }}
                        >

                            <SplideSlide>
                                <Image
                                    src="/image/mouse.svg"
                                    width={300}
                                    height={320}
                                    alt="ねずみのキャラクター"
                                ></Image>
                            </SplideSlide>
                            <SplideSlide>
                                <Image
                                    src="/image/penguin.svg"
                                    width={300}
                                    height={320}
                                    alt="ペンギンのキャラクター"
                                ></Image>
                            </SplideSlide>
                            <SplideSlide>
                                <Image
                                    src="/image/tiger.svg"
                                    width={300}
                                    height={320}
                                    alt="トラのキャラクター"
                                ></Image>
                            </SplideSlide>
                            <SplideSlide>
                                <Image
                                    src="/image/cat.svg"
                                    width={300}
                                    height={320}
                                    alt="ねこのキャラクター"
                                ></Image>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div className={styles.block}>
                    <p className={styles.subMeg}>だれといっしょにおりょうりする？</p>

                    <GameStartBtn
                        text={"りょうりかいし！"}
                        isPlaying={isPlaying}
                        onToggle={setIsPlaying}
                        variant="start"
                        onClick={handleStart}
                        disabled={isStarting} />
                    {isStarting && (
                        <div className={styles.startOverlay}>
                            <p className={styles.startTitle} aria-label="りょうりかいし！">
                                {"りょうりかいし！".split("").map((ch, i) => (
                                    <span key={i} className={styles.char} style={{ ["--i" as any]: i }}>
                                        {ch}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export default Select;