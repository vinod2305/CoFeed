const AuthReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
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
      case "UPDATE_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "UPDATE_SUCCESS":
        console.log(action.payload)
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "UPDATE_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: action.error,
        };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
