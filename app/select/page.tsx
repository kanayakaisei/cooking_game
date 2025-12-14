"use client";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import GameStartBtn from "@/components/GameStartBtn/GameStartBtn";

const Select = () => {
    const charaList = [
        "/image/mouse.svg",
        "/image/penguin.svg",
        "/image/tiger.svg",
        "/image/cat.svg",
    ];
    const [selectChara, setSelectChara] = useState(charaList[0]);

    const [isPlaying, setIsPlaying] = useState(false);

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
                            onMoved={(splide) => {
                                const index = splide.index; // 真ん中のスライド index
                                setSelectChara(charaList[index]);
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
                    <Link href={`/game?chara=${selectChara}`}>
                        <GameStartBtn
                            text={"りょうりかいし！"}
                            isPlaying={isPlaying}
                            onToggle={setIsPlaying}
                            className={styles.selectBtn}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Select;