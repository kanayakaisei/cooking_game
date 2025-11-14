import styles from "./cutStep.module.css";
import Image from "next/image";

const Cut = () => {
    return (
        <>
            <Image
                src="/image/Ellipse.png"
                width={400}
                height={300}
                alt="まないた"
            ></Image >
            <Image
                src="/image/Group.png"
                width={200}
                height={360}
                alt="包丁"
            ></Image>
        </>
    )
}

export default Cut;