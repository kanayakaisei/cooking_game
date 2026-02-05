"use client"
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Cut from "./components/CutStep/CutStep";
import Mix from "./components/MixStep/MixStep";
import Flip from "./components/FlipStep/FlipStep";
import Complete from "./components/Complete/Complete";
import Heading from "@/components/Heading/Heading";

const CHARA_IMAGES = {
    penguin: {
        cut: [
            "/image/game/chara/cut_penguin1.svg",
            "/image/game/chara/cut_penguin2.svg",
        ],
        mix: [
            "/image/game/chara/mix_penguin1.svg",
            "/image/game/chara/mix_penguin2.svg",
        ],
        flip: [
            "/image/game/chara/flip_penguin1.svg",
            "/image/game/chara/flip_penguin2.svg",
        ],
    },
    mouse: {
        cut: [
            "/image/game/chara/cut_mouse1.svg",
            "/image/game/chara/cut_mouse2.svg",
        ],
        mix: [
            "/image/game/chara/mix_mouse1.svg",
            "/image/game/chara/mix_mouse2.svg",
        ],
        flip: [
            "/image/game/chara/flip_mouse1.svg",
            "/image/game/chara/flip_mouse2.svg",
        ],
    },
    cat: {
        cut: [
            "/image/game/chara/cut_cat1.svg",
            "/image/game/chara/cut_cat2.svg",
        ],
        mix: [
            "/image/game/chara/mix_cat1.svg",
            "/image/game/chara/mix_cat2.svg",
        ],
        flip: [
            "/image/game/chara/flip_cat1.svg",
            "/image/game/chara/flip_cat2.svg",
        ],
    },
    tiger: {
        cut: [
            "/image/game/chara/cut_tiger1.svg",
            "/image/game/chara/cut_tiger2.svg",
        ],
        mix: [
            "/image/game/chara/mix_tiger1.svg",
            "/image/game/chara/mix_tiger2.svg",
        ],
        flip: [
            "/image/game/chara/flip_tiger1.svg",
            "/image/game/chara/flip_tiger2.svg",
        ],
    },
} as const;

type CharaKey = keyof typeof CHARA_IMAGES;
type SceneKey = "cut" | "mix" | "flip";

const DEFAULT_CHARA: CharaKey = "cat";


function Game() {
    const [step, setStep] = useState(0);
    const [charaStep, setCharaStep] = useState(0)
    const params = useSearchParams();

    const charaKey = useMemo<CharaKey>(() => {
        const raw = params.get("chara") as CharaKey | null;
        return raw && raw in CHARA_IMAGES ? raw : DEFAULT_CHARA;
    }, [params]);

    const scene: SceneKey =
        step === 0 ? "cut" :
            step === 1 ? "mix" :
                "flip";

    const images = CHARA_IMAGES[charaKey][scene];
    const currentImage = images[charaStep];

    useEffect(() => {
        const stepTime = setInterval(() => {
            setCharaStep((prev) => (prev + 1) % images.length);
        }, 1000);

        return () => clearInterval(stepTime);
    }, [images]);

    useEffect(() => {
        setCharaStep(0);
    }, [scene]);

    return (
        <>
            <div className={styles.mainVisual}>
                <div className={styles.Wrapper}>
                    <Heading text="にくじゃが" />
                    <div className={styles.illustWrap}>
                        {step < 3 && (
                            <Image
                                src={currentImage}
                                width={360}
                                height={374}
                                alt="キャラクター"
                                className={styles.character}
                                priority
                            />
                        )}
                        {step === 0 && <Cut onComplete={() => setStep(1)} />}
                        {step === 1 && <Mix onComplete={() => setStep(2)} />}
                        {step === 2 && <Flip onComplete={() => setStep(3)} />}
                        {step >= 3 && <Complete />}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Game;