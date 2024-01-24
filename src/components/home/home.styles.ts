import styled from "@emotion/styled";
import { Box, Button, Snackbar } from "@mui/material";
import backgroundImg from "@/src/assets/background_img.png";
import Image from "next/image";

export const BackgroundImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Container = styled(Box)`
  width: 1300px;
  height: 480px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Box)`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const LandingButton = styled.button`
  width: 100px;
  height: 30px;
  font-size: 18px;
  color: black;
  background-color: #d1b19a;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #c1a18a;
  }
`;

export const CopySnackBar = styled(Snackbar)``;

export const InfoBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 80px;
`;

export const InfoText = styled(Box)`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  gap: 2px > p {
    font-weight: bold;
    text-align: center;
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 30px;
    margin-top: 15px;
  }
  > p1 {
    align-self: flex-start;
    font-weight: normal;
    font-size: 12px;
    color: #606060;
  }
`;

export const InfoImage = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 15px;
`;

export const NameField = styled.input`
  width: 300px;
  height: 30px;
  background-color: white;
  color: #606060;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border: none;
`;
