import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { initializeToys } from '@modules/getToy/actions';

import C from '@components';
import useInfinteScroll from '@hooks/useInfinteScroll';

const CardArea = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: darkgray; */
`;

const MainViewWrapper = styled.div`
  background-color: black;
`;

const TopText = styled.div`
  position: sticky;
  margin-top: 3.5rem;
  height: 3rem;
  font-size: 2rem;
  font-family: 'S-CoreDream-3';
  letter-spacing: 0.1rem;
  padding: 0 8rem;
  color: white;
`;

function MainView() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setPage(0);
    return () => {
      dispatch(initializeToys());
    };
  }, []);

  useInfinteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setPage(page + 1);
      }
    },
  });

  return (
    <>
      <TopText>
        최근 업로드 된 프로젝트
      </TopText>
      <MainViewWrapper>
        <CardArea>
          <C.CardView page={page} setTarget={setTarget} />
        </CardArea>
      </MainViewWrapper>
    </>
  );
}

export default MainView;
