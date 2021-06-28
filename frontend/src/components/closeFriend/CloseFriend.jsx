import "./closeFriend.scss";
import { Link } from "react-router-dom";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Link to={"/profile/" + user.username} style={{ textDecoration: "none", color: "black" }}>
      {" "}
      <li className="sidebarFriend">
        <img
          className="sidebarFriendImg"
          src={PF + user.profilePicture}
          alt=""
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </Link>
  );
}
