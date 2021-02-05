import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
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
`;

const IconEmojiWrapper = styled.p`
  font-size: 3rem;
`;

function SideIcon({ iconEmoji }) {
  return (
    <Circle>
      <IconEmojiWrapper>
        {iconEmoji}
      </IconEmojiWrapper>
    </Circle>
  );
}

export default SideIcon;
