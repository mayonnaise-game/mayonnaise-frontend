import styled from "@emotion/styled";
import { Box, Button, Snackbar, Grid } from "@mui/material";

export const Container = styled(Box)`
  width: 100dvh;
  height: 100dvh;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #222;
`;

export const Title = styled(Box)`
  text-align: center;
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
`;

export const InfoText = styled(Box)``;

export const InfoImage = styled(Box)``;
