"use client";

import {
  Title,
  LandingButton,
  Container,
  InfoBox,
  InfoImage,
  InfoText,
  NameField,
  BackgroundContainer,
  BackgroundImg,
} from "@/components/home/home.styles";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import infoImage from "@/assets/info_img.png";
import backgroundImg from "@/assets/background_img.png";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import { useSetRecoilState } from "recoil";
import { LastMessageIndexState, UserUUIDState } from "@/utils/atoms";

const jua = localFont({
  src: "./Jua-Regular.ttf",
  display: "swap",
});
const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

export default function Home() {
  const [name, setName] = useState("");
  const setLastMessageIndex = useSetRecoilState(LastMessageIndexState);
  const setUserUUID = useSetRecoilState(UserUUIDState);

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
          username: name, // 서버가 기대하는 필드 이름으로 변경
        })
        .then((res) => {
          // console.log(res.data.data);
          setUserUUID(res.data.data.userUuid);
          setLastMessageIndex(res.data.data.lastMessageIndex);
          router.push("/playing");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <main>
      <Container>
        <Title className={`${jua.className}`}>
          마요네즈 <br /> :마성의 요리 네이밍 퀴즈
        </Title>
        <InfoBox>
          <InfoImage>
            <Image
              src={infoImage}
              alt="info_img"
              width={250}
              height={200}
            ></Image>
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
            <p1>
              ※주의: 이 게임은 실시간 게임으로, 최초 입장 시 남은 시간이 120초
              미만일 수 있습니다.
            </p1>
            <div>
              <NameField
                placeholder="      이름을 입력하세요"
                onChange={handleSetName}
              />
              <LandingButton
                onClick={handleStartGame}
                className={jua.className}
              >
                게임 시작
              </LandingButton>
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
