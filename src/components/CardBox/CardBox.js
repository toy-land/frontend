import React, { useEffect, useState } from 'react';
import Card from '@components/CardBox/Card';
import styled from 'styled-components';
import { getToysThunk } from '@modules/getToy';
import { useDispatch, useSelector } from 'react-redux';

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

function CardBox({ index }) {
  const {
    data, loading, success, error,
  } = useSelector(
    (state) => state.getToy.getToysStatus,
  );

  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getToysThunk(index));
  }, [index]);

  const loopToys = (toys) => {
    const renderedToys = toys.map((toy) => (
      <>
        <Card toy={toy} />
      </>
    ));
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
        {success
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
