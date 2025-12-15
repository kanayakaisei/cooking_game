"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./cutStep.module.css";
import Image from "next/image";

type CutImage = {
    steps: string[];
};

type CutStep = {
    cut: CutImage[];
};

type Props = {
    onComplete: () => void;
}

const cookingImages: CutStep = {
    cut: [
        {
            steps: [
                "/image/potato_1.png",
                "/image/potato_2.png",
                "/image/potato_3.png",
                "/image/potato_4.png"
            ]
        },
        {
            steps: [
                "/image/meat_1.png",
                "/image/meat_2.png",
                "/image/meat_3.png",
                "/image/meat_4.png",
                "/image/meat_5.png"
            ]
        },
        {
            steps: [
                "/image/onion_1.png",
                "/image/onion_2.png",
                "/image/onion_3.png",
                "/image/onion_4.png",
                "/image/onion_5.png"
            ]
        },
        {
            steps: [
                "/image/carrot_1.png",
                "/image/carrot_2.png",
                "/image/carrot_3.png",
                "/image/carrot_4.png",
                "/image/carrot_5.png"
            ]
        }
    ],
};

const Cut = ({ onComplete }: Props) => {
    const [imageStep, setStep] = useState(0);
    const [cutCount, setCount] = useState(0);
    const [updateTime, setUpdateTime] = useState(0);
    const totalSteps = cookingImages.cut.reduce((sum, item) => sum + item.steps.length, 0);

    const cutSound = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const timer = setInterval(async () => {
            try {
                const data = await fetch("https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_cut.php")
                    .then(res => res.text());

                const newValue = parseInt(data) || 0;
                // DBの値が変わった場合のみ
                if (newValue !== cutCount) {
                    const now = Date.now();
                    // 2秒(2000ms)経っていない場合は画像を進めない
                    if (now - updateTime >= 100) {
                        setStep(prev => prev + 1);
                        setUpdateTime(now); // 時刻を更新
                    }
                    setCount(newValue);
                }
            } catch (e) {
                console.error(e);
            }
        }, 500);

        return () => clearInterval(timer);
    }, [cutCount, updateTime]);

    // Cut音追加/音量調整
    useEffect(() => {
        cutSound.current = new Audio("/sounds/cut.mp3");
        cutSound.current.volume = 1;
    }, [])

    useEffect(() => {
        if (imageStep > 0 && imageStep < totalSteps) {
            if (cutSound.current) {
                cutSound.current.currentTime = 0;
                cutSound.current.play().catch(() => { });
            }
        }
        if (imageStep >= totalSteps) {
            onComplete(); //全て終わったら呼び出す
        }
    }, [imageStep]);

    let remaining = imageStep;
    let ingredientIndex = 0;

    while (remaining >= cookingImages.cut[ingredientIndex].steps.length) {
        remaining -= cookingImages.cut[ingredientIndex].steps.length;
        ingredientIndex++;
        if (ingredientIndex >= cookingImages.cut.length) break;
    }

    const ingredient = cookingImages.cut[ingredientIndex];

    return (
        <>
            <div className={styles.imageWrap}>
                {ingredient && (
                    <Image
                        src={ingredient.steps[remaining]}
                        width={495}
                        height={251}
                        alt="食材"
                        className={styles.ingredients}
                    />
                )}
                <Image src="/image/cutBoard.png" width={840} height={280} alt="まないた" className={styles.cutBoard} />
                <Image src="/image/knife.png" width={220} height={420} alt="包丁" className={styles.knife} />
            </div>
        </>
    );
};

export default Cut;



// "use client";
// import { useState, useEffect } from "react";
// import styles from "./cutStep.module.css";
// import Image from "next/image";

// type CutImage = {
//     steps: string[];
// };

// type CutStep = {
//     cut: CutImage[];
// };

// type Props = {
//     onComplete: () => void;
// }

// const cookingImages: CutStep = {
//     cut: [
//         {
//             steps: [
//                 "/image/ingredients/potato_1.png",
//                 "/image/ingredients/potato_2.png",
//                 "/image/ingredients/potato_3.png",
//                 "/image/ingredients/potato_4.png"
//             ]
//         },
//         {
//             steps: [
//                 "/image/ingredients/meat_1.png",
//                 "/image/ingredients/meat_2.png",
//                 "/image/ingredients/meat_3.png",
//                 "/image/ingredients/meat_4.png",
//                 "/image/ingredients/meat_5.png"
//             ]
//         },
//         {
//             steps: [
//                 "/image/ingredients/onion_1.png",
//                 "/image/ingredients/onion_2.png",
//                 "/image/ingredients/onion_3.png",
//                 "/image/ingredients/onion_4.png",
//                 "/image/ingredients/onion_5.png"
//             ]
//         },
//         {
//             steps: [
//                 "/image/ingredients/carrot_1.png",
//                 "/image/ingredients/carrot_2.png",
//                 "/image/ingredients/carrot_3.png",
//                 "/image/ingredients/carrot_4.png",
//                 "/image/ingredients/carrot_5.png"
//             ]
//         },
//     ],
// };

// const Cut = ({ onComplete }: Props) => {
//     const [imageStep, setStep] = useState(0);
//     const [cutCount, setCount] = useState(0);
//     const totalSteps = cookingImages.cut.reduce((sum, item) => sum + item.steps.length, 0);

//     useEffect(() => {
//         const timer = setInterval(async () => {
//             try {
//                 const data = await fetch("https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/get_cut.php")
//                     .then(res => res.text()
//                     );
//                 const newValue = parseInt(data) || 0;
//                 if (newValue !== cutCount) {
//                     setStep(prev => prev + 1);
//                     setCount(newValue);
//                 }
//             } catch (e) {
//                 console.error(e);
//             }
//         }, 1000);
//         return () => clearInterval(timer);
//     }, [cutCount]);

//     useEffect(() => {
//         if (imageStep >= totalSteps) {
//             onComplete(); //全て終わったら呼び出す
//         }
//     }, [imageStep]);

//     let stepRemaining = imageStep;
//     let currentIngredientIndex = 0;

//     while (stepRemaining >= cookingImages.cut[currentIngredientIndex].steps.length) {
//         stepRemaining -= cookingImages.cut[currentIngredientIndex].steps.length;
//         currentIngredientIndex++;
//         // 範囲外なら終了
//         if (currentIngredientIndex >= cookingImages.cut.length) break;
//     }

//     const ingredient = cookingImages.cut[currentIngredientIndex];
//     return (
//         <>
//             <div className={styles.imageWrap}>
//                 {ingredient ? (
//                     <Image
//                         src={ingredient.steps[stepRemaining]}
//                         width={495}
//                         height={251}
//                         alt="食材"
//                         className={styles.ingredients}
//                     />
//                 ) : (
//                     <p>成功！</p>
//                 )}
//                 <Image
//                     src="/image/cutBoard.png"
//                     width={840}
//                     height={280}
//                     alt="まないた"
//                     className={styles.cutBoard}
//                 />
//                 <Image
//                     src="/image/knife.png"
//                     width={220}
//                     height={420}
//                     alt="包丁"
//                     className={styles.knife}
//                 />
//             </div>
//         </>
//     )
// };

// export default Cut;