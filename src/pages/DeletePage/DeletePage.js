import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import { removeToyThunk } from '@modules/removeToy';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: #4aaff8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
`;

const WrapFont = styled.div`
  font-family: S-CoreDream-5;
  font-size: 2rem;
  margin-bottom: 4rem;
  ::-webkit-input-placeholder {
    font-family: S-CoreDream-8;
    font-size: 7rem;
  }
`;

const WrapFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 4rem;
`;

const WrapInput = styled.input`
  width: 30rem;
  height: 5rem;
  border-radius: 10rem;
  border: solid 0.1rem white;
  background-color: #ffffff;
  outline: none;
  font-family: S-CoreDream-5;

  font-size: 1.3rem;
  padding-left: 1.5rem;
  margin-right: 1.5rem;
  ::-webkit-input-placeholder {
    font-family: S-CoreDream-3;
    color: grey;
  }
`;

const WrapButton = styled.div`
  cursor: pointer;
  font-family: S-CoreDream-8;
  font-size: 2rem;
`;

export default function DeletePage({ match }) {
  const [passwd, setPasswd] = useState('');
  const { id } = match.pararm;

  const dispatch = useDispatch();

  function deleteToy() {
    dispatch(removeToyThunk({ id, data: { password: passwd } }));
  }

  return (
    <Wrapper>
      <WrapContainer>
        <WrapFont>생성 시 사용했던 비밀번호 입력</WrapFont>
        <WrapFlex>
          <WrapInput
            type="password"
            placeholder="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
          <WrapButton type="button" onClick={() => deleteToy()}>
            확인
          </WrapButton>
        </WrapFlex>
      </WrapContainer>
    </Wrapper>
  );
}
