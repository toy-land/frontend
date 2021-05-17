import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMoreToysThunk, getToysThunk } from '@modules/getToy';
import { useDispatch, useSelector } from 'react-redux';
import { getActive } from '@utils/getActive';
import { emojiTheme } from '@constants/emojiTheme';
import Spinner from '@utils/Spinner';

import C from '@components';
import Card from './Card';

const CardContainer = styled.section`
  padding: 0 3rem;
  display: flex;
  height: 70vh;
  width: 100rem;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
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

function CardView({ page, setTarget }) {
  const getToysStatus = useSelector(
    (state) => state.getToy.getToysStatus,
  );
  const getMoreToysStatus = useSelector(
    (state) => state.getToy.getMoreToysStatus,
  );
  const [emojiKey, setEmojiKey] = useState(0);
  const [modalToggle, setModalToggle] = useState(false);
  const [toyId, setToyId] = useState(null);

  const getRandomKey = () => Math.floor(Math.random() * 10) % 3;

  const dispatch = useDispatch();

  // 컴포넌트 마운트에만
  useEffect(() => {
    const randKey = getRandomKey();
    setEmojiKey(randKey);
  }, []);

  // page 변경마다
  useEffect(() => {
    if (page > 0) {
      dispatch(getMoreToysThunk(page));
    } else {
      dispatch(getToysThunk(page));
    }
  }, [page]);

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
        <CardList>
          {getToysStatus.loading
            ? (<Spinner />)
            : (
              getToysStatus.success && (
                <>
                  {modalToggle && (
                    <>
                      <C.DeleteBox toyId={toyId} setModalToggle={setModalToggle} />
                    </>
                  )}
                  {loopToys([...getToysStatus.data, ...getMoreToysStatus.data])}
                </>
              )
            )}
        </CardList>
        {getMoreToysStatus.loading
          ? (
            <Spinner />
          ) : (
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
