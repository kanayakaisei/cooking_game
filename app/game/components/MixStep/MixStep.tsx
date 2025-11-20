import styles from "./mixStep.module.css";
import Image from "next/image";

const Mix = () => {
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
                    src="/image/pot.png"
                    width={540}
                    height={330}
                    alt="なべ"
                    className={styles.pot}
                ></Image >
                <Image
                    src="/image/ladle.png"
                    width={180}
                    height={330}
                    alt="おたま"
                    className={styles.ladle}
                ></Image>
            </div>
        </>
    )
}

export default Mix;