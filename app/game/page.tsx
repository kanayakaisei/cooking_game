"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Cut from "./components/CutStep/CutStep";
import Mix from "./components/MixStep/MixStep";
import Flip from "./components/FlipStep/FlipStep";



const Game = () => {

    const [step, setStep] = useState("cut");
    const [count, setCount] = useState(0)

    const newCount = count + 1;

    const handle = () => {
        if (step === "cut") {
            setStep("mix");
        } else if (step === "mix") {
            setCount(newCount);
            if (newCount >= 10) {
                setStep("flip");
            }
        } else if (step === "flip") {
            setStep("finish");
        } else if (step === "finish") {
            setStep("cut")
        }
    };


    return (
        <>
            <div className={styles.mainVisual}>
                <div className={styles.Wrapper}>
                    <div className={styles.titleWrap}>
                        <div className={styles.circle}>
                            <Image
                                src="/image/arrow.png"
                                width={80}
                                height={80}
                                alt="矢印"
                                className={styles.arrow}
                            />
                        </div>
                        <h1 className={styles.title}>肉じゃが</h1>
                    </div>
                    <div>
                        {step === "cut" && <Cut />}
                        {step === "mix" && <Mix />}
                        {step === "flip" && <Flip />}
                        {step === "finish" && <p>ゲーム完了！ (成功と失敗のページ切り替えをここで出来てるように) <Link href="/">戻る</Link > </p>}

                        {step !== "finish" && (
                            <button onClick={handle} className={styles.click}>クリック回数{count}</button>
                        )}
                    </div>
                </div>
            </div >

        </>
    )
}

export default Game;