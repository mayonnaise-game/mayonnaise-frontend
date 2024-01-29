import styled from "@emotion/styled";
import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import Image from "next/image";
// 전체 container

export const BackgroundImg = styled(Image)`
  background-color: #f6e6cd;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
`;

export const PlayingContainer = styled(Box)`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  padding-top: 120px;
  justify-content: space-evenly;
`;

// Header
export const HeaderContainer = styled(Box)`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 90px;
  background-color: #f6e6cd;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderTime = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #fff;
  line-height: 50px;
  text-align: center;
`;
export const HeaderHint = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .label {
    letter-spacing: 2px;
    font-size: 16px;
    color: #2c2c2c;
    font-weight: bold;
  }
  > .content {
    letter-spacing: 3px;
    font-size: 32px;
    color: black;
  }
`;
export const HeaderExitBtn = styled(IconButton)`
  color: #fff;
`;

// Bar
export const BarContainer = styled(Card)`
  width: 250px;
  height: 700px;
  padding: 10px;
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;
  font-weight: bold;
  background-color: #fff;
  font-size: 15px;

  & li {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & .MuiListItemText-primary {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & .MuiListItemText-secondary {
    font-size: 24px;
    color: #f07c62;
  }
`;

export const ParticipantList = styled(List)`
  width: 100%;
  height: 590px;
  box-sizing: border-box;
  overflow: scroll;
`;

export const UserContainer = styled(List)`
  position: absolute;
  bottom: 0px;
  width: 230px;
  border-radius: 20px;
`;

export const UserStatus = styled(ListItem)`
  box-shadow: 1px 0px 15px 16px rgba(242, 242, 237, 0.75);
`;

// ImageNHint
export const ImageNHintContainer = styled(Card)`
  width: 600px;
  height: 700px;
  overflow: scroll;
`;

interface QuizImageProps {
  readonly src?: string;
}
export const QuizImage = styled(Image)<QuizImageProps>`
  height: auto !important;
`;

export const HintList = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const HintTitle = styled.div``;
export const Hint1Container = styled(Card)`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 10px;
`;
export const HintImageContainer = styled(Box)`
  width: 100%;
  overflow: scroll;
  display: flex;
`;
export const HintImage = styled(Image)`
  height: auto !important;
  margin-left: 2px;
  border-radius: 5px;
`;
export const Hint2Container = styled(Card)`
  width: 100%;
  box-sizing: border-box;
  margin: 10px 0;
  padding: 10px;
`;
export const HintIngredient = styled(Card)`
  padding: 5px;
`;

// Chat
export const ChatContainer = styled(Card)`
  width: 300px;
  height: 700px;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  font-size: 15px;
  box-shadow: 1px -96px 41px -42px rgba(242, 242, 237, 0.75) inset;
`;
export const ChatBox = styled(Box)`
  width: 100%;
  height: 630px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const MyComment = styled.div`
  border-radius: 25px 25px 10px 25px;
  max-width: 80%;
  min-height: 46px;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fcfcdc;
  align-self: flex-end;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Comments = styled.div`
  border-radius: 25px 25px 25px 10px;
  max-width: 80%;
  min-height: 63px;
  padding: 10px 20px 5px;
  margin-bottom: 10px;
  align-self: flex-start;
  background-color: #f2f2ed;

  > .name {
    color: rgba(0, 0, 0, 0.25);
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 4px;
  }
  > .content {
    margin-left: 3px;
    margin-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  background-color: #fff;
  border-radius: 20px;
`;
export const Chat = styled.input`
  width: 80%;
  height: 40px;
  padding-left: 10px;
  font-size: 16px;
  background-color: #fff;
  border: 0px;
  border-radius: 20px;
  outline: none;
`;
export const SubmitBtn = styled(IconButton)``;
