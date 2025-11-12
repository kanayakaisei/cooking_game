import styles from "./flipStep.module.css";
import Image from "next/image";


const Flip = () => {
    return (
        <>
            <h1>食材をひっくり返す</h1>

            <Image
                src="/image/frypan.png"
                width={260}
                height={400}
                alt="フライパン"
            ></Image>
        </>
    )
}

export default Flip;