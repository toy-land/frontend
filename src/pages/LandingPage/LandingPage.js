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

const WallPaper = styled.div`
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
                  <img src={LandingWallpaper} />
                </WallPaper>
              </>
            )}
        </WrapContainer>
      </Wrapper>

    </>
  );
}
