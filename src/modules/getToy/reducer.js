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
  },
  getMoreToysStatus: {
    loading: false,
    success: null,
    error: null,
    data: [],
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
      return {
        ...state,
        getToysStatus: { ...initialState.getToysStatus },
      };
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
    case actions.getMoreToysAsyncAction.request:
      return {
        ...state,
        getMoreToysStatus: {
          ...state.getMoreToysStatus,
          loading: true,
        },
      };
    case actions.getMoreToysAsyncAction.success:
      return {
        ...state,
        getMoreToysStatus: {
          ...state.getMoreToysStatus,
          loading: false,
          success: true,
          data: [...state.getMoreToysStatus.data, ...action.payload],
        },
      };
    case actions.getMoreToysAsyncAction.failure:
      return {
        ...state,
        getMoreToysStatus: {
          ...state.getMoreToysStatus,
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
