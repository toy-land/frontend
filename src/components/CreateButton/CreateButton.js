import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  width: 11rem;
  height: 2.5rem;
  border-radius: 3.6rem;
  border: solid 0.02rem #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const WrapText = styled.div`
  font-family: S-CoreDream-7;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
`;

export default function CreateButton() {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push('/create')}>
      <WrapText>+ 내 프로젝트 올리기</WrapText>
    </Wrapper>
  );
}
