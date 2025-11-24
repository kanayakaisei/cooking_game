import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>トップページ</h1>
      <p className={styles.explanation}>子供が遊ぶ料理ゲーム</p>
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
