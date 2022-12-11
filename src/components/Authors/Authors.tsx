import { useEffect, useState } from "react";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import AddAuthor from "./AddAuthor";
import AuthorItem, { Author } from "./AuthorItem";

interface QueryAllAuthorsResp {
  successful: boolean;
  result: Author[];
}

const Authors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [authors, setAuthors] = useState<Author[]>([]);

  const getAuthorList = async () => {
    const token = localStorage.getItem("token") ?? "";
    const fetchResp = await fetch("/authors/all", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const jsonResp: QueryAllAuthorsResp = await fetchResp.json();
    if (jsonResp.successful) {
      setAuthors(jsonResp.result);
    }
  };

  useEffect(() => {
    getAuthorList();
  }, []);

  return (
    <div className=" border-solid border-2 border-pink-400 m-4 flex justify-center">
      <div className="m-4 w-1/2">
        <div>
          <div className="flex justify-center my-8">
            <div className="block font-bold text-2xl ml-32">Authors</div>
            <Button className="ml-24 rounded-md border-purple-400" onClick={() => setShowModal(true)}>
              Create author
            </Button>
          </div>
          {authors.map((author) => (
            <AuthorItem key={author.id} {...author} />
          ))}
        </div>
      </div>
      {showModal ? (
        <Modal title="Add Author" children={<AddAuthor />} handleClose={() => setShowModal(false)} handleSave={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default Authors;
