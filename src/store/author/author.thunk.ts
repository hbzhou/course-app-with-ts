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

interface UpdateAuthorResp {
  successful: boolean;
  result?: Author;
  error?: string;
}

interface DeleteAuthorResp {
  successful: boolean;
  result?: string;
  error?: string;
}

export const fetchAuthors = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch("/api/authors/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
      Authorization: `Bearer ${token}`,
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

export const updateAuthor = (author: Author) => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch(`/api/authors/${author.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: author.name }),
  });
  const updateAuthorResp: UpdateAuthorResp = await response.json();
  if (updateAuthorResp.successful && updateAuthorResp.result) {
    dispatch(actions.updateAuthor(updateAuthorResp.result));
    return updateAuthorResp.result;
  }
  throw new Error(updateAuthorResp.error || "Failed to update author");
};

export const deleteAuthor = (authorId: string) => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch(`/api/authors/${authorId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const deleteAuthorResp: DeleteAuthorResp = await response.json();
  if (deleteAuthorResp.successful) {
    dispatch(actions.removeAuthor(authorId));
    return authorId;
  }
  throw new Error(deleteAuthorResp.error || "Failed to delete author");
};
