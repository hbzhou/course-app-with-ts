import React from "react";
import Select from "react-select";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

const CreateCourse = () => {
  const authorOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
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
        <div>Authors</div>
        <Select
          isMulti
          name="authors"
          options={authorOptions}
          className="basic-multi-select w-80 border-amber-300 rounded-md "
          classNamePrefix="select"
        />
      </div>
      <div className="m-4">
        <div>Duration</div>
        <Input type="number" className="h-8 border-amber-300 rounded-md " />
      </div>
      <div className="m-4">
        <div>Description</div>
        <textarea rows={4} className="block p-2.5 w-full rounded-md border-solid border-2 border-amber-300"></textarea>
      </div>
    </main>
  );
};

export default CreateCourse;
