import * as toyApi from '@utils/toyApi';
import * as actions from './actions';

export const removeToyThunk = (param, setModalToggle) => async (dispatch) => {
  dispatch({ type: actions.removeToyAsyncAction.request }); // 요청이 시작됨
  try {
    const payload = await toyApi.deleteToyApi(param);
    alert('토이 삭제 성공!');
    setModalToggle(false);
    dispatch({ type: actions.removeToyAsyncAction.success, payload: payload.data }); // 성공
  } catch (e) {
    alert(e);
    dispatch({ type: actions.removeToyAsyncAction.fail, payload: e.message }); // 실패
  }
};
