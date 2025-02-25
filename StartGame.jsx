import styled from "styled-components";
import { Button } from "../../styled/Button";

const StartGame = ({ onStartGame }) => {
  return (
    <Container>
      <div className="image-container">
        <img src="/img/dices.png" alt="Dice game" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={onStartGame}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  text-align: center;

  .image-container img {
    max-width: 100%;
    height: auto;
  }

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
      h1 {
        font-size: 48px; 
        white-space: normal;
      }
    }
    
`;
