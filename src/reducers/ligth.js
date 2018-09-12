import { LIGTH_TOOGLE } from 'actions/actionTypes';

const initialState = {
  enabled: true,
};

const reducer = (state = initialState, action) => {
  const cloneState = Object.assign({}, state);
  console.log(action);
  switch (action.type) {
  case LIGTH_TOOGLE:
    cloneState.enabled = !cloneState.enabled;
    return cloneState;
  default:
    return state;
  }
};

export default reducer;
