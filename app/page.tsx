import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>トップページ</h1>
      <p className={styles.explanation}>子供が遊ぶ料理ゲーム</p>
    </div>
  );
}
