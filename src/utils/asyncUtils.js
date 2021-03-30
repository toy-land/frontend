export const createPromiseThunk = (type, promiseCreator) => {
  const [successType, failType] = [`${type}/SUCCESS`, `${type}/FAIL`];

  // return thunk
  return (param) => async (dispatch) => {
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: successType, payload: payload.data }); // 성공
    } catch (e) {
      dispatch({ type: failType, payload: e.message }); // 실패
    }
  };
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
  index: `${actionType}`,
  request: `${actionType}/REQUEST`,
  success: `${actionType}/SUCCESS`,
  failure: `${actionType}/FAILURE`,
});
