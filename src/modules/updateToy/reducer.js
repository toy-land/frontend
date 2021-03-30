import { getAsyncState } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  updateToyStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
};

const updateToy = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE_TOY:
      return initialState;
    case actions.UPDATE_TOY:
      return {
        ...state,
        updateToyStatus: getAsyncState.loading(),
      };
    case actions.UPDATE_TOY_SUCCESS:
      return {
        ...state,
        updateToyStatus: getAsyncState.success(action.payload),
      };
    case actions.UPDATE_TOY_FAIL:
      return {
        ...state,
        updateToyStatus: getAsyncState.fail(action.payload),
      };
    default:
      return state;
  }
};

export default updateToy;
