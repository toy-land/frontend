import { getAsyncState } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  loading: false,
  data: {
    skillData: null,
    organizationData: null,
    categoryData: null,
  },
  error: null,
  success: null,
};

const getOption = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE_OPTION:
      return initialState;
    case actions.getOptionAsyncAction.request:
      return {
        ...state,
        ...getAsyncState.loading(state.data),
      };
    case actions.getOptionAsyncAction.success:
      return {
        ...state,
        ...getAsyncState.success({ ...action.payload }),
      };
    case actions.getOptionAsyncAction.failure:
      return {
        ...state,
        ...getAsyncState.fail(action.payload, state.data),
      };
    default: return state;
  }
};

export default getOption;
