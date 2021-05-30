import { getAsyncState } from '@utils/asyncUtils';
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
    isLastPage: false,
  },
};

const getToy = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE_TOY:
      return {
        ...state,
        getToyStatus: { ...initialState.getToyStatus },
      };
    case actions.INITIALIZE_TOYS:
      return initialState;
    case actions.getToyAsyncAction.request:
      return {
        ...state,
        getToyStatus: getAsyncState.loading(),
      };
    case actions.getToyAsyncAction.success:
      return {
        ...state,
        getToyStatus: getAsyncState.success(action.payload),
      };
    case actions.getToyAsyncAction.failure:
      return {
        ...state,
        getToyStatus: getAsyncState.fail(action.payload),
      };
    case actions.getToysAsyncAction.request:
      return {
        ...state,
        getToysStatus: {
          ...state.getToysStatus,
          loading: true,
        },
      };
    case actions.getToysAsyncAction.success:
      return {
        ...state,
        getToysStatus: {
          ...state.getToysStatus,
          loading: false,
          success: true,
          data: [...state.getToysStatus.data, ...action.payload],
          isLastPage: action.payload.length === 0,
        },
      };
    case actions.getToysAsyncAction.failure:
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
