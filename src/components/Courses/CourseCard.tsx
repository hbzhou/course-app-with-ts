import React from "react";
import Button from "../../common/Button/Button";

const CourseCard: React.FC = () => {
  return (
    <div className="flex m-4 border-solid border-2 border-green-500 min-h-max">
      <div className="grid">
        <h3>JavaScript</h3>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially u nchanged.
        </div>
      </div>
      <div className="grid min-w-max">
        <div>
          <label>Author:</label>
          <span>Vasiliy Dobkin</span>
        </div>
        <div>
          <label>Duration:</label>
          <span>08:00 hours</span>
        </div>
        <div>
          <label>Created:</label>
          <span>01.02.2018</span>
        </div>
        <div>
          <Button className=" border-solid border-2 border-purple-500">Show course</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
