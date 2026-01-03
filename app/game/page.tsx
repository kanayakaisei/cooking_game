"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Message from "./components/Message/Message";
import Cut from "./components/CutStep/CutStep";
import Mix from "./components/MixStep/MixStep";
import Flip from "./components/FlipStep/FlipStep";
import Complete from "./components/Complete/Complete";
import Heading from "@/components/Heading/Heading";


const Game = () => {
    const [step, setStep] = useState(0);

    // キャラクター指定
    const params = useSearchParams();
    const chara = params.get("chara") || "/image/mouse.svg";

    return (
        <>
            <div className={styles.mainVisual}>
                <div className={styles.Wrapper}>
                    <Heading text="肉じゃが" />
                    <div className={styles.illustWrap}>
                        <Image
                            src={chara}
                            width={260}
                            height={274}
                            alt="キャラクター"
                            className={styles.chara}
                        ></Image >
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