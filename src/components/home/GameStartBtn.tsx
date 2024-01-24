import { useRouter } from "next/navigation";
import { LandingButton } from "./home.styles";

interface GameStartBtnProps {
  handleStartGame: () => Promise<void>;
}

export default function GameStartBtn({ handleStartGame }: GameStartBtnProps) {
  const router = useRouter();

  const handleClick = async () => {
    await handleStartGame();
    router.push("/playing");
  };

  return <LandingButton onClick={handleClick}>게임 시작</LandingButton>;
}
