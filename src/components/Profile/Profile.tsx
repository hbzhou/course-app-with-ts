import React from "react";
import Button from "../../common/Button/Button";

const Profile: React.FC = () => {
  return (
    <div className=" flex items-center justify-between w-40">
      <p className=" font-bold font-mono text-xl">Dave</p>
      <Button className=" border-purple-700  mr-4 w-20">Logout</Button>
    </div>
  );
};

export default Profile;
