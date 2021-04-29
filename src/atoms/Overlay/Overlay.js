import React from 'react';
import styled from 'styled-components';

const OverlayBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 110%;
  height: 110%;
  top: -1rem;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  position: fixed;
  z-index: 99;
`;

function Overlay({ handleOverlay }) {
  return (
    <OverlayBox onClick={handleOverlay} />
  );
}

export default Overlay;
