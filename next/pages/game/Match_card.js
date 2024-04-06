import React from 'react'
import { Layout1 } from "@/components/Layout1";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from '@/styles/Card_matching/match_card.module.css'
import EachCard from '@/components/Match_card/Each_card';
import { useRouter } from "next/router";
export default function MatchCard() {
  // 卡片圖案庫
  const cardImages = [
    {"src":"/card_img/heart card.png", matched: false },
    {"src":"/card_img/star card.png", matched: false },
    {"src":"/card_img/shining card.png", matched: false },
    {"src":"/card_img/flower card.png", matched: false },
    {"src":"/card_img/swirl card.png", matched: false },
    {"src":"/card_img/snow card.png", matched: false },
    {"src":"/card_img/moon card.png", matched: false },
    {"src":"/card_img/music card.png", matched: false },
    {"src":"/card_img/circles card.png", matched: false },
  ];
  const [cards,setCards] = useState([]);
  const [turns,setTurns] = useState(0);
  const [firstOne,setFirstOne] = useState(null);
  const [secondOne,setSecondOne] = useState(null);
  const [disabled, setDisabled] = useState(false);
  
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }));
    setFirstOne(null);
    setSecondOne(null);
    setCards(shuffledCards);
    setTurns(0);
  }
  // 判斷點擊卡片時第一張卡是否已被點擊過，決定這次點擊的卡的內容要設定給第一次或第二次
  const handleChoice = (card) => {
    firstOne ?  setSecondOne(card) : setFirstOne(card);
  console.log(card);
  }

  // 每點完兩次卡片完成一組配對後，更新第一張和第二張的值及輪數
  const resetTurn = () => {
    setFirstOne(null);
    setSecondOne(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }
  // console.log(cards, turns);

  // 依照配對狀況更新牌的狀態
  useEffect(()=>{
    if(firstOne && secondOne){
      setDisabled(true);
      if(firstOne.src === secondOne.src){
        // console.log('配對成功');
        setCards((prevCards) =>{
          return prevCards.map((card) => {
            if(card.src === firstOne.src){
              return{...card, matched: true};
            }else{
              return card;
            }
          })
        })
        resetTurn();
      }else{
        // console.log('配對失敗');
        setTimeout(()=>{
          resetTurn();
        }, 1000);
      }
    }
  },[firstOne, secondOne])

  // 首次渲染後自動重置遊戲
  useEffect(()=>{
    shuffleCards();
  },[])
  return (
    <>
      <Layout1>
        <div className="center">
          <h1>Card Matching</h1>
          <button className={styles.newgame_btn} onClick={shuffleCards}>New game</button>
          <div className={styles.card_grid}>
            {cards.map(card => (
              <EachCard 
              key = {card.id} 
              card={card} 
              handleChoice={handleChoice} 
              flipped={card === firstOne || card === secondOne || card.matched}
              disabled={disabled}
              />
            ))}
          </div>
          <h3 className={styles.text}>Turns: {turns}</h3>
        </div>
        
        
      </Layout1>
      <Head>
        <title>卡片配對記憶遊戲</title>
      </Head>
    </>
  )
}
