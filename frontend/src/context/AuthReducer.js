const AuthReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.error,
      };
  }
};

export default AuthReducer;