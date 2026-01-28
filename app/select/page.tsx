"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import styles from "./page.module.css";
import Image from "next/image";
import GameStartBtn from "@/components/GameStartBtn/GameStartBtn";
import Heading from "@/components/Heading/Heading";

const Select = () => {
    const charaList = [
        "/image/select/mouse.svg",
        "/image/select/penguin.svg",
        "/image/select/tiger.svg",
        "/image/select/cat.svg",
    ];

    const router = useRouter();
    const splideRef = useRef<SplideInstance | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isStarting, setIsStarting] = useState(false);

    const syncCenterIndex = () => {
        const splide = splideRef.current;
        if (!splide) return;

        const i = splide.index % charaList.length;
        setActiveIndex(i);
    };

    useEffect(() => {
        syncCenterIndex();
    }, []);

    const handleStart = () => {
        if (isStarting) return;
        setIsStarting(true);


        const picked = charaList[activeIndex];

        window.setTimeout(() => {
            router.push(`/game?chara=${encodeURIComponent(picked)}`);
        }, 1000);
    };


    return (
        <>
            <div className={styles.mainVisual}>
                <Heading text="キャラクターせんたく" />
                <div className={styles.content}>
                    <div className={styles.charaScroll}>
                        <Splide
                            onMounted={(splide) => {
                                splideRef.current = splide;
                                setActiveIndex(splide.index % charaList.length);
                            }}
                            onMoved={(splide) => {
                                setActiveIndex(splide.index % charaList.length);
                            }}
                            options={{
                                type: "loop",
                                perPage: 3,
                                perMove: 1,
                                focus: "center",
                                arrows: true,
                                pagination: false,
                            }}
                        >
                            {charaList.map((src) => (
                                <SplideSlide key={src}>
                                    <Image
                                        src={src}
                                        width={300}
                                        height={320}
                                        alt="ねずみのキャラクター"
                                    />
                                </SplideSlide>
                            ))}
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
                        disabled={isStarting}
                    />
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