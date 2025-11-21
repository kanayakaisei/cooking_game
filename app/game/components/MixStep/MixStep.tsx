import styles from "./mixStep.module.css";
import Image from "next/image";

const Mix = () => {
    return (
        <>

            <div className={styles.imageWrap}>
                <Image
                    src="/image/pot.png"
                    width={540}
                    height={330}
                    alt="なべ"
                    className={styles.pot}
                ></Image >
                <Image
                    src="/image/ladle.png"
                    width={190}
                    height={330}
                    alt="おたま"
                    className={styles.ladle}
                ></Image>
            </div>
        </>
    )
}

export default Mix;