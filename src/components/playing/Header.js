"use client";

import { useEffect, useState } from "react";
import LeaderBoardModal from "../leaderboard/LeaderboardModal";
import {
  HeaderContainer,
  HeaderHint,
  HeaderTime,
} from "./playing.styles";
import axios from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;
export default function Header() {
const [data, setData] =useState({});
const [seconds, setSeconds] =useState(0)
const [letterLen, setletterLen]=useState(0)

  const fetchGameData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/games/current`,{ withCredentials: true });
      setData(res.data);
      console.log(res.data);
      // 주어진 시작 시간
      const startTime = new Date(data.startTime);
      // 현재 시간
      const currentTime = new Date();
      // 차이 계산
      setSeconds(Math.floor((currentTime - startTime) / 1000))
      setletterLen(data.answerBlankData.split(" ").join("").length)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGameData();
    
  }, []);

  const [isDead, setIsDead] = useState(true); // 게임이 끝났는지 여부



  return (
    <HeaderContainer>
      <HeaderTime>{seconds}s</HeaderTime>
      <HeaderHint>
        <div className="label">총 {letterLen}글자</div>
        <div className="content">{data.answerBlankData}</div>
      </HeaderHint>
      <LeaderBoardModal isDead={isDead} />
    </HeaderContainer>
  );
}
