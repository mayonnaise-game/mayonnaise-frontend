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

const chats = [
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0567-4781-b207-784f24579adb",
      username: "장재원",
      isCurrentUser: true,
    },
    chatData: "안녕하세요~",
    createdAt: "2023-10-31T23:32:33Z",
    isAnswerCorrect: false,
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
  {
    user: {
      userUuid: "dcd8921e-0da7-4781-b207-784f24579adb",
      username: "김희정",
      isCurrentUser: false,
    },
    chatData: "아아아~",
    createdAt: "2023-10-31T23:32:32Z",
  },
];

export default function Chat() {
  return (
    <ChatContainer>
      <ChatBox id="ChatBox">
        {chats.map((chat) => {
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
        <ChatInput />
        <SubmitBtn>
          <SendRoundedIcon />
        </SubmitBtn>
      </InputContainer>
    </ChatContainer>
  );
}
