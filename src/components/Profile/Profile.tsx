import React from "react";
import Button from "../../common/Button/Button";
import "./profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <p>Dave</p>
      <Button className="logout-btn">Logout</Button>
    </div>
  );
};

export default Profile;
