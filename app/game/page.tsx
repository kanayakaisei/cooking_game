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
    | "onionCutMsg"
    | "cutOnionMsg"
    | "onionCut"
    | "meatCutMsg"
    | "cutMeatMsg"
    | "meatCut"
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
    "/image/carrot.png",
    "/image/cutCarrot.png",
];

const meatImages = [
    "/image/meat.png",
    "/image/cutMeat.png",
];

const onionImages = [
    "/image/onion.png",
    "/image/cutOnion.png",
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
            setStep("cutPotatoMsg");
        } else if (step === "cutPotatoMsg") {
            setStep("potatoCut");
            //じゃがいも
        } else if (step === "potatoCut") {
            setStep("carrotMsg");
            //にんじん
        } else if (step === "carrotMsg") {
            setStep("cutCarrotMsg");
        } else if (step === "cutCarrotMsg") {
            setStep("carrotCut");
        } else if (step === "carrotCut") {
            setStep("meatCutMsg");
            //お肉
        } else if (step === "cutMeatMsg") {
            setStep("meatCut");
        } else if (step === "meatCut") {
            setStep("onionMsg");
            //タマネギ
        } else if (step === "cutOnionMsg") {
            setStep("onionCut");

            //混ぜる画面
        } else if (step === "potatoCut") {
            setStep("mixMsg");
        } else if (step === "mixMsg") {
            setStep("mix");
            setMixCount(0);
        } else if (step === "mix") {
            setCount(newCount);
            if (newCount >= 10) {
                setStep("flipMsg");
            }

            //ひっくり返す画面
        } else if (step === "flipMsg") {
            setStep("flip");
        }
        else if (step === "flip") {
            setStep("finish");
        }
        else if (step === "finish") {
            return;
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

                        {step === "cutPotatoMsg" && <Message
                            title="じゃがいもをきろう！"
                            src="/image/Me_cutPotato.png"
                            width={400}
                            height={190}
                            alt="じゃがいもが半分の料理写真"
                        />}

                        {step === "potatoCut" && <Cut
                            src="/image/potato.png"
                            width={450}
                            height={250}
                            alt="じゃがいも"
                        />}

                        {step === "carrotMsg" && <Message
                            title="にんじんをきろう！"
                            src="/image/Me_potato.png"
                            width={400}
                            height={190}
                            alt="にんじんの料理写真"
                        />}

                        {step === "cutCarrotMsg" && <Message
                            title="にんじんをきろう！"
                            src="/image/Me_cutPotato.png"
                            width={400}
                            height={190}
                            alt="にんじんが半分の料理写真"
                        />}

                        {step === "carrotCut" && <Cut
                            src="/image/carrot.png"
                            width={450}
                            height={250}
                            alt="にんじん"
                        />}

                        {/* お肉 */}
                        {step === "meatMsg" && <Message
                            title="お肉をきろう！"
                            src="/image/Me_potato.png"
                            width={400}
                            height={190}
                            alt="お肉の料理写真"
                        />}

                        {step === "cutMeatMsg" && <Message
                            title="お肉をきろう！"
                            src="/image/Me_cutPotato.png"
                            width={400}
                            height={190}
                            alt="お肉が半分の料理写真"
                        />}

                        {step === "meatCut" && <Cut
                            src="/image/meat.png"
                            width={450}
                            height={250}
                            alt="お肉"
                        />}
                        {/* たまねぎ */}
                        {step === "onionMsg" && <Message
                            title="たまねぎをきろう！"
                            src="/image/Me_potato.png"
                            width={400}
                            height={190}
                            alt="じゃがいもの料理写真"
                        />}

                        {step === "cutOnionMsg" && <Message
                            title="たまねぎをきろう！"
                            src="/image/Me_cutPotato.png"
                            width={400}
                            height={190}
                            alt="たまねぎが半分の料理写真"
                        />}

                        {step === "onionCut" && <Cut
                            src="/image/onion.png"
                            width={450}
                            height={250}
                            alt="たまねぎ"
                        />}

                        {step === "mixMsg" && <Mix


                        />}

                        {step === "mix" && <Mix

                        />}

                        {step === "flipMsg" && <Flip

                        />}

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