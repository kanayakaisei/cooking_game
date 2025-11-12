import styles from "./cutStep.module.css";
import Image from "next/image";

const Cut = () => {
    return (
        <div>
            <h1>食材切る</h1>
            <Image
                src="/Ellipse.png"
                width={400}
                height={300}
                alt="まないた"
            ></Image >
            <Image
                src="/Group.png"
                width={100}
                height={400}
                alt="包丁"
            ></Image>
        </div >
    )
}

export default Cut;