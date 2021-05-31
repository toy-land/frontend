import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LandingWallpaper from '@assets/images/LandingWallpaper.png';

import C from '@components';
import { useSelector } from 'react-redux';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { respondTo } from '@utils/mixin';

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-70px);
  }
  to {
    transform: translateY(0px);
  }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Curtain = styled.section`
  height: 150vh;
  ${respondTo.mobile`
      display: none;
  `}
`;

const WallPaper = styled.div`
  position: relative;
  z-index: -1;
  display: flex;
  justify-content: center;
  margin: 0 5%;
  margin-bottom: 10vh;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${slideDown};
  animation-fill-mode: forwards;
  img {
    animation: ${fadeIn} 2s;
    width:100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
`;

const WrapContainer = styled.div`
  width:100%;
  max-width: 120rem;
  ${respondTo.mobile`
      max-width: 35rem;
  `}
`;

const Main = styled.div`
  height: inherit;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

export default function LandingPage() {
  const [isDraw, setIsDraw] = useState(false);
  const [target, setTarget] = useState(null);

  const { loading: getToysLoading, success: getToysSuccess } = useSelector(
    (state) => state.getToy.getToysStatus,
  );

  useIntersectionObserver({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setIsDraw(true);
      }
    },
  });

  return (
    <>
      <Wrapper>
        <WrapContainer>
          <C.Header />
          {isDraw
            ? (
              <Main>
                <C.MainView />
                {
                  ((!getToysLoading) && (getToysSuccess))
                  && (
                    <>
                      <C.SideIconBox />
                    </>
                  )
                }
              </Main>
            )
            : (
              <>
                <Curtain>
                  <WallPaper active>
                    <img src={LandingWallpaper} alt="welcome wallpaper" />
                  </WallPaper>
                </Curtain>
                <div
                  ref={setTarget}
                  className="last-item"
                />
              </>
            )}
        </WrapContainer>
      </Wrapper>

    </>
  );
}
