import { Layout1 } from "@/components/Layout1";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import Game from "@/components/OOXX/Game";

export default function Ooxx() {

  return (
    <>
      <Layout1>
        <div className="center">
          <h1>OOXX遊戲</h1>
          <div>
            <Game/>
          </div>
          
        </div>
        
        
      </Layout1>
      <Head>
        <title>OX遊戲</title>
      </Head>
    </>
  );
}
