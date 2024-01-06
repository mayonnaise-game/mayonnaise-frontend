"use client";
import LeaderBoardModal from "src/components/leaderboard/LeaderboardModal";
import { useState } from "react";

import Bar from "@/components/playing/Bar";
import Chat from "@/components/playing/Chat";
import Header from "@/components/playing/Header";
import ImageNHint from "@/components/playing/ImageNHint";
import { PlayingContainer } from "@/components/playing/playing.styles";

export default function Playing() {
  const [isDead, setIsDead] = useState(true); // 게임이 끝났는지 여부
  return (
    <>
      <Header />
      <PlayingContainer>
        <Bar />
        <ImageNHint />
        <Chat />
      </PlayingContainer>
      <LeaderBoardModal isDead={isDead} />
    </>)
}
