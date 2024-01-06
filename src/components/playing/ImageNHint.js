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


export default function ImageNHint({ data }) {
  return (
    <ImageNHintContainer>
      <QuizImage src={data.mainImageUrl} width={600} height={0} />
      <HintList>
        <Hint1Container>
          <HintTitle>hint 1. 이 요리는 이렇게 만들어요!</HintTitle>
          <HintImageContainer>
            {data.hint1?.map((im, i) => {
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
