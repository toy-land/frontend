import React from 'react';
import styled from 'styled-components';

import C from '@components';

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  max-width: 100rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrapLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: S-CoreDream-6;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export default function Header() {
  return (
    <Wrapper>
      <WrapLogo>토이랜드</WrapLogo>
    </Wrapper>
  );
}
