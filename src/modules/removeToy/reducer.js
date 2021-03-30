/* eslint-disable no-alert */
import { getAsyncState } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  removeToyStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
};

const removeToy = (state = initialState, action) => {
  switch (action.type) {
    case actions.removeToyAsyncAction.request:
      return {
        ...state,
        removeToyStatus: getAsyncState.loading(),
      };
    case actions.removeToyAsyncAction.success:
      return {
        ...state,
        removeToyStatus: getAsyncState.success(action.payload),
      };
    case actions.removeToyAsyncAction.fail:
      return {
        ...state,
        removeToyStatus: getAsyncState.fail(action.payload),
      };
    default:
      return state;
  }
};

export default removeToy;
