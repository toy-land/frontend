import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  margin-top: 2rem;
  padding: 0 2rem;
  height: 10rem;
  display: flex;
`;

const WrapLogo = styled.h2`
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
