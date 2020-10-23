import React, { useState } from 'react';
import styled from "styled-components";

const StyledApp = styled.div`
  background-color: black;
  font-size: 32px;
  color: white;
`

const Main = () => {
  const [count, setCount] = useState(1)
  return (
    <StyledApp>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </StyledApp>
  );
}

export default Main;
