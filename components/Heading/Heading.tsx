import test from "node:test"
import styles from "./Heading.module.css"
import Image from "next/image"

type Props = {
    text: string
}

const Heading = ({ text }: Props) => {
    return (
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
            <h1 className={styles.title}>{text}</h1>
        </div>
    )
}

export default Heading;
