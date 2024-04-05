import { Layout1 } from "@/components/Layout1";
import Head from "next/head";
import styles from '@/styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  // 避免使用 window 底下的物件
  // console.log("window.location.href:", window.location.href);

  return (
    <>
      <Layout1>
        <div className="center">
          <p className="title">Project List</p>
          <div className={styles.list}>
            <Link href="/game/OOXX">
            <img className={`${styles.game_icon} ${styles.OX_game}`} src="/OX/OX_icon.png" alt="OX遊戲"/>
            </Link>
            <Link href="/game/Tetris_game">
              <img className={styles.game_icon} src="/tetris/Tetris_icon.png" alt="OX遊戲"/>
            </Link>
          </div>
        </div>
      </Layout1>
      <Head>
        <title>童靜伶的作品集</title>
      </Head>
    </>
  );
}
