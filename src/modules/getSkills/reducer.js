import { reducerUtils } from '@utils/asyncUtils';
import * as actions from './actions';

const initialState = {
  getSkillsStatus: {
    loading: false,
    data: null,
    success: null,
    error: null,
  },
};

const getSkill = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SKILLS:
      return {
        ...state,
        getSkillsStatus: reducerUtils.loading(),
      };
    case actions.GET_SKILLS_SUCCESS:
      return {
        ...state,
        getSkillsStatus: reducerUtils.success(action.payload),
      };
    case actions.GET_SKILLS_FAIL:
      return {
        ...state,
        getSkillsStatus: reducerUtils.fail(action.payload),
      };
    default:
      return state;
  }
};

export default getSkill;
