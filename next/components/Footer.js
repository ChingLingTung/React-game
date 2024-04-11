import React from 'react';
import styles from '@/styles/footer.module.css';
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.text_bar}>
        <Link className={styles.text} href={"https://github.com/ChingLingTung?tab=repositories"}>
          <FaGithub color={"#FFF"} size={30}/>
        </Link>
        <div className={styles.text}>
          <FaRegCopyright color={"#FFF"}/>&nbsp;2024&nbsp;Evelyn&nbsp;Tung
        </div>
      </div>
    </div>
  )
}
