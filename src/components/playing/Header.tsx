"use client";

import { useEffect, useState } from "react";
import LeaderBoardModal from "../leaderboard/LeaderboardModal";
import { HeaderContainer, HeaderHint, HeaderTime } from "./playing.styles";

interface HeaderProps {
  answerBlankData?: string;
  start: string;
}

export default function Header({ answerBlankData, start }: HeaderProps) {
  const [seconds, setSeconds] = useState<number>(0);
  const [letterLen, setLetterLen] = useState<number>(0);

  useEffect(() => {
    if (answerBlankData) {
      // 주어진 시작 시간
      const startTime = new Date(start);
      // 현재 시간
      const currentTime = new Date();
      // 차이 계산
      setSeconds(
        Math.floor((currentTime.getTime() - startTime.getTime()) / 1000)
      );
      setLetterLen(answerBlankData.split(" ").join("").length);
    }
  }, [answerBlankData, start]);

  const [isDead, setIsDead] = useState<boolean>(false); // 게임이 끝났는지 여부

  return (
    <HeaderContainer>
      <HeaderTime>{seconds}s</HeaderTime>
      <HeaderHint>
        <div className="label">총 {letterLen}글자</div>
        <div className="content">{answerBlankData}</div>
      </HeaderHint>
      <LeaderBoardModal isDead={isDead} />
    </HeaderContainer>
  );
}
