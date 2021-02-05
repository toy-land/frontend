import React from 'react';
import styled from 'styled-components';

const OverlayBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  z-index: 99;
`;

function Overlay({ handleOverlay }) {
  return (
    <OverlayBox onClick={handleOverlay} />
  );
}

export default Overlay;
