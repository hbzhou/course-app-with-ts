import { AppDispatch } from "../store";
import { actions } from "./author.slice";
import { Author } from "../../types/author";

interface QueryAllAuthorsResp {
  successful: boolean;
  result: Author[];
}

export const fetchAuthors = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch("/authors/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const queryAllAuthorsResp: QueryAllAuthorsResp = await response.json();
  if (queryAllAuthorsResp.successful) {
    dispatch(actions.setAuthors(queryAllAuthorsResp.result));
  }
};
