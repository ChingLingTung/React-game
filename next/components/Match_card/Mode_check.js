import React from 'react'
import styles from '@/styles/Card_matching/mode_check_bar.module.css'
export default function ModeCheck({text, setEasy, setNormal, setHard, setLevel, setSelectedMode}) {
  return (
    <button 
      className={styles.mode_btn}
      onClick={()=>{
        if(text === "easy"){
          setEasy(true);
          setNormal(false);
          setHard(false);
          setLevel(1);
          setSelectedMode(3);
          // console.log(text);
        }
        if(text === "normal"){
          setEasy(false);
          setNormal(true);
          setHard(false);
          setLevel(2);
          setSelectedMode(6);
          // console.log(text);
        }
        if(text === "hard"){
          setEasy(false);
          setNormal(false);
          setHard(true);
          setLevel(3);
          setSelectedMode(9);
          // console.log(text);
        }
      }}
    >
    {text}
    </button>
  )
}
