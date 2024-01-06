"use client";

import { Title, LandingButton, Container } from "@/components/home/home.styles";
import { TextField } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Title>괜찮은 게임 제목</Title>
        <TextField placeholder="이름을 입력하세요" />
        <LandingButton variant="contained">게임 시작</LandingButton>
      </Container>
    </main>
  );
}
