import { BarContainer, ParticipantList, UserStatus } from "./playing.styles";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { UserUUIDState } from "@/src/utils/atoms";

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL;

interface UserData {
  score: number;
  username: string;
  heart: number;
  currentRank: number;
}

export default function Bar() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [user, setUser] = useState<UserData>();
  const userUUID = useRecoilValue(UserUUIDState);

  const fetchUsersData = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/users/current?userUuid=${userUUID}`,
        {
          withCredentials: true,
        }
      );
      setUsers(res.data.data);
      // console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/me?userUuid=${userUUID}`, {
        withCredentials: true,
      });
      setUser(res.data.data);
      // console.log(res.data.data);
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
                primary={user?.username}
                secondary={"♥︎".repeat(user?.heart)}
              />
            </ListItem>
          );
        })}
      </ParticipantList>

      {user && (
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
                <PersonRoundedIcon />
              )}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={user?.username}
            secondary={"♥︎".repeat(user?.heart)}
          />
        </UserStatus>
      )}
    </BarContainer>
  );
}
