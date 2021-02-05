import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.li`
  flex-basis: 30%;
  height: 16rem;
  margin: 1.2rem;
  background-color: #004460;
  border-radius: 1.9rem;
  letter-spacing: 0.05rem;
`;

const Title = styled.p`
  font-size: 1.8rem;
  color: rgba(255,255,255);
  font-weight: 700;
  letter-spacing: 0.2rem;
`;

const Description = styled.p`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  letter-spacing: 0.15rem;
`;

const Category = styled.p``;

const Date = styled.p``;

const ActiveComment = styled.p`
  position: absolute;
  bottom: 12px;
  color: rgba(255,255,255,0.5);
  font-weight: 400;
`;

const ContentArea = styled.div`
  position: relative;
  box-sizing: border-box;
  height: inherit;
  padding: 2rem 2rem;
`;

const TopLine = styled.div`
  display: flex;
  font-weight: 300;
  justify-content: space-between;
  color: rgba(255,255,255,0.5);
`;

const MiddleLine = styled.div`
  margin-top: 2rem;
  color: rgba(255,255,255,0.5);
`;

const EmojiWrapper = styled.p`
  position: absolute;
  font-size: 5rem;
  bottom: 15px;
  right: 18px;
`;

function Card({ toy, emoji, active }) {
  return (
    <CardWrapper>
      <ContentArea>
        <TopLine>
          <Date>
            {`active 정도: ${active}`}
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
        <EmojiWrapper>
          {emoji}
        </EmojiWrapper>
        <ActiveComment>
          레드불 샀어? 개발자 갈리는 소리 들려?
        </ActiveComment>
      </ContentArea>
    </CardWrapper>
  );
}

export default Card;
