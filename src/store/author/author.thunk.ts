import { actions } from "./author.slice";

interface QueryAllAuthorsResp {
  successful: boolean;
  result: Author[];
}

export const fetchAuthors = () => async (dispatch: any) => {
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
