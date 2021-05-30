import { css } from 'styled-components';
import { breakpoints } from '@constants/breakPoints';

export const respondTo = Object.keys(breakpoints).reduce(
  // [ 'mobile', 'tablet', 'desktop' ]
  (accumulator, label) => {
    accumulator[label] = (literals) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(literals)};
      }
    `;
    return accumulator;
  },
  {}, // initial value
);
