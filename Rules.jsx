import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking on the dice image, if the selected number matches the
          dice number, you will earn the same points as shown on the dice.
        </p>
        <p>If your guess is incorrect, 1 point will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 15px;
  background-color: #ffe5e5;
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  line-height: 1.8;

  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
  h2 {
    font-size: 22px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1.2px;
    color: #000;
  }
  .text {
    max-width: 600px;
    margin-top: 20px;
    /* text-transform: capitalize; */
    text-align: center;
    font-weight: 500;
    padding: 10px;
    line-height: 1.7;
  }
  .text p {
    margin-bottom: 12px;
    font-size: 16px;
    text-transform: none;
  }
`;
