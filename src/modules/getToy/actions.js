// 하나 조회하기
export const GET_TOY = 'getToy/GET_TOY';
export const GET_TOY_SUCCESS = 'getToy/GET_TOY_SUCCESS';
export const GET_TOY_FAIL = 'getToy/GET_TOY_FAIL';

// 여러개 조회하기
export const INITIALIZE_TOYS = 'getToy/INITIALIZE_TOYS';
export const GET_TOYS = 'getToy/GET_TOYS'; // 요청 시작
export const GET_TOYS_SUCCESS = 'getToy/GET_TOYS_SUCCESS'; // 요청 성공
export const GET_TOYS_FAIL = 'getToy/GET_TOYS_FAIL'; // 요청 실패

export const initializeToys = () => ({
  type: INITIALIZE_TOYS,
});
