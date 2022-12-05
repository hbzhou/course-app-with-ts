import { useState } from "react";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import { mockedAuthorsList as authors } from "../../constants";
import AddAuthor from "./AddAuthor";
import AuthorItem from "./AuthorItem";

const Authors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
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
        <Modal
          title="Add Author"
          children={<AddAuthor />}
          handleClose={() => setShowModal(false)}
          handleSave={() => setShowModal(false)}
        />
      ) : null}
    </div>
  );
};

export default Authors;
