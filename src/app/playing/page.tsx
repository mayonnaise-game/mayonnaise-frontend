"use client";

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

import { useState, useEffect } from "react";
import axios from "axios";
import Bar from "@/src/components/playing/Bar";
import Chat from "@/src/components/playing/Chat";
import Header from "@/src/components/playing/Header";
import ImageNHint from "@/src/components/playing/ImageNHint";
import {
  PlayingContainer,
} from "@/src/components/playing/playing.styles";
import { UserUUIDState } from "@/src/utils/atoms";
import { useRecoilValue } from "recoil";

export default function Playing() {
  const userUUID = useRecoilValue(UserUUIDState);
  const [data, setData] = useState({
    answerBlankData: "",
    startTime: "",
    mainImageUrl: "",
    hint1: [],
    hint2: "",
  });

  const fetchGameData = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/games/current?userUuid=${userUUID}`,
        {
          withCredentials: true,
        }
      );
      setData(res.data.data);
      // console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGameData();

    // 1초마다 데이터 가져오기
    const intervalId = setInterval(() => {
      fetchGameData();
    }, 1000);

    // 컴포넌트가 언마운트되면 clearInterval 호출
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header answerBlankData={data.answerBlankData} start={data.startTime} />
      <PlayingContainer>
        <Bar />
        <ImageNHint
          mainImageUrl={data?.mainImageUrl}
          hint1={data?.hint1}
          hint2={data?.hint2}
        />
        <Chat />
      </PlayingContainer>
    </>
  );
}
