"use client";

import Bar from "@/components/playing/Bar";
import Chat from "@/components/playing/Chat";
import Header from "@/components/playing/Header";
import ImageNHint from "@/components/playing/ImageNHint";
import { PlayingContainer } from "@/components/playing/playing.styles";

export default function Playing() {
  return (
    <>
      <Header />
      <PlayingContainer>
        <Bar />
        <ImageNHint />
        <Chat />
      </PlayingContainer>
    </>
  );
}
