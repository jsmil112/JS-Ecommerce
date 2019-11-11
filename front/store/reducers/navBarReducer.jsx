import { CHECK_IS_HOME } from '../constants/index';

const initialState = {
  home: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IS_HOME:
      return Object.assign({}, state, { home: action.home });

    default:
      return state;
  }
};
