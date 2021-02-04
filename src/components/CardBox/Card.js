import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.li`
  flex-basis: 30%;
  height: 16rem;
  margin: 0.5rem;
  background-color: #004460;
  border-radius: 8%;
`;

const Title = styled.p`
  font-size: 1.8rem;
  color: rgba(255,255,255);
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 0.3rem;
  font-size: 1.2rem;
`;

const Category = styled.p``;

const Date = styled.p``;

const ActiveComment = styled.p`
  position: absolute;
  bottom: 12px;
  color: rgba(255,255,255,0.5);
  font-weight: 300;
`;

const ContentArea = styled.div`
  position: relative;
  box-sizing: border-box;
  height: inherit;
  padding: 2rem 3rem;
`;

const TopLine = styled.div`
  display: flex;
  font-weight: 200;
  justify-content: space-between;
  color: rgba(255,255,255,0.5)
`;

const MiddleLine = styled.div`
  margin-top: 2rem;
  color: rgba(255,255,255,0.5)

`;

const Emoji = styled.p`
  position: absolute;
  font-size: 5rem;
  bottom: 15px;
  right: 20px;
`;

function Card({ toy }) {
  return (
    <CardWrapper>
      <ContentArea>
        <TopLine>
          <Date>
            1시간전 ACTIVATED
          </Date>
          <Category>
            {toy.category}
          </Category>
        </TopLine>
        <MiddleLine>
          <Title>
            {toy.title}
          </Title>
          <Description>
            {toy.description}
          </Description>
        </MiddleLine>
        <Emoji>
          🔥
        </Emoji>
        <ActiveComment>
          레드불 샀어? 개발자 갈리는 소리 들려?
        </ActiveComment>
      </ContentArea>
    </CardWrapper>
  );
}

export default Card;
