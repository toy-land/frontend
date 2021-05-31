import React from 'react';
import styled from 'styled-components';

import C from '@components';
import { respondTo } from '@utils/mixin';

const CardArea = styled.div`
  display: flex;
  justify-content: center;
`;

const MainViewWrapper = styled.div`
  background-color: black;
`;

const TopText = styled.div`
  height: 3rem;
  font-size: 2rem;
  font-family: 'S-CoreDream-3';
  letter-spacing: 0.1rem;
  padding: 0 8rem;
  color: white;
  ${respondTo.mobile`
      padding: 0 2rem;
  `}
`;

function MainView() {
  return (
    <>
      <TopText>
        최근 업로드 된 프로젝트
      </TopText>
      <MainViewWrapper>
        <CardArea>
          <C.CardView />
        </CardArea>
      </MainViewWrapper>
    </>
  );
}

export default MainView;
