import * as optionApi from '@utils/optionApi';
import * as actions from './actions';

export const getOptionThunk = () => async (dispatch) => {
  dispatch({ type: actions.getOptionAsyncAction.request });
  try {
    const skillData = await optionApi.getSkillsApi();
    const organizationData = await optionApi.getOrganizationsApi();
    const categoryData = await optionApi.getCategoriesApi();
    dispatch({
      type: actions.getOptionAsyncAction.success,
      payload: {
        skillData: skillData.data,
        organizationData: organizationData.data,
        categoryData: categoryData.data,
      },
    });
  } catch (e) {
    dispatch({ type: actions.getOptionAsyncAction.failure, payload: e.message });
  }
};
