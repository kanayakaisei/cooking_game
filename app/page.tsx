import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.mainVisual}>
      <h1 className={styles.logo}>
        <Image
          src="/image/top/logo.svg"
          alt="ロゴ"
          width={1100}
          height={510}
        />
      </h1>
      <div className={styles.btnWrap}>
        <Link href="/cookingList" className={styles.startBtn}>
          スタート
        </Link>
      </div>

      <div className={styles.animal}>
        <Image
          className={styles.penguin}
          src="/image/top/mainVisual_penguin.svg"
          alt="ぺんぎん"
          width={371}
          height={464}
        />
        <Image
          className={styles.mouse}
          src="/image/top/mainVisual_mouse.svg"
          alt="ねずみ"
          width={420}
          height={440}
        />
        <Image
          className={styles.tiger}
          src="/image/top/mainVisual_tiger.svg"
          alt="とら"
          width={377}
          height={470}
        />
        <Image
          className={styles.cat}
          src="/image/top/mainVisual_cat.svg"
          alt="ねこ"
          width={381}
          height={474}
        />


      </div>
      <ul>
        <li>
          <Link href="/result"> resultページへ</Link>
          <Link href="/select"> selectページへ</Link>
          <Link href="/login"> ログインページへ</Link>
          <Link href="/game"> ゲームページへ</Link>
        </li>
      </ul>
    </div>
  );
}
