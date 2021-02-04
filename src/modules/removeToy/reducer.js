import { reducerUtils } from '../../utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  removeToyStatus: {
    loading: false,
    data: null,
    error: null,
  },
};

const removeToy = (state = initialState, action) => {
  switch (action.type) {
    case actions.REMOVE_TOY:
      return {
        ...state,
        removeToyStatus: reducerUtils.loading(),
      };
    case actions.REMOVE_TOY_SUCCESS:
      return {
        ...state,
        removeToyStatus: reducerUtils.success(),
      };
    case actions.REMOVE_TOY_FAIL:
      return {
        ...state,
        removeToyStatus: reducerUtils.fail(action.payload),
      };
    default:
      return state;
  }
};

export default removeToy;
