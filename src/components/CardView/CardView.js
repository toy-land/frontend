import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getToysThunk, initializeToys } from '@modules/getToy';
import { useDispatch, useSelector } from 'react-redux';
import { getActive } from '@utils/getActive';
import { emojiTheme } from '@constants/emojiTheme';

import A from '@atoms';
import C from '@components';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { respondTo } from '@utils/mixin';
import Card from './Card';

const CardContainer = styled.section`
  padding: 0 3rem;
  display: flex;
  align-items: center;
  height: 70vh;
  flex-direction: column;
  overflow: auto;
  width: 100rem;
  ${respondTo.mobile`
      width: 90%;
  `}
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SpinnerContainer = styled.div`
  position:absolute;
  bottom: ${(props) => props.y}%;
  left:50%;
`;

const CardList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-content: flex-start;
`;

const CardViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;

function CardView() {
  const [page, setPage] = useState(0);
  const [target, setTarget] = useState(null);
  const dispatch = useDispatch();
  const getToysStatus = useSelector(
    (state) => state.getToy.getToysStatus,
  );
  const [emojiKey, setEmojiKey] = useState(0);
  const [modalToggle, setModalToggle] = useState(false);
  const [toyId, setToyId] = useState(null);

  useIntersectionObserver({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && !getToysStatus.loading) {
        dispatch(getToysThunk(page));
        setPage(page + 1);
      }
    },
  });

  const getRandomKey = () => Math.floor(Math.random() * 10) % 3;

  // 컴포넌트 마운트에만
  useEffect(() => {
    const randKey = getRandomKey();
    setEmojiKey(randKey);
    return () => dispatch(initializeToys());
  }, []);

  const loopToys = (toys) => {
    const renderedToys = toys.map((toy) => {
      const pushedDate = toy.active;
      const active = getActive(pushedDate);
      const emoji = emojiTheme[emojiKey][active];
      return (
        <Card
          key={toy.id}
          toy={toy}
          emoji={emoji}
          active={active}
          setModalToggle={setModalToggle}
          setToyId={setToyId}
          id={toy.id}
        />
      );
    });
    return renderedToys;
  };

  return (
    <CardViewWrapper>
      <CardContainer>
        {getToysStatus.loading && (
          page > 1 ? (
            <SpinnerContainer y="0">
              <A.Spinner />
            </SpinnerContainer>
          )
            : (
              <SpinnerContainer y="50">
                <A.Spinner />
              </SpinnerContainer>
            )
        )}
        <CardList>
          {getToysStatus.success && (
            <>
              {modalToggle && (
                <>
                  <C.DeleteBox toyId={toyId} setModalToggle={setModalToggle} />
                </>
              )}
              {loopToys(getToysStatus.data)}
            </>
          )}
        </CardList>
        {(!getToysStatus.isLastPage)
          && (
            <div
              ref={setTarget}
              className="last-item"
            />
          )}
      </CardContainer>
    </CardViewWrapper>
  );
}

export default CardView;
