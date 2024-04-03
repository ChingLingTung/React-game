import { Layout1 } from "@/components/Layout1";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from '@/styles/about.module.css'
import { useRouter } from "next/router";

export default function Info() {

  return (
    <>
      <Layout1>
        <div className="center">
          <p className="title">About Project</p>
          <div className={styles.list}>
          <Link href={"/game/OOXX"}>
            <div className={styles.card}>
              <img src='/OX_info.png' alt="OX遊戲"/>
              <div>
                <h2>Tic Tac Toe</h2>
                <p>Two players, take turns putting O or X.</p>
                <p>The one who first get one row with same mark by up, down, across, or diagonally is the winner.</p>
              </div>
            </div>
          </Link>
          <Link href={"/game/Tetris_game"}>
            <div className={styles.card}>
              <img src='/Tetris_info.png' alt="Tetris"/>
              <div>
                <h2>Tetris</h2>
                <p>Tetrominoes descends automatically, complete lines by moving tetrominoes.</p>
                <p>The completed lines will disappear and get the points,the game ends when the uncleared lines reach the top of the playing field.</p>
              </div>
            </div>
          </Link>
            
          </div>
        </div>
      </Layout1>
      <Head>
        <title>作品簡介</title>
      </Head>
    </>
  );
}
