import { SET_ERRORS } from "Apis/Actions/types";

const initialState = {};

const setErrors = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;

    default:
      return state;
  }
};

export default setErrors;
