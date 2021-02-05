import CardBox from '@components/CardBox';
import { darken } from 'polished';
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

const MoreButton = styled.button`
  position: absolute;
  outline: 0;
  border: none;
  border-radius: 8rem;
  cursor: pointer;
  width: 8rem;
  height: 5rem;
  bottom: -3rem;
  right: 50%;
  &:hover {
    opacity: 0.8;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

function MainView() {
  const [page, setPage] = useState(0);
  return (
    <MainViewWrapper>
      <CardArea>
        <CardBox page={page} />
      </CardArea>
      <MoreButton onClick={() => { setPage(page + 1); }}>
        <p>more</p>
      </MoreButton>
    </MainViewWrapper>
  );
}

export default MainView;
