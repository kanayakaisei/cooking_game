import styles from "./Message.module.css";
import Image from "next/image";


const Message = () => {
    return (
        <>
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