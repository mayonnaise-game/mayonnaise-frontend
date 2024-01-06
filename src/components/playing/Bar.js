import { BarContainer, ParticipantList, UserStatus } from "./playing.styles";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

const users = [
  { name: "user1", score: 700, heart: 3 },
  { name: "user2", score: 600, heart: 3 },
  { name: "user3", score: 500, heart: 1 },
  { name: "user4", score: 500, heart: 2 },
  { name: "user5", score: 400, heart: 3 },
  { name: "user6", score: 400, heart: 3 },
  { name: "user7", score: 400, heart: 3 },
  { name: "user8", score: 400, heart: 3 },
];

const user = {
  username: "장재원",
  score: 200,
  heart: 3, // 남은 하트 수
  isCurrentUser: true, // 현재 로그인한 유저인지
  uuid: "24827c61-84d4-4c77-9cf4-3e1ba1217a90", // 고유 세션 ID
  currentRank: 4, // 현재 게임방 인원 중 등수
};

export default function Bar() {
  // const [users, setUsers] = useState({});
  // const [user, setUser] = useState({});

  const fetchUsersData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/current`, {
        withCredentials: true,
      });
      // setUsers(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/me`, {
        withCredentials: true,
      });
      // setUser(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsersData();
    fetchUserData();

    // 1초마다 데이터 가져오기
    const intervalId = setInterval(() => {
      fetchUsersData();
      fetchUserData();
    }, 1000);

    // 컴포넌트가 언마운트되면 clearInterval 호출
    return () => clearInterval(intervalId);
  }, []);

  return (
    <BarContainer>
      <ParticipantList>
        {users?.map((user, i) => {
          return (
            <ListItem
              secondaryAction={<ListItemText primary={user?.score + "점"} />}
              key={i}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor:
                      i === 0
                        ? "#D5A11E"
                        : i === 1
                          ? "default"
                          : i === 2
                            ? "#CD7F32"
                            : "#A3A3A3",
                  }}
                >
                  {i < 3 ? <MilitaryTechRoundedIcon /> : <PersonRoundedIcon />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user?.name}
                secondary={"♥︎".repeat(user?.heart)}
              />
            </ListItem>
          );
        })}
      </ParticipantList>

      <UserStatus
        secondaryAction={<ListItemText primary={user?.score + "점"} />}
      >
        <ListItemAvatar>
          <Avatar
            sx={{
              backgroundColor:
                user?.currentRank === 0
                  ? "#D5A11E"
                  : user?.currentRank === 1
                    ? "default"
                    : user?.currentRank === 2
                      ? "#CD7F32"
                      : "#A3A3A3",
            }}
          >
            {user?.currentRank < 3 ? (
              <MilitaryTechRoundedIcon />
            ) : (
              <ListItemText
                primary={user?.currentRank + "등"}
                sx={{ textAlign: "center" }}
              />
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={user?.username}
          secondary={"♥︎".repeat(user?.heart)}
        />
      </UserStatus>
    </BarContainer>
  );
}
