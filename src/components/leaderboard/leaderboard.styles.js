import styled from "@emotion/styled";
import { Box } from "@mui/system";

import { List, Button } from "@mui/material";

export const Title = styled(Box)`
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
`;

export const Userscorebox = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 30rem;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f7c9;
`;

export const ScoreList = styled(List)`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 3px;
  font-weight: bold;
`;

export const Container = styled(Box)`
  width: 100dvh;
  height: 60vh;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-radius: 30px;
  background-color: white;
`;

export const HomeButton = styled(Button)`
  width: 10rem;
  height: 3rem;
`;

export const BackButton = styled(Button)`
  width: 10rem;
  height: 3rem;
`;

export const MessageAndButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  font-size: 1.5rem;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
