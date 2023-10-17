/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
import QuestionBox from "./QuestionBox";

function App() {
  const [isStart, setisStart] = useState(true);
  useEffect(() => {
    fetch("/nagative.json")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error());
  });
  useEffect(() => {
    fetch("/positive.json")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error());
  });

  const handleClickStart = () => {
    setisStart(() => !isStart);
  };
  return (
    <div css={app}>
      <div css={headerWapper}></div>
      <div css={bodyWapper}>
        {isStart ? (
          <buttton css={startBtn} onClick={handleClickStart}>
            start
          </buttton>
        ) : (
          <QuestionBox />
        )}
      </div>
      <div css={footerWapper}></div>
    </div>
  );
}

export default App;
const app = css`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const headerWapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  width: 100vw;
  height: 20%;
`;
const bodyWapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #603901;

  width: 100vw;
  height: 60%;
`;
const startBtn = css`
  color: white;
  font-weight: bold;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px 20px;
`;
const footerWapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  width: 100vw;
  height: 20%;
`;
