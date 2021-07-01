import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auth/login", userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const settingsCall = async (data, dispatch) => {
  dispatch({ type: "UPDATE_START" });
  console.log(data)
  try {
    const res = await axios.put(`users/${data.userId}`, data);
    console.log(res);
    dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "UPDATE_FAILURE", payload: err });
  }
};