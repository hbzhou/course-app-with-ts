import React from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

const SearchBar: React.FC = () => {
  return (
    <div className="flex">
      <Input placeholder="Enter Course Name" className=" border-solid border-2 border-orange-200 h-10 w-60 p-1" />
      <Button className="border-solid border-2 border-purple-500 p-1 mx-4 w-40 max-h-10">Search</Button>
    </div>
  );
};

export default SearchBar;
