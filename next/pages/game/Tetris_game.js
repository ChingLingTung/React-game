import React, { useEffect } from 'react';
import Head from 'next/head';
import { Layout1 } from '@/components/Layout1';
import Tetris from '@/components/Tetris/Tetris';


export default function TetrisGame() {
  
  return (

    <div>
    <Layout1>
        <div className="center">
          <h1>Tetris遊戲</h1>
          <div>
            <Tetris/>
          </div>
          
        </div>
      </Layout1>
      <Head>
        <title>俄羅斯方塊</title>
      </Head>
      
    </div>
  )
}
