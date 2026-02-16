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
import cookingList from "@/lib/detail";

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
    const [complete, setComplete] = useState(false);
    const [charaStep, setCharaStep] = useState(0)
    const params = useSearchParams();
    const recipeId = params.get("recipe");
    const recipe = cookingList.find(
        (item) => item.id === Number(recipeId)
    );

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
                    <Heading text={recipe?.title ?? "レシピ"} />
                    <div className={styles.illustWrap}>
                        {!complete && !(recipe?.id === 4 && step >= 3) && (
                            <Image
                                src={currentImage}
                                width={330}
                                height={344}
                                alt="キャラクター"
                                className={styles.character}
                            />
                        )}
                        {/* 切る工程 */}
                        {recipe?.id === 1 && !complete && (
                            <Cut onComplete={() => setComplete(true)} />
                        )}

                        {/* 混ぜる工程 */}
                        {recipe?.id === 2 && !complete && (
                            <Mix onComplete={() => setComplete(true)} />
                        )}

                        {/* ひっくり返す工程 */}
                        {recipe?.id === 3 && !complete && (
                            <Flip onComplete={() => setComplete(true)} />
                        )}

                        {/* 完成 */}
                        {complete && <Complete />}

                        {/* 肉じゃが */}
                        {recipe?.id === 4 && step === 0 && <Cut onComplete={() => setStep(1)} />}
                        {recipe?.id === 4 && step === 1 && <Mix onComplete={() => setStep(2)} />}
                        {recipe?.id === 4 && step === 2 && <Flip onComplete={() => setStep(3)} />}
                        {recipe?.id === 4 && step >= 3 && <Complete />}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Game;