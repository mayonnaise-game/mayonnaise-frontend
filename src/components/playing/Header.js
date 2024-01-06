"use client";

import { useState } from "react";
import LeaderBoardModal from "../leaderboard/LeaderboardModal";
import {
  HeaderContainer,
  HeaderHint,
  HeaderTime,
} from "./playing.styles";

const data = {
  gameId: "f92bc115-1ec8-4b2a-b6f8-fd1a36e75f6d",
  startTime: "2023-10-31T14:54:44.334Z", // ISO datetime 형식
  answerBlankData: "___ __ __ __", // 블랭크 정보 , 요청한 시점에 따라 다르게 보내줘야 하는 필드
  recipeHint: ["???"],
};

export default function Header() {
// 주어진 시작 시간
const startTime = new Date(data.startTime);

// 현재 시간
const currentTime = new Date();

// 차이 계산
const timeDifference = currentTime - startTime;
const secondsDifference = Math.floor(timeDifference / 1000);


  const letterLen = data.answerBlankData.split(" ").join("").length;

  const [isDead, setIsDead] = useState(true); // 게임이 끝났는지 여부
  return (
    <HeaderContainer>
      <HeaderTime>{secondsDifference}s</HeaderTime>
      <HeaderHint>
        <div className="label">총 {letterLen}글자</div>
        <div className="content">{data.answerBlankData}</div>
      </HeaderHint>
      <LeaderBoardModal isDead={isDead} />
    </HeaderContainer>
  );
}
