import styles from "./mixStep.module.css";
import Image from "next/image";

const Mix = () => {
    return (
        <>
            <h1>料理を混ぜる</h1>
            <Image
                src="/image/Group.png"
                width={200}
                height={360}
                alt="ヘラ"
            ></Image>
        </>
    )
}

export default Mix;