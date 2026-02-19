"use client"
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Cut from "./components/CutStep/CutStep";
import Mix from "./components/MixStep/MixStep";
import Flip from "./components/FlipStep/FlipStep";
import Complete from "./components/Complete/Complete";
import Heading from "@/components/Heading/Heading";
import cookingList from "@/lib/detail";
import StepFlow from "@/components/StepFlow/StepFlow";

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
    const recipeId = params.get("recipe");
    const recipe = cookingList.find(
        (item) => item.id === Number(recipeId)
    );
    const handleComplete = useCallback(() => {
        setStep(prev => prev + 1);
    }, []);


    const charaKey = useMemo<CharaKey>(() => {
        const raw = params.get("chara") as CharaKey | null;
        return raw && raw in CHARA_IMAGES ? raw : DEFAULT_CHARA;
    }, [params]);

    const scene = recipe?.steps?.[step] as SceneKey | undefined;
    const images = scene ? CHARA_IMAGES[charaKey][scene] : CHARA_IMAGES[charaKey]["cut"];
    const currentImage = images[charaStep];
    const finished = !!recipe?.steps && step >= recipe.steps.length;
    useEffect(() => {
        console.log("step changed:", step);
    }, [step]);

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
        <div className={styles.mainVisual}>
            <div className={styles.Wrapper}>
                {!finished && (
                    <Heading text={recipe?.title ?? "レシピ"} />
                )}
                <div className={styles.illustWrap}>
                    {!finished && (
                        <>
                            {recipe?.steps && !finished && !recipe?.tutorial && (
                                <StepFlow currentStep={step} />
                            )}
                            <Image
                                src={currentImage}
                                width={330}
                                height={344}
                                alt="キャラクター"
                                className={styles.character}
                            />
                        </>
                    )}
                    {recipe?.steps && !finished && (
                        <>
                            {scene === "cut" && (
                                <Cut
                                    cutSteps={recipe.cutSteps ?? []}
                                    onComplete={handleComplete}
                                />
                            )}
                            {scene === "mix" && (
                                <Mix
                                    mixImages={recipe.mixImages ?? []}
                                    onComplete={handleComplete}
                                />
                            )}
                            {scene === "flip" && (
                                <Flip
                                    flipImage={recipe.flipImages}
                                    onComplete={handleComplete}
                                />
                            )}
                        </>
                    )}
                    {finished && recipe?.completeImage && (
                        <Complete completeImage={recipe.completeImage} />
                    )}
                </div>
            </div>
        </div >
    )
}

export default Game;