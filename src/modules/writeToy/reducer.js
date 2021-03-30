import { getAsyncState } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  writeToyStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
};

const writeToy = (state = initialState, action) => {
  switch (action.type) {
    case actions.writeToyAsyncAction.request:
      return {
        ...state,
        writeToyStatus: getAsyncState.loading(),
      };
    case actions.writeToyAsyncAction.success:
      return {
        ...state,
        writeToyStatus: getAsyncState.success(action.payload),
      };
    case actions.writeToyAsyncAction.failure:
      return {
        ...state,
        writeToyStatus: getAsyncState.fail(action.payload),
      };
    default:
      return state;
  }
};

export default writeToy;
