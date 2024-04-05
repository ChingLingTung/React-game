import React from 'react';
import styles from '@/styles/Card_matching/each_card.module.css'

export default function EachCard({ card, handleChoice, flipped, disabled }) {
  // 多設定一個disabled狀態避免使用者在配對結果出來前快速點擊其他卡片造成錯誤
  const handleClick = () => {
    if(!disabled){
      handleChoice(card);
    }
    
  }
  return (
      <div className={styles.card}>
        <div className={flipped? styles.flipped : ""}>
          <img className={styles.front} src={card.src} alt="card front"/>
          <img className={styles.back} src="/card_img/Card_matching_cover.png" onClick={handleClick} alt="card back"/>
        </div>
      </div>
  )
}
