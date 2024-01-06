import styled from "@emotion/styled";
import { Box, Button, Snackbar, Grid } from "@mui/material";
import backImage from "@/assets/Theme.png";

export const Container = styled(Box)`
  width: 1200px;
  height: 800px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled(Box)`
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
`;

export const LandingButton = styled(Button)``;

export const CopyUriBox = styled(Box)`
  > div {
    padding: 10px;
    width: 500px;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CopyUriButton = styled(Button)`
  width: 50px;
  height: 30px;
`;

export const CopySnackBar = styled(Snackbar)``;

export const CopyUri = styled.p`
  width: 400px;
  margin: 10px;
  background-color: white;
  color: #606060;
  border: 1px solid #606060;
  padding: 5px;
`;

export const InfoBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 20px;
`;

export const InfoText = styled(Box)`
  width: 500px;
  > p {
    font-weight: bold;
    text-align: center;
  }
`;

export const InfoImage = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
