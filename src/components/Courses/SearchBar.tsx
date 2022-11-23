import React, { createRef } from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

interface Props {
  handleSearch: (keyword: string) => void;
}

const SearchBar: React.FC<Props> = ({ handleSearch }) => {
  const inputRef = createRef<HTMLInputElement>();
  const search = () => {
    handleSearch(inputRef.current?.value ?? "");
  };
  return (
    <div className="flex">
      <Input
        ref={inputRef}
        placeholder="Enter Course Name"
        className=" border-solid border-2 border-orange-200 h-10 w-80 p-1"
      />
      <Button className="border-solid border-2 border-purple-500 p-1 mx-4 w-40 max-h-10" onClick={search}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
