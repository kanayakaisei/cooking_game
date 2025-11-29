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
            </div>
        </>
    )
}

export default Select;