import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import axios from "axios";

import {
  ScoreList,
  Title,
  Container,
  Userscorebox,
  HomeButton,
  BackButton,
  MessageAndButtonBox,
  ButtonBox,
} from "@/components/leaderboard/leaderboard.styles";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const data = [
  {
    username: "홍권",
    score: 15000,
  }, //1등
  {
    username: "홍길동",
    score: 10000,
  },
  {
    username: "홍길순",
    score: 5000,
  },
  // 2등, 3등, ..., 최대 100등
];

export default function LeaderBoardModal(props) {
  const [leaderBoard, setLeaderBoard] = useState([]); // [{username: "홍길동", score: 10000}, ...
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchLeaderBoard = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/leaderboard`);
      setLeaderBoard(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLeaderBoard();
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          style: { backgroundColor: "black", opacity: "0.2" }, // 투명한 배경으로 설정
          onClick: (e) => {
            // 모달이 닫히지 않도록 이벤트 전파 막기
            e.stopPropagation();
          },
        }}
      >
        <Container>
          <Title>
            <EmojiEventsRoundedIcon sx={{ fontSize: 60, color: "#111111" }} />
            명예의 전당
          </Title>
          <ScoreList>
            {data.map((item, index) => (
              <Userscorebox key={index}>
                <p>{item.username}</p>
                <p>{item.score}</p>
              </Userscorebox>
            ))}
          </ScoreList>
          {props.isDead ? (
            <MessageAndButtonBox>
              <p>Game Over! 당신의 하트가 전부 없어졌습니다</p>
              <Link href="/">
                <HomeButton variant="contained" onClick={handleClose}>
                  나가기
                </HomeButton>
              </Link>
            </MessageAndButtonBox>
          ) : (
            <MessageAndButtonBox>
              <p>
                게임을 정말 나가시겠습니까? <br /> 역대 10위 안에 포함된 경우
                명예의 전당에 저장됩니다.
              </p>
              <ButtonBox>
                <BackButton variant="contained" onClick={handleClose}>
                  돌아가기
                </BackButton>
                <Link href="/">
                  <HomeButton variant="contained" onClick={handleClose}>
                    나가기
                  </HomeButton>
                </Link>
              </ButtonBox>
            </MessageAndButtonBox>
          )}
        </Container>
      </Modal>
    </div>
  );
}
