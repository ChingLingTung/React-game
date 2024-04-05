import React from 'react';
import styles from '@/styles/Card_matching/each_card.module.css'

export default function EachCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  }
  return (
      <div className={styles.card}>
        <div className={flipped? styles.flipped : ""}>
          <img className={styles.front} src={card.src} alt="card front"/>
          <img className={styles.back} src="/Card_matching_cover.png" onClick={handleClick} alt="card back"/>
        </div>
      </div>
  )
}
