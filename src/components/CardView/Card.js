import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, DragPreviewImage } from 'react-dnd';
import styled, { css, keyframes } from 'styled-components';
import { ItemTypes } from '@constants/itemType';
import trash from '@assets/images/trash.png';
import { toggleDrag } from '@modules/dragToy';
import { respondTo } from '@utils/mixin';
import CardContent from './CardContent';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const CardWrapper = styled.li`
  height: 16rem;
  margin: 1.2rem;
  background-color: #004460;
  border-radius: 1.9rem;
  letter-spacing: 0.05rem;
  overflow: hidden;
  cursor: pointer;
  animation: ${fadeIn} 2s;
  flex-basis: 30%;
  ${respondTo.mobile`
    flex-basis: 100%;
    `}

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

function Card({
  toy, emoji, active, setModalToggle, setToyId, id,
}) {
  const isDragReady = useSelector((state) => state.dragToy.isDragReady);
  const dispatch = useDispatch();
  const history = useHistory();

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.CARD },
    begin: (monitor) => {
    },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        return;
      }
      dispatch(toggleDrag()); // dnd가 완료 됐으므로 drag 준비 상태를 끕니다.
      // 삭제 데이터 전송
      setToyId(toy.id); // 삭제를 위해 container에 toy.id를 전달합니다.
      setModalToggle(true); // 삭제를 위해 removeToggle을 킵니다.
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
          <CardWrapper key={id} ref={drag} isDragging={isDragging} isDragReady={isDragReady}>
            <CardContent toy={toy} emoji={emoji} active={active} />
          </CardWrapper>
        )
        : (
          <CardWrapper key={id} onClick={() => history.push(`/detail/${id}`)} isDragReady={isDragReady}>
            <CardContent toy={toy} emoji={emoji} active={active} />
          </CardWrapper>
        )}
    </>
  );
}

export default Card;
