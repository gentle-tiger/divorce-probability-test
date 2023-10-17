/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";

function QuestionBox() {
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount(() => count + 1);
  };

  return (
    <div css={questionBoxWapper}>
      <div css={questoinBox}>
        <div css={positiveBox} onClick={handleClickCount}>
          긍정 질문 1
        </div>
        <div css={nagativeBox} onClick={handleClickCount}>
          부정 질문 1
        </div>
      </div>
    </div>
  );
}
export default QuestionBox;

const questionBoxWapper = css`
  width: 400px;
  height: 200px;
  border: 1px solid;
  background-color: #9dd0fc;
`;
const questoinBox = css`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;
const positiveBox = css`
  background-color: white;
`;
const nagativeBox = css`
  background-color: white;
`;
