import { AppDispatch } from "@/store/store";
import { actions } from "./user.slice";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  successful: boolean;
  result: string;
  user: {
    name: string;
    email: string;
  };
}

const persistAuth = (dispatch: AppDispatch, authResponse: AuthResponse) => {
  if (authResponse.successful) {
    localStorage.setItem("token", authResponse.result);
    const user = authResponse.user;
    dispatch(
      actions.login({
        username: user.name,
        email: user.email,
        token: authResponse.result,
      })
    );
  }
};

export const login = (loginRequest: LoginRequest) => async (dispatch: AppDispatch) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginRequest),
  });
  const loginResponse: AuthResponse = await response.json();
  persistAuth(dispatch, loginResponse);
};

export const register = (registerRequest: RegisterRequest) => async (_dispatch: AppDispatch) => {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerRequest),
  });
  const registerResponse: AuthResponse = await response.json();
  if (!registerResponse.successful) {
    alert("Registration failed, please try again.");
  }
  return registerResponse;
};

export const logout =
  (token: string = "") =>
  async (dispatch: AppDispatch) => {
    const response = await fetch("/api/logout", {
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
