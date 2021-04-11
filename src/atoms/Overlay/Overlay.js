import React from 'react';
import styled from 'styled-components';

const OverlayBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 120%;
  height: 150%;
  top: -10px;
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
