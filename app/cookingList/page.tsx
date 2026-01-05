import styles from "./page.module.css";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import Detail from "@/lib/detail";

const List = () => {
    return (
        <div className={styles.contentsWrap}>
            <Heading text="レシピいちらん" />
            <div className={styles.cardWrap}>
                {Detail.map((list) => (
                    <article key={list.id} className={styles.card}>
                        <h3>{list.title}</h3>
                        <div className={styles.imageWrap}>
                            <Image
                                src={list.image}
                                alt={list.title}
                                width={250}
                                height={180}
                            />
                        </div>
                        <div className={styles.ingredients}>
                            {list.ingredients.map((item) => (
                                <Image
                                    key={item}
                                    src={item}
                                    alt="ingredient"
                                    width={60}
                                    height={40}
                                />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default List;