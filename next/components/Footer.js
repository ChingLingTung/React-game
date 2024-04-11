import React,{  useState, useEffect } from 'react';
import styles from '@/styles/footer.module.css';
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
// import { Link } from 'react-router-dom';
import MailtoBTN from './MailtoBTN';
import { FaEnvelope } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaYinYang } from "react-icons/fa6";

export default function Footer() {

  return (
    <div className={styles.footer}>
      <div className={styles.text_bar}>
        <div className={styles.text_group}>
          <Link className={styles.icon_group} href={"https://github.com/ChingLingTung"}>
            <FaGithub color={"#FFF"} size={30}/>
            <p className={styles.text}>All&nbsp;projects</p>
          </Link>
          <Link className={styles.icon_group} href={"https://github.com/ChingLingTung/timer1.0"}>
            <FaClock color={"#FFF"} size={30}/>
            <p className={styles.text}>Javascript&nbsp;timer</p>
          </Link>
          <Link className={styles.icon_group} href={"https://github.com/ChingLingTung/number_divine1.0"}>
            <FaYinYang color={"#FFF"} size={30}/>
            <p className={styles.text}>PHP&nbsp;divination</p>
          </Link>
          <Link className={styles.icon_group} href={"https://github.com/ChingLingTung/star_rating"}>
            <FaStar color={"#FFF"} size={30}/>
            <p className={styles.text}>jQuery&nbsp;star&nbsp;rating</p>
          </Link>
          {/* {isClient? */}
            <MailtoBTN 
              label={
                <div className={styles.icon_group}>
                  <FaEnvelope color={"#FFF"} size={30}/>
                  <p className={styles.text}>Contact&nbsp;me</p>
                </div>
              } 
              mailto="mailto:littlesmall0540@gmail.com"
            />
        </div>
        <div className={styles.text}>
          <FaRegCopyright color={"#FFF"}/>&nbsp;2024&nbsp;Evelyn&nbsp;Tung
        </div>
      </div>
    </div>
  )
}
