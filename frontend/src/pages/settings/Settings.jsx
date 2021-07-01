import "./settings.scss";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { settingsCall } from "../../apiCalls";
import { CircularProgress } from "@material-ui/core";

export default function Settings() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { isFetching, dispatch, user } = useContext(AuthContext);
  const username = useRef();
  const desc = useRef();
  const city = useRef();

  useEffect(() => {
    console.log(user);
    username.current.value = user?.username ?? "";
    desc.current.value = user?.desc ?? "";
    city.current.value = user?.city ?? "";
  }, [user]);

  const handleClick = (e) => {
    e.preventDefault();
    settingsCall(
      {
        userId: user._id,
        username: username.current.value,
        desc: desc.current.value,
        city: city.current.value,
      },
      dispatch
    );
  };

  return (
    <>
      <Topbar />
      <div className="settings">
        <Sidebar />
        <div className="settingsWrapper">
            <h1 className="settingHeading">Settings</h1>
        <form className="settingsBox" onSubmit={handleClick}>
          <label className="settingtext">
            Username<br></br>
            <input
              placeholder="Username"
              type="text"
              className="loginInput"
              ref={username}
            />
          </label>
          <label className="settingtext">
            Description<br></br>
            <input
              placeholder="Description"
              type="text"
              className="loginInput"
              ref={desc}
            />
          </label>
          <label className="settingtext">
            City<br></br>
            <input
              placeholder="City"
              type="text"
              className="loginInput"
              ref={city}
            />
          </label>
          <button className="settingButton" type="submit" disabled={isFetching}>
            {isFetching ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Update"
            )}
          </button>
        </form>
        </div>
      </div>
    </>
  );
}
