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
`;

export const PlayingContainer = styled(Box)`
  width: 100%;
  display: flex;
  margin-top: 120px;
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
  box-sizing: border-box;
  position: relative;
  font-weight: bold;
  & li {
    background-color: #f6e6cd;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
  }
`;

export const ParticipantList = styled(List)`
  width: 100%;
  height: 590px;
  box-sizing: border-box;
  overflow: scroll;
  & .MuiListItemText-secondary {
    font-size: 24px;
  }
`;

export const UserStatus = styled(ListItem)`
  position: absolute;
  bottom: 10px;
  width: 230px;
  border: 1px solid #80bcbd;
  background-color: #f6e6cd;
`;

// ImageNHint
export const ImageNHintContainer = styled(Card)`
  width: 600px;
`;
export const QuizImage = styled(Image)`
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
  height: 220px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background-color: white;
`;
export const ChatBox = styled(Box)`
  width: 100%;
  height: 630px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const MyComment = styled(Card)`
  border-radius: 20px;
  max-width: 80%;
  min-height: 46px;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fcfce8;
  align-self: flex-end;
`;
export const Comments = styled(Card)`
  border-radius: 20px;
  max-width: 80%;
  min-height: 46px;
  padding: 15px;
  margin-bottom: 10px;
  align-self: flex-start;
  background-color: rgb(249, 247, 201);
  > .name {
    color: rgba(0, 0, 0, 0.4);
    font-weight: bold;
    font-size: 14px;
  }
  > .content {
    margin-left: 3px;
    margin-top: 3px;
  }
`;
export const InputContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;
export const ChatInput = styled.input`
  width: 80%;
  height: 40px;
  padding-left: 10px;
  font-size: 16px;
  background-color: #fcfce8;
  border-radius: 5px;
  border: 0px;
  outline: none;
`;
export const SubmitBtn = styled(IconButton)``;
