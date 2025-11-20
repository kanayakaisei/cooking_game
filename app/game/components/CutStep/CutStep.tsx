import styles from "./cutStep.module.css";
import Image from "next/image";

const Cut = () => {
    return (
        <>

            <div className={styles.imageWrap}>
                <Image
                    src="/image/chara.png"
                    width={200}
                    height={214}
                    alt="キャラクター"
                    className={styles.chara}
                ></Image >
                <Image
                    src="/image/Group78.png"
                    width={840}
                    height={280}
                    alt="まないた"
                    className={styles.cutBoard}
                ></Image >
                <Image
                    src="/image/potato.png"
                    width={450}
                    height={250}
                    alt="じゃがいも"
                    className={styles.potato}
                ></Image >
                <Image
                    src="/image/knife.png"
                    width={220}
                    height={420}
                    alt="包丁"
                    className={styles.knife}
                ></Image>
            </div>

        </>
    )
}

export default Cut;