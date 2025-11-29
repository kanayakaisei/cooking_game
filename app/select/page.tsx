import styles from "./page.module.css";
import Image from "next/image";



const Select = () => {
    return (
        <>

            <div className={styles.mainVisual}>
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
                    <h1 className={styles.title}>キャラクターせんたく</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.charaScroll}>
                        <Image
                            src="/image/chara.png"
                            width={300}
                            height={320}
                            alt="ねずみのキャラクター"
                        ></Image>
                        <Image
                            src="/image/chara.png"
                            width={300}
                            height={320}
                            alt="ねずみのキャラクター"
                        ></Image>
                        <Image
                            src="/image/chara.png"
                            width={300}
                            height={320}
                            alt="ねずみのキャラクター"
                        ></Image>
                        <Image
                            src="/image/chara.png"
                            width={300}
                            height={320}
                            alt="ねずみのキャラクター"
                        ></Image>
                    </div>
                </div>
                <div className={styles.block}>
                    <p className={styles.subMeg}>だれといっしょにおりょうりする？</p>
                    <button className={styles.startBtn}>
                        <p>りょうりかいし！</p>
                    </button>
                </div>


            </div>
        </>
    )
}

export default Select;