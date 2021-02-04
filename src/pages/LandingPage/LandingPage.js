/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

import C from '@components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  opacity: 1;
`;

const WrapContainer = styled.div`
  max-width: 100rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


import C from '@components';

export default function LandingPage() {
  return (
    <Wrapper>
      <WrapContainer>
        <C.Header />
    <div>
      <C.MainView />
    </div>
      </WrapContainer>
    </Wrapper>
  );
}
