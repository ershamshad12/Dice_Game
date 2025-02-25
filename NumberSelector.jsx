import styled from "styled-components";

const NumberSelector = ({ setError, error, selectNumber, setSelectNumber }) => {
  let arrNumber = [1, 2, 3, 4, 5, 6];

  let numberSelectorHandler = (ele) => {
    setSelectNumber(ele);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      {/* <p className="error">{error}</p> */}
      {error && <p className="error">{error}</p>}
      <div className="flex">
        {arrNumber.map((ele) => (
          <Box
            isSelect={ele === selectNumber}
            key={ele}
            onClick={() => numberSelectorHandler(ele)}
          >
            {ele}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: center;
  .flex {
    display: flex;
    gap: 20px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
  }
  .error {
    color: red;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

const Box = styled.div`
  height: 70px;
  width: 70px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 22px;
  font-weight: 700;
  background-color: ${({ isSelect }) => (isSelect ? "black" : "white")};
  color: ${({ isSelect }) => (!isSelect ? "black" : "white")};
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  user-select: none;

  &:hover {
    transform: scale(1.1);
  }
`;
