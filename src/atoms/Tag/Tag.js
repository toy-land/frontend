import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import colorType from '@constants/colorType';

const Wrapper = styled.div`
  width: fit-content;
  height: 2.6rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  display: fles;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  border-radius: 1.3rem;
  &:hover {
    background-color: ${({ backgroundColor }) => darken(0.04, backgroundColor)};
  }
`;

const WrapText = styled.div`
  padding-left: 1rem;
  ${({ hasX }) => (hasX === true ? 'padding-right: 0.5rem;' : 'padding-right: 1rem;')}
  font-size: 1.2rem;
  font-weight: bold;
`;

const WrapCancel = styled.div`
  display: fles;
  justify-content: center;
  align-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 1.3rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background: ${({ backgroundColor }) => darken(0.04, backgroundColor)};
  }
`;

export default function Tag({
  text, func, type = 0,
}) {
  return (
    <Wrapper
      fontColor={colorType[type].fontColor}
      backgroundColor={colorType[type].background}
    >
      <WrapText hasX={func}>{text}</WrapText>
      {func && (
        <WrapCancel backgroundColor={colorType[type].background} onClick={func}>
          ✕
        </WrapCancel>
      )}
    </Wrapper>
  );
}
