import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDrag, DragPreviewImage } from 'react-dnd';
import styled, { css } from 'styled-components';
import { ItemTypes } from '@constants/itemType';
import trash from '@styles/img/trash.png';
import CardContent from './CardContent';

const CardWrapper = styled.li`
  flex-basis: 30%;
  height: 16rem;
  margin: 1.2rem;
  background-color: #004460;
  border-radius: 1.9rem;
  letter-spacing: 0.05rem;
  overflow: hidden;

  ${(props) => props.isDragReady
    && css`
      cursor: move;
      position: relative;
      z-index: 100;
    `}
  ${(props) => props.isDragging && css`
    opacity: 0.3
  `}

`;

function Card({ toy, emoji, active }) {
  const isDragReady = useSelector((state) => state.dragToy.dragStatus);

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.CARD },
    begin: (monitor) => {
      console.log('dragging begin');
    },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        console.log('drop fail');
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage src={trash} connect={preview} />
      {isDragReady
        ? (
          <CardWrapper ref={drag} isDragging={isDragging} isDragReady={isDragReady}>
            <CardContent toy={toy} emoji={emoji} active={active} />
          </CardWrapper>
        )
        : (
          <CardWrapper isDragReady={isDragReady}>
            <CardContent toy={toy} emoji={emoji} active={active} />
          </CardWrapper>
        )}
    </>
  );
}

export default Card;
