/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import Card from '@components/CardBox/Card';
import styled from 'styled-components';
import { getToysThunk } from '@modules/getToy';
import { useDispatch, useSelector } from 'react-redux';
import { getActive } from '@utils/getActive';
import { emojiTheme } from '@constants/emojiTheme';
import DeleteBox from '@components/DeleteBox/DeleteBox';

const CardContainer = styled.div`
  padding: 0 3rem;
  display: flex;
  height: 70vh;
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

const CardBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;

function CardBox({ page }) {
  const {
    data, loading, success, error,
  } = useSelector(
    (state) => state.getToy.getToysStatus,
  );
  const [emojiKey, setEmojiKey] = useState(0);
  const [removeToggle, setRemoveToggle] = useState(false);
  const [toyId, setToyId] = useState(null);

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
      const pushedDate = toy.active;
      const active = getActive(pushedDate);
      const emoji = emojiTheme[emojiKey][active];
      return (
        <>
          <Card
            toy={toy}
            emoji={emoji}
            active={active}
            setRemoveToggle={setRemoveToggle}
            setToyId={setToyId}
          />
        </>
      );
    });
    return renderedToys;
  };

  return (
    <CardBoxWrapper>

      <CardContainer>
        <CardList>
          {!loading && success
             && (
               <>
                 {removeToggle && (
                 <>
                   <DeleteBox toyId={toyId} setRemoveToggle={setRemoveToggle} />
                 </>
                 )}
                 {loopToys(data)}
               </>
             )}
        </CardList>
      </CardContainer>
    </CardBoxWrapper>
  );
}

export default CardBox;
