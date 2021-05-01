export const createPromiseThunk = (asyncType, promiseCreator) => (param) => async (dispatch) => {
  dispatch({ type: asyncType.request, payload: param });
  try {
    const payload = await promiseCreator(param);
    dispatch({ type: asyncType.success, payload: payload.data }); // 성공
  } catch (e) {
    dispatch({ type: asyncType.failure, payload: e.message }); // 실패
  }
};

export const getAsyncState = {
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    success: null,
    error: null,
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    success: true,
    error: null,
  }),
  fail: (errorLog, prevState = null) => ({
    loading: false,
    data: prevState,
    success: null,
    error: errorLog,
  }),
};

export const createAsyncAction = (actionType) => ({
  request: `${actionType}/REQUEST`,
  success: `${actionType}/SUCCESS`,
  failure: `${actionType}/FAILURE`,
});
