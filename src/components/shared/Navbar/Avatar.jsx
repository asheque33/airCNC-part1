import React from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";

const Avatar = () => {
  let user = "Ashequr Rahman";
  return (
    <img
      className="rounded-full"
      src={user && user.photoURL ? user.photoURL : avatarImg}
      alt="profile"
      height="30"
      width="30"
    />
  );
};

export default Avatar;
