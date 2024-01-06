import styled from "@emotion/styled";
import { Box, Button, Snackbar } from "@mui/material";

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-weight: bold;
  font-size: 15px;
  color: black;
  background-color: #d9d9d9;
  font-family: jua;
`;

export const CopyUriBox = styled(Box)`
  > div {
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
  background-color: #d9d9d9;
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
  gap: 20px;
  padding: 50px;
`;

export const InfoText = styled(Box)`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px > p {
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
  }
`;

export const InfoImage = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const NameField = styled.input`
  width: 300px;
  height: 30px;
`;
