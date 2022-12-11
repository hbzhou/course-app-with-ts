import React from "react";
import Button from "../../common/Button/Button";

export interface Author {
  id: string;
  name: string;
}

const AuthorItem: React.FC<Author> = ({ name }) => {
  return (
    <div className="flex items-center my-4 justify-center">
      <div className="text-2xl w-1/3">{name}</div>
      <Button className=" border-purple-400 w-20 mx-2 rounded-md">Edit</Button>
      <Button className=" border-purple-400 w-20 mx-2 rounded-md">Remove</Button>
    </div>
  );
};

export default AuthorItem;
