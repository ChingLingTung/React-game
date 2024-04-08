import React, { useEffect, useState } from 'react'
import styles from '@/styles/Card_matching/mode_check_bar.module.css';
import ModeCheck from './Mode_check';
export default function ModeCheckBar({setGetSelectedMode, setGetLevel, setGetEasy, setGetNormal, setGetHard}) {
  const [selectedMode, setSelectedMode] = useState(0);
  const [level, setLevel] = useState(0);
  const [easy, setEasy] = useState(false);
  const [normal, setNormal] = useState(false);
  const [hard, setHard] = useState(false);

  useEffect(()=>{
    setGetSelectedMode(selectedMode);
    setGetLevel(level)
  },[selectedMode, level]);
  useEffect(()=>{
    setGetEasy(easy)
  },[easy]);
  useEffect(()=>{
    setGetNormal(normal)
  },[normal]);
  useEffect(()=>{
    setGetHard(hard)
  },[hard]);
  return (
    <div className={styles.mode_list}>
      <ModeCheck 
        text="easy" 
        setEasy={setEasy}
        setNormal={setNormal}
        setHard={setHard}
        setLevel={setLevel}
        setSelectedMode={setSelectedMode}
        // modeHandler={modeHandler}
      />
      <ModeCheck 
        text="normal"
        setEasy={setEasy}
        setNormal={setNormal}
        setHard={setHard}
        setLevel={setLevel}
        setSelectedMode={setSelectedMode}
        // modeHandler={modeHandler}
      />
      <ModeCheck 
        text="hard"
        setEasy={setEasy}
        setNormal={setNormal}
        setHard={setHard}
        setLevel={setLevel}
        setSelectedMode={setSelectedMode}
        // modeHandler={modeHandler}
      />
      {/* <p>level: {level}</p>
      <p>selectedMode: {selectedMode}</p> */}
    </div>
  )
}
