"use client"
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Cut from "./components/CutStep/CutStep";
import Mix from "./components/MixStep/MixStep";
import Flip from "./components/FlipStep/FlipStep";
import Complete from "./components/Complete/Complete";
import Heading from "@/components/Heading/Heading";

const DEFAULT_CHARA = "/image/select/cat.svg";

const ALLOWED_CHARA = new Set([
    "/image/select/mouse.svg",
    "/image/select/penguin.svg",
    "/image/select/tiger.svg",
    "/image/select/cat.svg",
]);

function Game() {
    const [step, setStep] = useState(0);
    const params = useSearchParams();

    const chara = useMemo(() => {
        const raw = params.get("chara") || DEFAULT_CHARA;
        return ALLOWED_CHARA.has(raw) ? raw : DEFAULT_CHARA;
    }, [params]);

    return (
        <>
            <div className={styles.mainVisual}>
                <div className={styles.Wrapper}>
                    <Heading text="にくじゃが" />
                    <div className={styles.illustWrap}>
                        <Image
                            src={chara}
                            width={260}
                            height={274}
                            alt="キャラクター"
                            className={styles.character}
                            priority
                        />
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