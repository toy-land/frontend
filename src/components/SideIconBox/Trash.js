import { toggleDrag } from '@modules/dragToy';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '@constants/itemType';
import Overlay from '@atoms/Overlay';
import SideIcon from './SideIcon';

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
  const isDragReady = useSelector((state) => state.dragToy.isDragReady);
  const handleOverlay = () => {
    dispatch(toggleDrag());
  };
  return (
    <div>
      {isDragReady
      && (
      <Overlay handleOverlay={handleOverlay} />
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
