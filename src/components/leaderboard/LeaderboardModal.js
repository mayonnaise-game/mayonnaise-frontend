import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import axios from "axios";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import backgroundImg from "@/assets/background_img.png";
import {
  ScoreList,
  Title,
  Container,
  Userscorebox,
  HomeButton,
  BackButton,
  MessageAndButtonBox,
  ButtonBox,
  BackgroundImg,
} from "@/components/leaderboard/leaderboard.styles";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import { HeaderExitBtn } from "../playing/playing.styles";

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

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
      <HeaderExitBtn onClick={handleOpen}>
        <ExitToAppRoundedIcon />
      </HeaderExitBtn>

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
                <div>
                  <p>{index + 1}등</p>
                  <p>{item.username}</p>
                </div>
                <p>{item.score}</p>
              </Userscorebox>
            ))}
          </ScoreList>
          {props.isDead ? (
            <MessageAndButtonBox>
              <p>
                Game Over! <br /> 당신의 하트가 전부 없어졌습니다
              </p>
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
          <BackgroundImg
            src={backgroundImg}
            alt="background_img"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Container>
      </Modal>
    </div>
  );
}
