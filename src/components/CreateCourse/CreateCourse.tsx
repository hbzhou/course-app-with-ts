import React from "react";
import Select from "react-select";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

const CreateCourse = () => {
  const authorOptions = [
    {
      value: "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
      label: "Vasiliy Dobkin",
    },
    {
      value: "f762978b-61eb-4096-812b-ebde22838167",
      label: "Nicolas Kim",
    },
    {
      value: "df32994e-b23d-497c-9e4d-84e4dc02882f",
      label: "Anna Sidorenko",
    },
    {
      value: "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
      label: "Valentina Larina",
    },
  ];
  return (
    <main className="border-solid border-2 border-indigo-500 m-4">
      <div className="flex justify-between items-center m-4">
        <div>
          <div>Title</div>
          <Input className="h-8 border-amber-300 rounded-md " />
        </div>
        <div>
          <Button className="mr-4 w-40 border-purple-700 ">Create course</Button>
        </div>
      </div>
      <div className="m-4">
        <div>Duration</div>
        <Input type="number" className="h-8 border-amber-300 rounded-md " />
      </div>
      <div className="m-4">
        <div>Authors</div>
        <Select
          isMulti
          name="authors"
          placeholder="Select authors ..."
          options={authorOptions}
          className="basic-multi-select w-80 border-solid border-2 border-amber-300 rounded-md "
          classNamePrefix="select"
        />
      </div>
      <div className="m-4">
        <div>Description</div>
        <textarea rows={4} className="block p-2.5 w-full rounded-md border-solid border-2 border-amber-300"></textarea>
      </div>
    </main>
  );
};

export default CreateCourse;
