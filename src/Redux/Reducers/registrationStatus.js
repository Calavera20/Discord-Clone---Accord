const registStatusReducer = (state = 0, action) => {
  switch (action.type) {
    case "REGISTRATION_SUCCESS":
      return 1;
    case "REGISTRATION_FAILURE":
      return -1;
    case "REGISTRATION_IN_PROGRESS":
      return 0;
    default:
      return state;
  }
};

export default registStatusReducer;
