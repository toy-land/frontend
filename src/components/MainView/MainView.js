import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { initializeToys } from '@modules/getToy/actions';

import C from '@components';

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
  right: 48%;
  &:hover {
    opacity: 0.8;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
const TopText = styled.div`
  z-index: 98;
  width: inherit;
  height: 3rem;
  top: 1px;
  font-size: 2rem;
  font-family: 'S-CoreDream-3';
  letter-spacing: 0.1rem;
  padding: 0 8rem;
  color: white;
`;

function MainView() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(initializeToys());
    setPage(0);
  }, []);

  return (
    <>
      <TopText>
        최근 업로드 된 프로젝트
      </TopText>
      <MainViewWrapper>
        <CardArea>
          <C.CardView page={page} />
        </CardArea>
        <MoreButton onClick={() => { setPage(page + 1); }}>
          <p>more</p>
        </MoreButton>
      </MainViewWrapper>
    </>
  );
}

export default MainView;
