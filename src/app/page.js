"use client";

import {
  Title,
  LandingButton,
  Container,
  CopyUriBox,
  CopyUriButton,
  CopyUri,
} from "@/components/home/home.styles";
import { TextField } from "@mui/material";

const handleCopyClipBoard = async () => {
  try {
    await navigator.clipboard.writeText("복사uri어쩌고");
    alert("Copied!");
  } catch (e) {
    alert("Failed to copy.");
  }
};

export default function Home() {
  return (
    <main>
      <Container>
        <Title>
          마요네즈 <br /> 마성의 요리 네이밍 퀴즈
        </Title>
        <TextField placeholder="이름을 입력하세요" />
        <LandingButton variant="contained">게임 시작</LandingButton>

        <CopyUriBox>
          <p>친구 초대하기</p>
          <div>
            <CopyUri> http어쩌고</CopyUri>
            <CopyUriButton
              variant="contained"
              onClick={() => handleCopyClipBoard()}
            >
              Copy
            </CopyUriButton>
          </div>
        </CopyUriBox>
      </Container>
    </main>
  );
}
