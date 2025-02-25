import { useState } from "react";
import StartGame from "./component/StartGame/StartGame";
import GamePlay from "./component/GamePlay/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame onStartGame={toggleGamePlay} />
      )}
    </>
  );
};

export default App;
