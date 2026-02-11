"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import Detail from "@/lib/detail";
import Link from "next/link";
import Loading from "@/components/Loading/page";

const List = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div className={styles.contentsWrap}>
            {!loading ? (
                <>
                    <Loading onComplete={() => setLoading(true)} />
                </>
            ) : (
                <>
                    <Heading text="レシピいちらん" />
                    <div className={styles.cardWrap}>
                        {Detail.map((list) => (
                            <Link key={list.id} href="/select" className={styles.link}>
                                <article key={list.id} className={styles.card}>
                                    <h3>{list.title}</h3>
                                    <div className={styles.imageWrap}>
                                        <Image
                                            src={list.image}
                                            alt={list.title}
                                            width={250}
                                            height={180}
                                            priority
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
                                                priority
                                            />
                                        ))}
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default List;