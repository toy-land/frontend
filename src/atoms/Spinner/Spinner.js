import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.svg`
  display: none;
  animation: rotate 1s linear infinite;
  width: 60px;
  height: 60px;

  & .path {
    stroke: #00b0ff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Spinner = () => {
  const spinnerRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (spinnerRef.current) {
        spinnerRef.current.style.display = 'flex';
      }
    }, 100);
  }, []);

  return (
    <StyledSpinner viewBox="0 0 50 50" ref={spinnerRef}>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  );
};

export default Spinner;
