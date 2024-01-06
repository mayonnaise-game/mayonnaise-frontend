import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { List, Button } from "@mui/material";
import Image from "next/image";

export const Title = styled(Box)`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 15px;
`;

export const BackgroundImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Userscorebox = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6e6cd;
  > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const ScoreList = styled(List)`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 3px;
`;

export const Container = styled(Box)`
  width: 400px;
  height: 500px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 30px;
  background-color: white;
`;

export const HomeButton = styled(Button)`
  width: 100px;
  height: 30px;
  background-color: #d6c7b4;
  font-weight: bold;
  color: black;
  &:hover {
    background-color: #f6e6cd;
  }
`;

export const BackButton = styled(Button)`
  width: 100px;
  height: 30px;
  background-color: #d6c7b4;
  &:hover {
    background-color: #f6e6cd;
  }
`;

export const MessageAndButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  text-align: center;
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
