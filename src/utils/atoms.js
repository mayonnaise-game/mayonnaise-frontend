import { atom } from "recoil";

export const LastMessageIndexState = atom({
  key: "lastMessageIndex",
  default: "-1",
});

export const UserUUIDState = atom({
  key: "UserUUID",
  default: "",
});
