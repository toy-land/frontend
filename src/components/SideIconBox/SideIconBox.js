import React from 'react';
import styled from 'styled-components';
import Pencil from './Pencile';
import Trash from './Trash';

const SideIconArea = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: -4rem;
  width: 9rem;
  height: 14rem;
  background-color: transparent;
`;

const SideIconWrapper = styled.div`
  width:inherit;
  height:inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function SideIconBox() {
  return (
    <SideIconArea>
      <SideIconWrapper>
        <Pencil />
        <Trash />
      </SideIconWrapper>
    </SideIconArea>
  );
}

export default SideIconBox;
