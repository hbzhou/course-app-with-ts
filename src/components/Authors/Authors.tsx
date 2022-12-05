import { useState } from "react";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import { mockedAuthorsList as authors } from "../../constants";
import AddAuthor from "./AddAuthor";
import AuthorItem from "./AuthorItem";

const Authors = () => {
  const [modal, setModal] = useState<boolean>(false);
  const open = () => {
    console.log("open dialog");
  };
  return (
    <div className=" border-solid border-2 border-pink-400 m-4 flex justify-center">
      <div className="m-4 w-1/2">
        <div>
          <div className="flex justify-center my-8">
            <div className="block font-bold text-2xl ml-32">Authors</div>
            <Button className="ml-24 rounded-md border-purple-400" onClick={open}>
              Create author
            </Button>
          </div>
          {authors.map((author) => (
            <AuthorItem {...author} />
          ))}
        </div>
      </div>
      <Modal show={modal} handleClose={() => setModal(false)}>
        <AddAuthor />
      </Modal>
    </div>
  );
};

export default Authors;
