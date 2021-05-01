import { activeDate, activeComment } from '@constants/activeText';
import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 1.8rem;
  color: rgba(255,255,255);
  font-weight: 700;
  letter-spacing: 0.2rem;
`;

const Description = styled.div`
  width: 80%;
  height: 4rem;
  overflow: hidden;
  padding-top: 1rem;
  font-size: 1.4rem;
  letter-spacing: 0.15rem;
  color: rgba(255,255,255,0.8);
  font-family: 'S-CoreDream-3';
`;

const Category = styled.p`
  font-size: 1.1rem;
  color: rgba(255,255,255,0.9);
  font-weight: 500;
`;

const Date = styled.p`
  font-weight: 400;
`;

const ActiveCommentWrapper = styled.p`
  position: absolute;
  bottom: 14px;
  font-size: 1.1rem;
  color: rgba(255,255,255,0.9);
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
  color: rgba(255,255,255,0.6);
`;

const MiddleLine = styled.div`
  margin-top: 2rem;
`;

const EmojiWrapper = styled.p`
  position: absolute;
  font-size: 5rem;
  bottom: 15px;
  right: 18px;
`;

function CardContent({ toy, emoji, active }) {
  return (
    <ContentArea>
      <TopLine>
        <Date>
          {activeDate[active]}
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
      <ActiveCommentWrapper>
        {activeComment[active]}
      </ActiveCommentWrapper>
    </ContentArea>
  );
}

export default CardContent;
