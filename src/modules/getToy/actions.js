import { createAsyncAction } from '@utils/asyncUtils';

// 하나 조회하기
export const INITIALIZE_TOY = 'getToy/INITIALIZE_TOY';

export const initializeToy = () => ({
  type: INITIALIZE_TOY,
});

export const getToyAsyncAction = createAsyncAction('getToy/GET_TOY');

// 여러개 조회하기
export const INITIALIZE_TOYS = 'getToy/INITIALIZE_TOYS';

export const initializeToys = () => ({
  type: INITIALIZE_TOYS,
});

export const getToysAsyncAction = createAsyncAction('getToy/GET_TOYS');

// 여러개 추가 조회하기
export const getMoreToysAsyncAction = createAsyncAction('getToy/GET_MORE_TOYS');
