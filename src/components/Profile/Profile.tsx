import React from "react";
import Button from "../../common/Button/Button";

const Profile: React.FC = () => {
  return (
    <div className="flex items-center justify-end w-80">
      <div className="font-bold font-mono text-xl mr-4">Dave</div>
      <Button className=" border-purple-700  mr-4 w-40">Logout</Button>
    </div>
  );
};

export default Profile;
