import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={`/img/dice_${currentDice}.png`}
          alt={`dice showing ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  .dice:hover {
    transform: scale(1.1);
  }
  p {
    font-size: 24px;
  }
`;
