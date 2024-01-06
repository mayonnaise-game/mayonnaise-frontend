"use client";
import LeaderBoardModal from "src/components/leaderboard/LeaderboardModal";
import { useState } from "react";

export default function Playing() {
  const [isDead, setIsDead] = useState(true); // 게임이 끝났는지 여부
  return (
    <div>
      playing
      <LeaderBoardModal isDead={isDead} />
    </div>
  );
}
