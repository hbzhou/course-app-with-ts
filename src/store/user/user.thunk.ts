import { AppDispatch } from "../store";
import { actions } from "./user.slice";

export interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  successful: boolean;
  result: string;
  user: {
    name: string;
    email: string;
  };
}

export const login = (loginRequest: LoginRequest) => async (dispatch: AppDispatch) => {
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginRequest),
  });
  const loginResponse: LoginResponse = await response.json();
  if (loginResponse.successful) {
    localStorage.setItem("token", loginResponse.result);
    const user = loginResponse.user;
    dispatch(
      actions.login({
        username: user.name,
        email: user.email,
        token: loginResponse.result,
      })
    );
  }
};

export const logout =
  (token: string = "") =>
  async (dispatch: AppDispatch) => {
    const response = await fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (!response.ok) {
      const result = await response.json();
      alert(result.message);
    } else {
      dispatch(actions.logout());
    }
  };
