import React from 'react'
import styles from '@/styles/OX/square.module.css'

export default function Square({value, onClick}) {

  return (
    <button className={styles.btn} onClick={onClick}>
      {value}
    </button>
  );
}
