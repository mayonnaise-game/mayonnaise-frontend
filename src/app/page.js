"use client";

import {
  Title,
  LandingButton,
  Container,
  CopyUriBox,
  CopyUriButton,
  CopyUri,
  InfoBox,
  InfoImage,
  InfoText,
} from "@/components/home/home.styles";
import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import infoImage from "@/assets/info_img.png";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

export default function Home() {
  const [name, setName] = useState("");

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText("복사uri어쩌고");
      alert("Copied!");
    } catch (e) {
      alert("Failed to copy.");
    }
  };

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const router = useRouter();
  const handleStartGame = () => {
    if (name === "") {
      alert("이름을 입력하세요");
    } else {
      axios
        .post(`${BASE_URL}/login`, {
          name: name, // 서버가 기대하는 필드 이름으로 변경
        })
        .then((res) => {
          console.log(res);
          router.push("/playing")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <main>
      <Container>
        <Title>
          마요네즈 <br /> :마성의 요리 네이밍 퀴즈
        </Title>
        <InfoBox>
          <InfoImage>
            <Image
              src={infoImage}
              alt="info_img"
              width={370}
              height={320}
            ></Image>
            <p>정답: 저염된장으로 맛을 낸 황태해장국</p>
          </InfoImage>
          <InfoText>
            <p>게임 방법</p>
            1. 120초 안에 마성의 요리명을 맞혀 주세요! 정답을 맞히면 100점을
            획득하고 다음 문제로 넘어갑니다. <br />
            2. 40초, 80초가 경과해도 정답자가 없다면 힌트가 1개씩 노출됩니다.
            <br />
            3. 120초동안 아무도 정답자가 없다면 모두의 하트가 1개 감소합니다.{" "}
            <br />
            4. 최초로 주어진 하트 3개가 모두 없어지면 게임이 오버되니
            주의하세요! <br />
            5. 나가기 버튼을 누르면 게임에서 나갈 것인지 재확인하며 역대
            10위까지의 점수가 나타납니다. 명예의 전당에 자신의 기록을 등록해
            보세요!
            <br />
            <br />
            ※주의: 이 게임은 실시간 게임으로, 최초 입장 시 남은 시간이 120초
            미만일 수 있습니다.
          </InfoText>
        </InfoBox>
        <TextField placeholder="이름을 입력하세요" onChange={handleSetName} />
        <LandingButton variant="contained" onClick={handleStartGame}>
          게임 시작
        </LandingButton>

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
