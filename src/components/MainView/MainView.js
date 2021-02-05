import CardBox from '@components/CardBox';
import React, { useState } from 'react';
import styled from 'styled-components';

const CardArea = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: darkgray; */
`;

const MainViewWrapper = styled.div`
  position: relative;
  background-color: black;
`;

const Button = styled.button`
  width: 10rem;
  height: 5rem;
  position: absolute;
  bottom: 1rem;
  right: 50%;
`;

function MainView() {
  const [page, setPage] = useState(0);
  return (
    <MainViewWrapper>
      <CardArea>
        <CardBox page={page} />
      </CardArea>
      <Button onClick={() => { setPage(page + 1); }}>
        아래로
      </Button>
    </MainViewWrapper>
  );
}

export default MainView;
