import * as actions from './actions';

const initialState = {
  isDragReady: false,
};

const dragToy = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE_DRAG:
      return initialState;
    case actions.TOGGLE_DRAG:
      return {
        isDragReady: !state.isDragReady,
      };
    default:
      return state;
  }
};

export default dragToy;
