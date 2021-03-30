import * as toyApi from '@utils/toyApi';
import * as actions from './actions';

export const removeToyThunk = (param, setRemoveToggle) => async (dispatch) => {
  dispatch({ type: actions.removeToyAsyncAction.request }); // 요청이 시작됨
  try {
    const payload = await toyApi.deleteToyApi(param);
    alert('삭제 성공!');
    setRemoveToggle(false);
    dispatch({ type: actions.removeToyAsyncAction.success, payload: payload.data }); // 성공
  } catch (e) {
    alert(e);
    dispatch({ type: actions.removeToyAsyncAction.fail, payload: e.message }); // 실패
  }
};
