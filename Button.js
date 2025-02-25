import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: black;
  padding: 12px 18px;
  border-radius: 8px;
  min-width: 220px;
  min-height: 48px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out;
  cursor: pointer;

  &:active{
    transform: scale(0.96);
  }
  &:focus{
    outline: 2px solid black;
    outline-offset: 2px;
  }

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
    /* transition: all 0.3s ease-in-out; */
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  /* margin-top: 10px; */
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
