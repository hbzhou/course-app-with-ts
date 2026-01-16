import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/store";
import { UserSliceState } from "@/store/user/user.slice";

type ProtectedRouteProps = {
  children: React.ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser) as UserSliceState;

  // Token is the app's auth signal today.
  if (!currentUser?.token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;

