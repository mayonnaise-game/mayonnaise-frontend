"use client";

import { useRouter } from "next/navigation";
import { LandingButton } from "./home.styles";
import { jua } from "@/src/app/fonts/font";
import { NameField } from "./home.styles";
import { useSetRecoilState } from "recoil";
import { LastMessageIndexState, UserUUIDState } from "@/src/utils/atoms";
import axios from "axios";
import { FormEvent } from "react";
const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

export default function GameStartForm() {
  const setLastMessageIndex = useSetRecoilState(LastMessageIndexState);
  const setUserUUID = useSetRecoilState(UserUUIDState);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get("name");
    if (name) {
      try {
        const res = await axios.post(`${BASE_URL}/login`, {
          username: name,
        });
        setUserUUID(res.data.data.userUuid);
        setLastMessageIndex(res.data.data.lastMessageIndex);
        router.push("/playing");
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("이름을 입력하세요");
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <NameField placeholder="이름을 입력하세요" name="name" />
        <LandingButton type="submit" className={jua.className}>
          게임 시작
        </LandingButton>
      </form>
    </>
  );
}
