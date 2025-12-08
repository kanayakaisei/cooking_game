"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Select = () => {
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
                    <Link href="/game">
                        <button className={styles.startBtn}>
                            <p>りょうりかいし！</p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Select;