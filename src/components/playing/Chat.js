import { useEffect, useRef, useState } from "react";
import {
  ChatBox,
  ChatContainer,
  ChatInput,
  Comments,
  InputContainer,
  MyComment,
  SubmitBtn,
} from "./playing.styles";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { LastMessageIndexState, UserUUIDState } from "@/utils/atoms";
const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

// const chats = [
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0567-4781-b207-784f24579adb",
//       username: "장재원",
//       isCurrentUser: true,
//     },
//     chatData: "안녕하세요~",
//     createdAt: "2023-10-31T23:32:33Z",
//     isAnswerCorrect: false,
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
//   {
//     user: {
//       userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
//       username: "김희정",
//       isCurrentUser: false,
//     },
//     chatData: "아아아~",
//     createdAt: "2023-10-31T23:32:32Z",
//   },
// ];

export default function Chat() {
  const userUUID = useRecoilValue(UserUUIDState);

  const chatBoxRef = useRef();

  const [inputValue, setInputValue] = useState("");

  const PostChat = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/chats?userUuid=${userUUID}`,
        {
          userInput: inputValue,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data); // 성공했을 때의 응답을 출력하거나 다른 처리를 할 수 있습니다.
    } catch (err) {
      console.error(err);
    }
  };

  const [chats, setChats] = useState([]);
  const [Lastid, setLastid] = useRecoilState(LastMessageIndexState);

  const fetchChats = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/chats?lastMessageIndex=${Lastid}&userUuid=${userUUID}`,
        {
          withCredentials: true,
        }
      );
      setChats(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   fetchChats();

  //   // 1초마다 데이터 가져오기
  //   const intervalId = setInterval(() => {
  //     fetchChats();
  //   }, 1000);

  //   // 컴포넌트가 언마운트되면 clearInterval 호출
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    // 채팅박스의 ref를 이용하여 스크롤을 가장 아래로 조정
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [chats]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    PostChat();
  };
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      PostChat();
    }
  };
  return (
    <ChatContainer>
      <ChatBox ref={chatBoxRef}>
        {chats?.map((chat) => {
          if (chat.user.isCurrentUser) {
            return <MyComment>{chat.chatData}</MyComment>;
          } else {
            return (
              <Comments>
                <div className="name">{chat.user.username}</div>
                <div className="content">{chat.chatData}</div>
              </Comments>
            );
          }
        })}
      </ChatBox>
      <InputContainer>
        <ChatInput
          value={inputValue}
          onChange={handleInputChange}
          onKey={handleInputKeyPress}
        />
        <SubmitBtn onClick={handleButtonClick} onKey>
          <SendRoundedIcon />
        </SubmitBtn>
      </InputContainer>
    </ChatContainer>
  );
}
