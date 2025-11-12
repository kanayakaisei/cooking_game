import styles from "./flipStep.module.css";
import Image from "next/image";


const Flip = () => {
    return (
        <div>
            <h1>食材をひっくり返す</h1>

            <Image
                src="/frypan.png"
                width={100}
                height={400}
                alt="フライパン"
            ></Image>
        </div>
    )
}

export default Flip;