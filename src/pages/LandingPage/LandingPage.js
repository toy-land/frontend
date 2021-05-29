/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LandingWallpaper from '@assets/images/LandingWallpaper.png';

import C from '@components';
import { useSelector } from 'react-redux';

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

const WallPaper = styled.div`
  position: relative;
  z-index: -1;
  display: flex;
  justify-content: center;
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
  align-items: flex-start;
  justify-content: center;
  height: 110vh;
  opacity: 1;
`;

const WrapContainer = styled.div`
  max-width: 120rem;
  width: 100%;
`;

const Main = styled.div`
  height: inherit;
  margin-left: 1rem;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

export default function LandingPage() {
  const [isScroll, setIsScroll] = useState(false);

  const { loading: getToysLoading, success: getToysSuccess } = useSelector(
    (state) => state.getToy.getToysStatus,
  );

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
                <WallPaper active>
                  <img src={LandingWallpaper} alt="welcome wallpaper" />
                </WallPaper>
              </>
            )}
        </WrapContainer>
      </Wrapper>

    </>
  );
}
