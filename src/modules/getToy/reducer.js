import { reducerUtils } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  getToyStatus: {
    loading: false,
    success: null,
    error: null,
    data: null,
  },
  getToysStatus: {
    loading: false,
    success: null,
    error: null,
    data: [],
  },
};

const getToy = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE_TOYS:
      return initialState;
    case actions.GET_TOY:
      return {
        ...state,
        getToyStatus: reducerUtils.loading(),
      };
    case actions.GET_TOY_SUCCESS:
      return {
        ...state,
        getToyStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_TOY_FAIL:
      return {
        ...state,
        getToyStatus: reducerUtils.fail(action.payload),
      };
    case actions.GET_TOYS:
      return {
        ...state,
        getToysStatus: {
          ...state.getToysStatus,
          loading: true,
        },
      };
    case actions.GET_TOYS_SUCCESS:
      return {
        ...state,
        getToysStatus: {
          ...state.getToysStatus,
          loading: false,
          success: true,
          data: [...state.getToysStatus.data, ...action.payload],
        },
      };
    case actions.GET_TOYS_FAIL:
      return {
        ...state,
        getToysStatus: {
          ...state.getToysStatus,
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default getToy;
