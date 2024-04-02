import { useEffect, useRef } from "react";

export function useInterval(callback, delay){
  const savedCallback = useRef();

  // 記住最後一次callback
  useEffect(()=>{
    savedCallback.current = callback;
  },[callback]);

  // 設定Interval，tick紀錄最後一次的位置，delay為droptime傳入的下落時間
  useEffect(()=>{
    function tick(){
      savedCallback.current();
    }
    if(delay !== null){
      const id = setInterval(tick, delay);
      return () =>{
        clearInterval(id);
      };
    }
  },[delay]);
}