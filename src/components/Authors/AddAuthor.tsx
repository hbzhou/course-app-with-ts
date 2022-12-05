import React from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

const AddAuthor = () => {
  return (
    <div className="m-4  ">
      <h1 className="text-center text-2xl font-bold my-2">Add author</h1>
      <div>
        <div>Author name</div>
        <Input className=" border-amber-300 p-2 my-2 rounded-md w-96" placeholder="Enter author name" />
        <div>
          <Button className=" border-purple-300 rounded-md w-36 my-2">Create author</Button>
        </div>
      </div>
    </div>
  );
};

export default AddAuthor;
