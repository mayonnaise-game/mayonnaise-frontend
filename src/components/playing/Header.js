import {
  HeaderContainer,
  HeaderExitBtn,
  HeaderHint,
  HeaderTime,
} from "./playing.styles";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

const data = {
  gameId: "f92bc115-1ec8-4b2a-b6f8-fd1a36e75f6d",
  startTime: "2023-10-31T14:54:44.334Z", // ISO datetime 형식
  answerBlankData: "___ __ __ __", // 블랭크 정보 , 요청한 시점에 따라 다르게 보내줘야 하는 필드
  recipeHint: ["???"],
};

export default function Header() {
  const letterLen = data.answerBlankData.split(" ").join("").length;
  return (
    <HeaderContainer>
      <HeaderTime>94s</HeaderTime>
      <HeaderHint>
        <div className="label">총 {letterLen}글자</div>
        <div className="content">{data.answerBlankData}</div>
      </HeaderHint>
      <HeaderExitBtn>
        <ExitToAppRoundedIcon />
      </HeaderExitBtn>
    </HeaderContainer>
  );
}
