import { reducerUtils } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  getToyStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
  getToysStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
};

const getToy = (state = initialState, action) => {
  switch (action.type) {
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
        getToysStatus: reducerUtils.loading(),
      };
    case actions.GET_TOYS_SUCCESS:
      return {
        ...state,
        getToysStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_TOYS_FAIL:
      return {
        ...state,
        getToysStatus: reducerUtils.fail(action.payload),
      };
    default:
      return state;
  }
};

export default getToy;
