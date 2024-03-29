import { useEffect, useRef } from "react";

export function useInterval(callback, delay){
  const savedCallback = useRef();

  // 記住最後一次callback
  useEffect(()=>{
    savedCallback.current = callback;
  },[callback]);

  // 設定Interval
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