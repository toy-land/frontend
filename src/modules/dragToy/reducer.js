import * as actions from './actions';

const initialState = {
  dragStatus: false,
};

const dragToy = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE_DRAG:
      return initialState;
    case actions.TOGGLE_DRAG:
      return {
        dragStatus: !state.dragStatus,
      };
    default:
      return state;
  }
};

export default dragToy;
