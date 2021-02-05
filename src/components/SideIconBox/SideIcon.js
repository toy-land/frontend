import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

const Circle = styled.div`
  cursor: pointer;
  border-radius: 100%;
  background-color: white;
  flex: 0.1;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 6.2rem;
  height: 6.2rem;
  &:hover {
    opacity: 0.8;
  }

  ${(props) => props.isDragReady && css`
    position: relative;
    z-index: 100;
  `}
`;

const IconEmojiWrapper = styled.p`
  font-size: 3rem;
`;

function SideIcon({ iconEmoji, handleClick, drop }) {
  const isDragReady = useSelector((state) => state.dragToy.isDragReady);
  return (
    <Circle onClick={handleClick} ref={drop} isDragReady={isDragReady}>
      <IconEmojiWrapper>
        {iconEmoji}
      </IconEmojiWrapper>
    </Circle>
  );
}

export default SideIcon;
