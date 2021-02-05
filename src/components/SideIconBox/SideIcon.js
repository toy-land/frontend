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

  ${(props) => props.dragStatus && css`
    position: relative;
    z-index: 100;
  `}
`;

const IconEmojiWrapper = styled.p`
  font-size: 3rem;
`;

function SideIcon({ iconEmoji, handleClick, drop }) {
  const dragStatus = useSelector((state) => state.dragToy.dragStatus);
  return (
    <Circle onClick={handleClick} ref={drop} dragStatus={dragStatus}>
      <IconEmojiWrapper>
        {iconEmoji}
      </IconEmojiWrapper>
    </Circle>
  );
}

export default SideIcon;
