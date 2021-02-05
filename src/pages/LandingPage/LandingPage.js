/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LandingWallpaper from '@assets/images/LandingWallpaper.png';

import C from '@components';

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

const WallPaper = styled.div`
  width: 100vw;
  height: 100vh;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${slideDown};
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  img {
    height: 85vh;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  opacity: 1;
`;

const WrapContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: inherit;
  height: inherit;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

`;

export default function LandingPage() {
  const [isScroll, setIsScroll] = useState(false);

  const onScroll = () => {
    if (document.documentElement.scrollTop > 3) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    // return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Wrapper>
        <WrapContainer>
          <C.Header />
          {isScroll
            ? (
              <Main>
                <C.MainView />
                <C.SideIconBox />
              </Main>
            )
            : (
              <>
                <WallPaper active>
                  <img src={LandingWallpaper} />
                </WallPaper>
              </>
            )}
        </WrapContainer>
      </Wrapper>

    </>
  );
}
