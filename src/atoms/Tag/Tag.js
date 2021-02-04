import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import colorType from '@constants/colorType';

const Wrapper = styled.div`
  width: fit-content;
  height: 26px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  display: fles;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 13px;
  &:hover {
    background-color: ${({ backgroundColor }) => darken(0.04, backgroundColor)};
  }
`;

const WrapText = styled.div`
  padding-left: 10px;
  ${({ hasX }) => (hasX === true ? 'padding-right: 5px;' : 'padding-right: 10px;')}
  font-size: 12px;
  font-weight: bold;
`;

const WrapCancel = styled.div`
  display: fles;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  font-size: 12px;
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
