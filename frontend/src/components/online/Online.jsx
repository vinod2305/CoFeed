import "./online.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [onlineFriends, setOnlineFriends] = useState([]);
  
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${user}`);
      setOnlineFriends(res.data);
    };
    fetchUser();
  }, [user]);

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={PF + onlineFriends.profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{onlineFriends.username}</span>
    </li>
  );
}
