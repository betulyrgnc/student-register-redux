import { UPDATE_REQUEST_SUCCES, UPDATE_REQUEST } from '../actions/types';

const INITIAL_STATE = {
  loadingUpdate: false
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case UPDATE_REQUEST:
      return { loadingUpdate: true };
      case UPDATE_REQUEST_SUCCES:
      return INITIAL_STATE;
     default:
      return state;
   }
};
