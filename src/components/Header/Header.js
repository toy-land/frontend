import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  margin-top: 2vw;
  padding: 0 2rem;
  width: calc(100% - 3rem);
  max-width: 120rem;
  height: 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrapLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: S-CoreDream-6;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

export default function Header() {
  return (
    <Wrapper>
      <WrapLogo>토이랜드 🎡</WrapLogo>
    </Wrapper>
  );
}
