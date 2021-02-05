/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import Card from '@components/CardBox/Card';
import styled from 'styled-components';
import { getToysThunk } from '@modules/getToy';
import { useDispatch, useSelector } from 'react-redux';
import { getActive } from '@utils/getActive';
import { emojiTheme } from '@constants/emojiTheme';

const CardContainer = styled.div`
  padding: 0 3rem;
  display: flex;
  height: 50vh;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: scroll;
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-content: flex-start;

`;

function CardBox({ page }) {
  const {
    data, loading, success, error,
  } = useSelector(
    (state) => state.getToy.getToysStatus,
  );
  const [emojiKey, setEmojiKey] = useState(0);

  const getRandomKey = () => Math.floor(Math.random() * 10) % 5;

  const dispatch = useDispatch();

  // 컴포넌트 마운트에만
  useEffect(() => {
    const randKey = getRandomKey();
    setEmojiKey(randKey);
  }, []);

  // page 변경마다
  useEffect(() => {
    dispatch(getToysThunk(page));
  }, [page]);

  const loopToys = (toys) => {
    const renderedToys = toys.map((toy) => {
      const pushedDate = '2021-02-04T16:15:30';
      const active = getActive(pushedDate);
      const emoji = emojiTheme[emojiKey][active];
      return (
        <>
          <Card toy={toy} emoji={emoji} active={active} id={toy.id} />
        </>
      );
    });
    console.log(renderedToys);
    return renderedToys;
  };

  return (
    <CardContainer>
      <CardList>
        {loading
        && (
        <h>
          로딩 중...
        </h>
        )}
        {!loading && success
           && (
           <>
             {loopToys(data)}
           </>
           )}
      </CardList>
    </CardContainer>
  );
}

export default CardBox;
