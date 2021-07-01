import "./rightbar.scss";
import Online from "../online/Online";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";
import { io } from "socket.io-client";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  }, []);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [user, currentUser]);

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

  useEffect(() => {
    socket.current.emit("addUser", currentUser._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        currentUser.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [currentUser]);

  useEffect(() => {
    const getSuggestion = async () => {
      try {
        const suggestionList = await axios.get(
          "/users/suggestions/" + currentUser._id
        );
        setSuggestions(suggestionList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSuggestion();
  }, [currentUser]);

  const handleClick = async (user, option) => {
    console.log("handle");
    try {
      if (option === "suggestion") {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      } else {
        if (followed) {
          await axios.put(`/users/${user._id}/unfollow`, {
            userId: currentUser._id,
          });
          dispatch({ type: "UNFOLLOW", payload: user._id });
        } else {
          await axios.put(`/users/${user._id}/follow`, {
            userId: currentUser._id,
          });
          dispatch({ type: "FOLLOW", payload: user._id });
        }
        setFollowed(!followed);
      }
    } catch (err) {}
  };

  const HomeRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Suggestions For You</h4>
        <div className="birthdayContainer">
          {suggestions.map((u) => (
            <div className="suggestion">
              <Link
                to={"/profile/" + u.username}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div class="suggestionimage">
                  <img
                    className="rightbarProfileImg"
                    src={PF + u.profilePicture}
                    alt=""
                  />
                  <div className="name">{u.username}</div>
                </div>
              </Link>

              <button
                className="suggestionFollowButton"
                onClick={() => handleClick(u, "suggestion")}
              >
                Follow
                <Add />
              </button>
            </div>
          ))}
        </div>

        <hr className="sidebarHr" />

        <h4 className="rightbarTitle">Online Friends</h4>
        <Link
          to={"/messenger"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ul className="rightbarFriendList">
            {onlineUsers.map((u) => (
              <Online key={u} user={u} />
            ))}
          </ul>
        </Link>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button
            className="rightbarFollowButton"
            onClick={() => handleClick(user, "profile")}
          >
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          {/* <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div> */}
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Following:</span>
            <span className="rightbarInfoValue">{user?.followings?.length}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Followers:</span>
            <span className="rightbarInfoValue">{user?.followers?.length}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
