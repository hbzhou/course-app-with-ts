import React from "react";
import Button from "../../common/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, selectCurrentUser } from "../../store/store";
import { logout } from "../../store/user/user.thunk";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleOnClick = () => {
    dispatch(logout(currentUser.token));
    navigate("/login");
  };
  if (!currentUser.token) return <span />;
  return (
    <div className='flex items-center justify-end w-80'>
      <div className='font-bold font-mono text-xl mr-4'>{currentUser.username}</div>
      <Button className=' border-purple-700  mr-4 w-40' onClick={handleOnClick}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
