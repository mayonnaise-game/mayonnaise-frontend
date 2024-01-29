"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { gmarket } from "@/src/app/fonts/font";

export const Container = styled(Box)`
  width: 100vh;
  height: calc(100vh - 200px);
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Box)`
  width: 500px;
  height: 80px;
  background-color: #fef8e3;
  color: #7e6758;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  border-radius: 40px;
  box-shadow: 0cap 3px 3px #fceac4;
`;

export const InfoBox = styled(Box)`
  width: 900px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #fcfcfa;
  box-shadow: 0px 5px 5px #e3e8ee;
  gap: 20px;
  padding: 30px 20px;
  margin: 30px 0;
`;

export const InfoText = styled(Box)`
  font-family: gmarket;
  width: 630px;
  display: flex;
  flex-direction: column;
  /* background-color: #f2f6fa; */
  border: 1px dashed #e3e8ee;
  padding: 20px 10px;

  > b {
    margin-left: 35px;
    font-size: 21px;
    font-weight: 500;
  }
  li {
    line-height: 28px;
  }
  li > b {
    display: inline;
    box-shadow: inset 0 -10px 0 #fceac4;
    font-weight: 500;
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

export const NameForm = styled.form`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9f9;
  border: 1px solid #f0f0f0;
  border-radius: 40px;
  padding-left: 20px;
  margin-top: 10px;
`;

export const LandingButton = styled(Button)`
  margin: 10px;
  width: 100px;
  border-radius: 30px;
  font-size: 16px;
  color: #c9ab99;
  background-color: #fff;
  border: none;
  box-shadow: 0px 2.5px 2.5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const NameField = styled.input`
  width: 180px;
  height: 30px;
  font-size: 16px;
  font-family: gmarket;
  background-color: #f8f9f9;
  color: #606060;
  border: 0px;
  border-radius: 40px;
  outline: none;
  border: none;
`;
