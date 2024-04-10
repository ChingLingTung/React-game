import React from 'react'
import { Layout1 } from "@/components/Layout1";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from '@/styles/Card_matching/match_card.module.css';
import ModeCheckBar from '@/components/Match_card/Mode_check_bar';
import EachCard from '@/components/Match_card/Each_card';
import { useRouter } from "next/router";
export default function MatchCard() {
  // 卡片圖案庫
  const cardImages = [
    {"src":"/card_img/heart_card.png", matched: false },
    {"src":"/card_img/star_card.png", matched: false },
    {"src":"/card_img/shining_card.png", matched: false },
    {"src":"/card_img/flower_card.png", matched: false },
    {"src":"/card_img/swirl_card.png", matched: false },
    {"src":"/card_img/snow_card.png", matched: false },
    {"src":"/card_img/moon_card.png", matched: false },
    {"src":"/card_img/music_card.png", matched: false },
    {"src":"/card_img/circles_card.png", matched: false },
  ];
  const [cards,setCards] = useState([]);
  const [turns,setTurns] = useState(0);
  const [firstOne,setFirstOne] = useState(null);
  const [secondOne,setSecondOne] = useState(null);
  const [disabled, setDisabled] = useState(false);
  
  const [changeMode, setChangeMode] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [getSelectedMode, setGetSelectedMode] = useState(0);
  const [getLevel, setGetLevel] = useState(0);
  const [getEasy, setGetEasy] = useState(false);
  const [getNormal, setGetNormal] = useState(false);
  const [getHard, setGetHard] = useState(false);
  
  const shuffleCards = () => {
    setGetSelectedMode(getSelectedMode);
    setGetLevel(getLevel);
    // console.log(getSelectedMode);
    if(getSelectedMode !== 0 && (getEasy || getNormal || getHard)){
      const cardList = new Set();
      
      // selectedCard.length = mode ;
      // const cardList = cardImages.filter(card => {
      //   set.has(card)? false : set.add(card)
      // });
      const getCardList = () => {
        while(cardList && cardList.length !==0 && cardList.size < getSelectedMode){
        cardList.add(cardImages[getRandom(1, cardImages.length)-1])
        console.log(cardImages[getRandom(1, 9)-1])
        console.log(cardList)
        }
      }
      getCardList();
      setSelectedCard(cardList);
      console.log(cardList, Array.from(cardList));
      // setSelectedCard(cardList);
      const shuffledCards = [...cardList, ...cardList]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random() }));
      setFirstOne(null);
      setSecondOne(null);
      setCards(shuffledCards);
      setTurns(0);
      setChangeMode(false);
      console.log(cardList, getSelectedMode);
      }
    
    
    
    
  }
  // 定義一個取得隨機數的方法
  const getRandom = (min, max) => {
    return Math.floor(Math.random()*max) + min;
  }
  // const test = () => {
  //   console.log(getRandom(1,4));
  //   console.log(getRandom(1, cardImages.length)-1);
  //   console.log(cardImages[getRandom(1, cardImages.length)-1]);
  //   const testCard = new Set();
  //   // for(i=0; i< mode ; i++){

  //   // }
  //   const testCards = testCard.add(cardImages[getRandom(1, cardImages.length)-1]);
  //   console.log(testCard, testCards);
  // }
  // useEffect(()=>{
  //   test();
  // },[mode])
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

  // 首次渲染後自動重置遊戲、選擇的難度改變重置遊戲
  useEffect(()=>{
    shuffleCards();
  },[getSelectedMode, changeMode]);

  useEffect(()=>{
    if(changeMode){
      setCards([]);
    };
  },[changeMode]);
  useEffect(()=>{
    if(cards == []){
      setTurns(0);
      // setGetSelectedMode(0);
    };
  },[cards])
  
  return (
    <>
      <Layout1>
        <div className="center">
          <h1>Card Matching</h1>
          {(!getEasy && !getNormal && !getHard) || (cards.length === 0)?
          (
            <>
              <h3>
                Please select a mode
              </h3>
              <ModeCheckBar 
              setGetSelectedMode={setGetSelectedMode} 
              setGetLevel={setGetLevel}
              setGetEasy={setGetEasy}
              setGetNormal={setGetNormal}
              setGetHard={setGetHard}
              />
            </>
          )
          :
          (
            changeMode ?
              <div className={styles.button_list}>
                <button className={styles.newgame_btn} onClick={shuffleCards}>New game of the same mode</button>
                <ModeCheckBar 
                  setGetSelectedMode={setGetSelectedMode} 
                  setGetLevel={setGetLevel}
                  setGetEasy={setGetEasy}
                  setGetNormal={setGetNormal}
                  setGetHard={setGetHard}
                />
              </div>
              :
              
              <div className={styles.button_list}>
                <button 
                  className={styles.newgame_btn} 
                  onClick={shuffleCards}
                >
                  New game of the same mode
                </button>
                <button 
                  className={styles.change_mode} 
                  onClick={()=>{
                    setChangeMode(true);
                    setGetSelectedMode(0);
                    setGetLevel(0);
                    setTurns(0);
                    }}
                >
                  Select other mode
                </button>
              </div>
              )  
            }
          
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
          {/* <h3 className={styles.text}>困難程度level: {getLevel}</h3>
          <h3 className={styles.text}>卡片組數mode: {getSelectedMode}</h3> */}
        </div>
        
        
      </Layout1>
      <Head>
        <title>卡片配對記憶遊戲</title>
      </Head>
    </>
  )
}
