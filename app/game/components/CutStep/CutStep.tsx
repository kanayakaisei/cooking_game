import styles from "./cutStep.module.css";
import Image from "next/image";

type Props = {
    src: string
    alt: string
    width: number
    height: number
}


const Cut = ({ src, width, height, alt }: Props) => {
    return (
        <>

            <div className={styles.imageWrap}>
                <Image
                    src="/image/cutBoard.png"
                    width={840}
                    height={280}
                    alt="まないた"
                    className={styles.cutBoard}
                ></Image >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
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
};

export default Cut;