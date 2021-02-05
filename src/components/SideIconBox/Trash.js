import { toggleDrag } from '@modules/dragToy';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '@constants/itemType';
import SideIcon from './SideIcon';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  z-index: 99;
`;

function Trash() {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => {
      console.log('Card is dropped');
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const dispatch = useDispatch();
  const dragStatus = useSelector((state) => state.dragToy.dragStatus);

  return (
    <div>
      {dragStatus
      && (
      <Overlay
        onClick={() => {
          dispatch(toggleDrag());
        }}
      />
      )}
      <SideIcon
        iconEmoji="🗑"
        handleClick={() => {
          dispatch(toggleDrag());
        }}
        drop={drop}
      />
    </div>
  );
}

export default Trash;
