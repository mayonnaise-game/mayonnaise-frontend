"use client";
import LeaderBoardModal from "src/components/leaderboard/LeaderboardModal";
import { useState } from "react";
import Bar from "@/components/playing/Bar";
import Chat from "@/components/playing/Chat";
import Header from "@/components/playing/Header";
import ImageNHint from "@/components/playing/ImageNHint";
import {
  PlayingContainer,
  BackgroundImg,
} from "@/components/playing/playing.styles";
import backgroundImg from "@/assets/background_img.png";

export default function Playing() {
  return (
    <div>
      <Header />
      <PlayingContainer>
        <Bar />
        <ImageNHint />
        <Chat />
        <BackgroundImg
          src={backgroundImg}
          alt="background_img"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </PlayingContainer>
    </div>
  );
}
