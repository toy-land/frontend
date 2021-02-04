import { reducerUtils } from '@utils/asyncUtils';
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
    case actions.INITIALIZE_TOY:
      return initialState;
    case actions.WRITE_TOY:
      return {
        ...state,
        writeToyStatus: reducerUtils.loading(),
      };
    case actions.WRITE_TOY_SUCCESS:
      return {
        ...state,
        writeToyStatus: reducerUtils.success(action.payload),
      };
    case actions.WRITE_TOY_FAIL:
      return {
        ...state,
        writeToyStatus: reducerUtils.fail(action.payload),
      };
    default:
      return state;
  }
};

export default writeToy;
