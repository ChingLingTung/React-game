import { useCallback, useEffect, useState } from "react";
import { useStage } from "./useStage";

export const useGameStatus = (rowCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
  // const [rowCleared] = useStage();

  const linepoints = [50, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // 方塊成功消除時計分
    if(rowCleared > 0){
      // 定義計分方式
      setScore((prev) => prev + linepoints[rowCleared - 1] * (level + 1));
      // 紀錄消除列數
      setRows((prev) => prev + rowCleared);
    }
  },[level, linepoints, rowCleared])

  useEffect(() => {
    calcScore();
  },[calcScore, rowCleared, score])

  return [score, setScore, rows, setRows, level, setLevel];
}