import * as api from '@utils/api';
import { useHistory } from 'react-router-dom';
import * as actions from './actions';

export const removeToyThunk = (param, setRemoveToggle) => async (dispatch) => {
  dispatch({ type: actions.REMOVE_TOY }); // 요청이 시작됨
  try {
    const payload = await api.deleteToyApi(param);
    alert('삭제 성공!');
    setRemoveToggle(false);
    dispatch({ type: actions.REMOVE_TOY_SUCCESS, payload: payload.data }); // 성공
  } catch (e) {
    alert(e);
    dispatch({ type: actions.REMOVE_TOY_FAIL, payload: e.message }); // 실패
  }
};
