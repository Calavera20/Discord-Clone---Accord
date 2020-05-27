import { DISPLAY_FORM, HIDE_FORM } from "../Actions/types";

const displayServerCreation = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_FORM:
      return true;
    case HIDE_FORM:
      return false;
    default:
      return state;
  }
};

export default displayServerCreation;
