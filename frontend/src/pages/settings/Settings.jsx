import "./settings.scss";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { settingsCall } from "../../apiCalls";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { Avatar, CircularProgress, IconButton } from "@material-ui/core";
import axios from "axios";

export default function Settings() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { isFetching, dispatch, user } = useContext(AuthContext);
  const username = useRef();
  const desc = useRef();
  const city = useRef();
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log(user);
    username.current.value = user?.username ?? "";
    desc.current.value = user?.desc ?? "";
    city.current.value = user?.city ?? "";
  }, [user]);

  const handleClick = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      username: username.current.value,
      desc: desc.current.value,
      city: city.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.profilePicture = fileName;
      console.log(data);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await settingsCall(newPost, dispatch);
    } catch (err) {}
  };

  return (
    <>
      <Topbar />
      <div className="settings">
        <Sidebar />
        <div className="settingsWrapper">
          <h1 className="settingHeading">Settings</h1>
          <form className="settingsBox" onSubmit={handleClick}>
            <label htmlFor="file" className="cameraicon">
              <Avatar
                src={
                  file
                    ? URL.createObjectURL(file)
                    : user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                style={{
                  margin: "10px",
                  width: "140px",
                  height: "140px",
                }}
                className="avatarsetting"
              />

              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

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

            <button
              className="settingButton"
              type="submit"
              disabled={isFetching}
            >
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
