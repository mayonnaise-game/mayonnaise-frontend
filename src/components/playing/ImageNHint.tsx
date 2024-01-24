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

interface ImageNHintProps {
  mainImageUrl: string;
  hint1?: string[];
  hint2?: string;
}

const ImageNHint: React.FC<ImageNHintProps> = ({
  mainImageUrl,
  hint1,
  hint2,
}) => {
  return (
    <ImageNHintContainer>
      <QuizImage src={mainImageUrl} width={600} height={0} alt="quiz image" />
      <HintList>
        <Hint1Container>
          <HintTitle>hint 1. 이 요리는 이렇게 만들어요!</HintTitle>
          <HintImageContainer>
            {hint1?.map((im, i) => (
              <HintImage
                key={i}
                src={im}
                width={200}
                height={0}
                alt="hint image"
              />
            ))}
          </HintImageContainer>
        </Hint1Container>
        <Hint2Container>
          <HintTitle>hint 2. 이 요리에는 이게 필요해요!</HintTitle>
          <HintIngredient>{hint2}</HintIngredient>
        </Hint2Container>
      </HintList>
    </ImageNHintContainer>
  );
};

export default ImageNHint;
