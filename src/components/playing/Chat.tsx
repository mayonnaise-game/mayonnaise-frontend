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
import { LastMessageIndexState, UserUUIDState } from "../../utils/atoms";

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

interface ChatData {
  index: number;
  chatData: string;
  isCurrentUser: boolean;
  user: {
    username: string;
  };
}

export default function Chat() {
  const userUUID = useRecoilValue(UserUUIDState);

  const chatBoxRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState("");
  const [chats, setChats] = useState<ChatData[]>([]);
  const [Lastid, setLastid] = useRecoilState(LastMessageIndexState);

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
      console.log(res.data);
      // setLastid(res.data.data.messageIndex);
    } catch (err) {
      console.error(err);
    }
  };

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
      console.error(err);
    }
  };

  useEffect(() => {
    fetchChats();

    // 1초마다 데이터 가져오기
    const intervalId = setInterval(() => {
      fetchChats();
    }, 1000);

    // 컴포넌트가 언마운트되면 clearInterval 호출
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // 채팅박스의 ref를 이용하여 스크롤을 가장 아래로 조정
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chats]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    PostChat();
    setInputValue("");
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      PostChat();
      setInputValue("");
    }
  };

  return (
    <ChatContainer>
      <ChatBox ref={chatBoxRef}>
        {chats?.map((chat) => {
          if (chat.isCurrentUser) {
            return <MyComment key={chat.index}>{chat.chatData}</MyComment>;
          } else {
            return (
              <Comments key={chat.index}>
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
          onKeyDown={handleInputKeyPress}
        />
        <SubmitBtn onClick={handleButtonClick}>
          <SendRoundedIcon />
        </SubmitBtn>
      </InputContainer>
    </ChatContainer>
  );
}
