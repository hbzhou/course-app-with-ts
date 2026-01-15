import { AppDispatch } from "@/store/store";
import { actions } from "./author.slice";
import { Author } from "@/types/author";

interface QueryAllAuthorsResp {
  successful: boolean;
  result: Author[];
}

interface CreateAuthorResp {
  successful: boolean;
  result?: Author;
  error?: string;
}

export const fetchAuthors = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch("/api/authors/all", {
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

export const createAuthor = (name: string) => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch("/api/authors/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ name }),
  });
  const createAuthorResp: CreateAuthorResp = await response.json();
  if (createAuthorResp.successful && createAuthorResp.result) {
    dispatch(actions.addAuthor(createAuthorResp.result));
    return createAuthorResp.result;
  }
  throw new Error(createAuthorResp.error || "Failed to create author");
};
