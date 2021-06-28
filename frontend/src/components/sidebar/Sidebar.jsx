import "./sidebar.scss";
import { Chat, Person } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import CloseFriend from "../closeFriend/CloseFriend";
import axios from "axios";

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
        <ul className="sidebarList">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="sidebarListItem">
              <HomeIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Home</span>
            </li>
          </Link>

          <Link
            to="/messenger"
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
