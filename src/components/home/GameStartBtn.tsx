import { useRouter } from "next/navigation";
import { LandingButton } from "./home.styles";
import { jua } from "@/src/app/fonts/font";

interface GameStartBtnProps {
  handleStartGame: () => Promise<void>;
}

export default function GameStartBtn({ handleStartGame }: GameStartBtnProps) {
  const router = useRouter();

  const handleClick = async () => {
    await handleStartGame();
    router.push("/playing");
  };

  return <LandingButton onClick={handleClick} className={jua.className}>게임 시작</LandingButton>;
}
