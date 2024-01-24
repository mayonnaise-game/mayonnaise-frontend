import { atom } from "recoil";

export const LastMessageIndexState = atom<string>({
  key: "lastMessageIndex",
  default: "-1",
});

export const UserUUIDState = atom<string>({
  key: "UserUUID",
  default: "",
});