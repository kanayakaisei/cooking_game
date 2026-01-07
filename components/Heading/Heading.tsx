"use client"
import { useRouter } from "next/navigation";
import styles from "./Heading.module.css"
import Image from "next/image"

type Props = {
    text: string
}

const Heading = ({ text }: Props) => {
    const router = useRouter();

    return (
        <div className={styles.titleWrap}>
            <button className={styles.circle}>
                <Image
                    src="/image/components/arrow.png"
                    width={80}
                    height={80}
                    alt="矢印"
                    className={styles.arrow}
                    onClick={() => router.back()} />
            </button>
            <h1 className={styles.title}>{text}</h1>
        </div>
    )
}

export default Heading;
