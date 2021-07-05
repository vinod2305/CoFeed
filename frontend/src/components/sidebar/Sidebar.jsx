import "./sidebar.scss";
import { Chat, Person } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import CloseFriend from "../closeFriend/CloseFriend";
import axios from "axios";
import { Settings } from "@material-ui/icons";

export default function Sidebar() {
  const [friends, setFriends] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h4 className="rightbarTitle">MENU</h4>
        <ul className="sidebarList">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="sidebarListItem">
              <HomeIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Home</span>
            </li>
          </Link>

          <Link
            onClick={() =>
              (window.location.href = "http://localhost:3000/messenger")
            }
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
          </Link>

          <Link
            to={`/profile/${user.username}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <span className="sidebarListItemText">Profile</span>
            </li>
          </Link>
          <Link
            to={`/settings`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              <span className="sidebarListItemText">Settings</span>
            </li>
          </Link>
        </ul>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {friends.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
