import {
  Hint1Container,
  Hint2Container,
  HintImage,
  HintImageContainer,
  HintIngredient,
  HintList,
  HintTitle,
  ImageNHintContainer,
  QuizImage,
} from "./playing.styles";

const data = {
  gameId: "f92bc115-1ec8-4b2a-b6f8-fd1a36e75f6d",
  startTime: "2023-10-31T14:54:44.334Z", // ISO datetime 형식
  answerBlankData: "___ __", // 블랭크 정보 , 요청한 시점에 따라 다르게 보내줘야 하는 필드
  mainImageUrl: "http://foodsafety.co.kr",
  hint1: [
    "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00087_2.png",
    "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00087_2.png",
    "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00087_2.png",
    "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00087_2.png",
  ],
  hint2:
    "버섯구이 새송이버섯 70g(7개), 올리브유 10g(2작은술) 곁들임 치커리 10g(3줄기) 두부타르타르 소스 연두부 30g(1/4모), 다진 양파 10g(2작은술), 다진 오이피클 10g(2작은술), 올리브유 2g(1/3작은술), 식초 5g(1작은술), 레몬즙 3g(2/3작은술), 머스터드 3g(2/3작은술), 꿀 2g(1/3작은술), 흰 후추 약간",
};

export default function ImageNHint() {
  return (
    <ImageNHintContainer>
      <QuizImage
        src="http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00087_2.png"
        width={600}
        height={0}
      />
      <HintList>
        <Hint1Container>
          <HintTitle>hint 1. 이 요리는 이렇게 만들어요!</HintTitle>
          <HintImageContainer>
            {data.hint1.map((im, i) => {
              return (
                <HintImage
                  key={i}
                  src={im}
                  width={200}
                  height={0}
                  alt="hint image"
                />
              );
            })}
          </HintImageContainer>
        </Hint1Container>
        <Hint2Container>
          <HintTitle>hint 2. 이 요리에는 이게 필요해요!</HintTitle>
          <HintIngredient>{data.hint2}</HintIngredient>
        </Hint2Container>
      </HintList>
    </ImageNHintContainer>
  );
}
