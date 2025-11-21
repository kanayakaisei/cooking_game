import styles from "./Message.module.css";
import Image from "next/image";

type Props = {
    title: string
    src: string
    alt: string
    width: number
    height: number
}



const Message = ({ title, src, width, height, alt }: Props) => {


    return (
        <>
            <div className={styles.messageWrap}>
                <h1 className={styles.message}>{title}</h1>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={styles.MePotato}
                ></Image>
            </div>
            <div className={styles.imageWrap}>
                <Image
                    src="/image/speechBubble.png"
                    width={740}
                    height={400}
                    alt="吹き出し"
                    className={styles.speechBubble}
                ></Image>
            </div>
        </>
    )
}

export default Message;