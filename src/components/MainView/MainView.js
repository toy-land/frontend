import CardBox from '@components/CardBox';
import React, { useState } from 'react';
import styled from 'styled-components';

const CardArea = styled.div`
  display: flex;
  justify-content: center;
  background-color: darkgray;
`;

const MainViewWrapper = styled.div`
  position: relative;
  background-color: black;
  padding: 0 20rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 5rem;
  position: absolute;
  bottom: 1rem;
  right: 50%;
`;

function MainView() {
  const [index, setIndex] = useState(0);
  return (
    <MainViewWrapper>
      <CardArea>
        <CardBox index={index} />
      </CardArea>
      <Button onClick={() => { setIndex(index + 6); }}>
        아래로
      </Button>
    </MainViewWrapper>
  );
}

export default MainView;
