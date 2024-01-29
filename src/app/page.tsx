import Image from "next/image";
import {
  Title,
  Container,
  InfoBox,
  InfoImage,
  InfoText,
} from "@/src/components/home/home.styles";
import GameStartBtn from "../components/home/GameStartForm";
import infoImage from "@/public/info_img.png";

import { gmarket, pretendard } from "./fonts/font";

export default function Home() {
  return (
    <main className={pretendard.className}>
      <Container>
        <Title className={gmarket.className}>
          마요네즈 : 마성의 요리 네이밍 퀴즈
        </Title>

        <InfoBox>
          <InfoImage>
            <b>Hint</b>
            <Image src={infoImage} alt="info_img" width={200} height={160} />
            <p>저염된장으로 맛을 낸 황태해장국</p>
          </InfoImage>
          <InfoText>
            <b>게임 방법</b>
            <ol>
              <li>
                <b>120초</b> 안에 마성의 요리명을 맞혀 주세요!
                <br /> 정답을 맞히면 100점을 획득하고 다음 문제로 넘어갑니다.
              </li>
              <li>
                <b>40초</b>, <b>80초</b>가 경과해도 정답자가 없다면 힌트가 1개씩
                노출됩니다.
              </li>
              <li>
                120초동안 아무도 정답자가 없다면 모두의 하트가 1개 감소합니다.
              </li>
              <li>
                최초로 주어진 <b>하트 3개</b>가 모두 없어지면 게임이 오버되니
                주의하세요!
              </li>
              <li>
                나가기 버튼을 누르면 게임에서 나갈 것인지 재확인하며
                <br /> 역대 10위까지의 점수가 나타납니다. 명예의 전당에 자신의
                기록을 등록해 보세요!
              </li>
            </ol>
          </InfoText>
        </InfoBox>
        <p>
          ※ 이 게임은 실시간 게임으로, 최초 입장 시 남은 시간이 120초 미만일 수
          있습니다.
        </p>
        <div>
          <GameStartBtn />
        </div>
      </Container>
    </main>
  );
}
