import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [
        "60d554248f43983a144164e0",
        "60d554378f43983a144164e2",
        "60d554408f43983a144164e4"
    ],
    isAdmin: false,
    _id: "60d554188f43983a144164de",
    username: "Vinod",
    email: "vinod@gmail.com",
},
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
