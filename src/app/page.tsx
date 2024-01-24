"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import axios from "axios";
import {
  Title,
  Container,
  InfoBox,
  InfoImage,
  InfoText,
  NameField,
  BackgroundImg,
} from "@/src/components/home/home.styles";
import GameStartBtn from "../components/home/GameStartBtn";
import infoImage from "@/src/assets/info_img.png";
import backgroundImg from "@/src/assets/background_img.png";

import { useSetRecoilState } from "recoil";
import { LastMessageIndexState, UserUUIDState } from "@/src/utils/atoms";

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

export default function Home() {
  const [name, setName] = useState("");
  const setLastMessageIndex = useSetRecoilState(LastMessageIndexState);
  const setUserUUID = useSetRecoilState(UserUUIDState);

  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleStartGame = async () => {
    if (name === "") {
      alert("이름을 입력하세요");
    } else {
      try {
        const res = await axios.post(`${BASE_URL}/login`, {
          username: name,
        });

        setUserUUID(res.data.data.userUuid);
        setLastMessageIndex(res.data.data.lastMessageIndex);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <main>
      <Container>
        <Title>마요네즈 :마성의 요리 네이밍 퀴즈</Title>
        <InfoBox>
          <InfoImage>
            <Image src={infoImage} alt="info_img" width={250} height={200} />
            <p>정답: 저염된장으로 맛을 낸 황태해장국</p>
          </InfoImage>
          <InfoText>
            게임 방법
            <ol>
              <li>
                120초 안에 마성의 요리명을 맞혀 주세요! 정답을 맞히면 100점을
                획득하고 다음 문제로 넘어갑니다.
              </li>
              <li>
                40초, 80초가 경과해도 정답자가 없다면 힌트가 1개씩 노출됩니다.
              </li>
              <li>
                120초동안 아무도 정답자가 없다면 모두의 하트가 1개 감소합니다.
              </li>
              <li>
                최초로 주어진 하트 3개가 모두 없어지면 게임이 오버되니
                주의하세요!
              </li>
              <li>
                나가기 버튼을 누르면 게임에서 나갈 것인지 재확인하며 역대
                10위까지의 점수가 나타납니다. 명예의 전당에 자신의 기록을 등록해
                보세요!
              </li>
            </ol>
            <p>
              ※주의: 이 게임은 실시간 게임으로, 최초 입장 시 남은 시간이 120초
              미만일 수 있습니다.
            </p>
            <div>
              <NameField
                placeholder="      이름을 입력하세요"
                onChange={handleSetName}
              />
              <GameStartBtn handleStartGame={handleStartGame} />
            </div>
          </InfoText>
        </InfoBox>
      </Container>
      <BackgroundImg
        src={backgroundImg}
        alt="background_img"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </main>
  );
}
