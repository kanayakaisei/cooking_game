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


const potatoImages = ["/image/potato.png", "/image/cutPotato.png"];
const carrotImages = ["/image/carrot.png", "/image/cutCarrot.png"];
const meatImages = ["/image/meat.png", "/image/cutMeat.png"];
const onionImages = ["/image/onion.png", "/image/cutOnion.png"];

const Game = () => {

    const [step, setStep] = useState("potatoMsg");

    const [cutIndex, setCutIndex] = useState(0);

    const [mixCount, setMixCount] = useState(0);
    //10回押したら
    const [mixPos, setMixPos] = useState(0);


    const handle = () => {
        if (step === "potatoMsg") {
            setStep("cutPotatoMsg");

        } else if (step === "cutPotatoMsg") {
            setStep("potatoCut");
            setCutIndex(0);
            //じゃがいも

        } else if (step === "potatoCut") {
            if (cutIndex < potatoImages.length - 1) {
                setCutIndex((prev) => prev + 1);
            } else {
                setStep("carrotMsg");
                setCutIndex(0);
            }
            //にんじん

        } else if (step === "carrotMsg") {
            setStep("cutCarrotMsg");

        } else if (step === "cutCarrotMsg") {
            setStep("carrotCut");
            setCutIndex(0);

        } else if (step === "carrotCut") {
            if (cutIndex < carrotImages.length - 1) {
                setCutIndex((prev) => prev + 1);
            } else {
                setStep("meatMsg");
                setCutIndex(0);
            }
            //お肉
        } else if (step === "meatMsg") {
            setStep("cutMeatMsg");

        } else if (step === "cutMeatMsg") {
            setStep("meatCut");
            setCutIndex(0);

        } else if (step === "meatCut") {
            if (cutIndex < meatImages.length - 1) {
                setCutIndex((prev) => prev + 1);
            } else {
                setStep("onionMsg");
                setCutIndex(0);
            }
            //タマネギ
        } else if (step === "onionMsg") {
            setStep("cutOnionMsg");

        } else if (step === "cutOnionMsg") {
            setStep("onionCut");
            setCutIndex(0);

            //混ぜる画面
        } else if (step === "onionCut") {
            if (cutIndex < onionImages.length - 1) {
                setCutIndex((prev) => prev + 1);
            } else {
                setStep("mixMsg");
                setCutIndex(0);
            }

        } else if (step === "mixMsg") {
            setStep("mix");
            setMixCount(0);

        } else if (step === "mix") {
            const next = mixCount + 1;
            setMixCount(next);
            setMixPos((prev) => (prev + 1) % 2);

            if (next >= 10) {
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

    const currentCutImage =
        step === "potatoCut"
            ? potatoImages[cutIndex]
            : step === "carrotCut"
                ? carrotImages[cutIndex]
                : step === "meatCut"
                    ? meatImages[cutIndex]
                    : step === "onionCut"
                        ? onionImages[cutIndex]
                        : "";


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


                        {/* お肉 */}
                        {step === "meatMsg" && <Message
                            title="お肉をきろう！"
                            src="/image/Me_meat.png"
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

                        {(step === "potatoCut" ||
                            step === "carrotCut" ||
                            step === "meatCut" ||
                            step === "onionCut") &&
                            currentCutImage && (
                                <Cut
                                    src={currentCutImage}
                                    width={450}
                                    height={250}
                                    alt="きる食材"
                                />
                            )}


                        {step === "mixMsg" && <Mix

                        />}

                        {step === "mix" && <Mix
                            position={mixPos}

                        />}

                        {step === "flipMsg" && <Flip

                        />}

                        {step === "finish" && <p>ゲーム完了！ (成功と失敗のページ切り替えをここで出来てるように) <Link href="/">戻る</Link > </p>}

                        {step !== "finish" && (
                            <button onClick={handle} className={styles.click}>クリック</button>
                        )}
                    </div>
                </div>
            </div >

        </>
    )
}

export default Game;