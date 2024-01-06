"use client";

import {
  ScoreList,
  Title,
  Container,
  Userscorebox,
} from "@/components/leaderboard/leaderboard.styles";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

const data = [
  {
    username: "홍권",
    score: 15000,
  }, //1등
  {
    username: "홍길동",
    score: 10000,
  },
  {
    username: "홍길순",
    score: 5000,
  },
  // 2등, 3등, ..., 최대 100등
];

export default function LeaderBoard() {
  return (
    <Container>
      <Title>
        <EmojiEventsRoundedIcon sx={{ fontSize: 60, color: "#111111" }} />
        명예의 전당
      </Title>
      <ScoreList>
        {data.map((item, index) => (
          <Userscorebox key={index}>
            <p>{item.username}</p>
            <p>{item.score}</p>
          </Userscorebox>
        ))}
      </ScoreList>
      <p>Game Over! 당신의 하트가 전부 없어졌습니다</p>
    </Container>
  );
}
