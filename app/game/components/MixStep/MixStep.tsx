import styles from "./mixStep.module.css";
import Image from "next/image";

const Mix = () => {
    return (
        <div>
            <h1>料理を混ぜる</h1>
            <Image
                src="/Group.png"
                width={100}
                height={400}
                alt="ヘラ"
            ></Image>
        </div>
    )
}

export default Mix;