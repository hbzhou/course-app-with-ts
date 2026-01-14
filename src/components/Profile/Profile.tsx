import React from "react";
import { Button } from "@/common/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, selectCurrentUser } from "@/store/store";
import { logout } from "@/store/user/user.thunk";
import { useNavigate } from "react-router-dom";
import { UserSliceState } from "@/store/user/user.slice";
import { LogOut, User } from "lucide-react";

const Profile: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser) as UserSliceState;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (currentUser.token) {
      dispatch(logout(currentUser.token));
      navigate("/login");
    }
  };
  if (!currentUser.token) return <span />;
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">{currentUser.username}</span>
      </div>
      <Button variant="outline" onClick={handleOnClick}>
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </div>
  );
};

export default Profile;
