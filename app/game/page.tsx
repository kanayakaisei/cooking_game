"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Message from "./components/Message/Message";
import Cut from "./components/CutStep/CutStep";
import Mix from "./components/MixStep/MixStep";
import Flip from "./components/FlipStep/FlipStep";


type Step =
    | "potatoMsg"
    | "cutPotatoMsg"
    | "potatoCut"
    | "carrotMsg"
    | "cutCarrotMsg"
    | "carrotCut"
    | "mixMsg"
    | "mix"
    | "flipMsg"
    | "flip"
    | "finish";


const potatoImages = [
    "/image/potato.png",
    "/image/cutPotato.png",
];

const carrotImages = [
    "/image/carrots.png",
    "/image/cutCarrots.png",
];

const Game = () => {

    const [step, setStep] = useState("potatoMsg");

    const [count, setCount] = useState(0)
    //10回押したとわかりやすくするためにおいてるけど、かなやさんが作業終わったらけしてもらっていいです

    const [cutIndex, setCutIndex] = useState(0);
    const [mixCount, setMixCount] = useState(0);


    const handle = () => {
        const newCount = count + 1;


        if (step === "potatoMsg") {
            setStep("cut");
        } else if (step === "cut") {
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
                        <button className={styles.circle}>
                            <Image
                                src="/image/arrow.png"
                                width={80}
                                height={80}
                                alt="矢印"
                                className={styles.arrow}
                            />
                        </button>
                        <h1 className={styles.title}>肉じゃが</h1>
                    </div>
                    <div className={styles.illustWrap}>
                        <Image
                            src="/image/chara.png"
                            width={200}
                            height={214}
                            alt="キャラクター"
                            className={styles.chara}
                        ></Image >

                        {step === "potatoMsg" && <Message
                            title="じゃがいもをきろう！"
                            src="/image/Me_potato.png"
                            width={400}
                            height={190}
                            alt="じゃがいもの料理写真"
                        />}

                        {step === "message" && <Message
                            title="じゃがいもをきろう！"
                            src="/image/Me_cutPotato.png"
                            width={400}
                            height={190}
                            alt="じゃがいもが半分の料理写真"
                        />}

                        {step === "cut" && <Cut
                            src="/image/potato.png"
                            width={450}
                            height={250}
                            alt="じゃがいも"
                        />}

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