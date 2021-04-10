import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    transform: translateY(-70px);
  }
  to {
    transform: translateY(0px);
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-name: ${slideDown};
  animation-fill-mode: forwards;

  position: absolute;
  z-index: 100;
  width: 50vw;
  height: 60vh;
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

function PasswdModal({
  setPasswd, handleClick, modalText,
}) {
  // setPasswd, onClick
  return (
    <ModalBackground>
      <ModalWrapper>
        <WrapFont>{modalText}</WrapFont>
        <WrapFlex>
          <WrapInput
            type="password"
            placeholder="password"
            onChange={(e) => setPasswd(e.target.value)}
          />
          <WrapButton type="button" onClick={handleClick}>
            확인
          </WrapButton>
        </WrapFlex>
      </ModalWrapper>
    </ModalBackground>
  );
}

export default PasswdModal;
