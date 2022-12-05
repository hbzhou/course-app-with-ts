import React from "react";
import Authors from "./components/Authors/Authors";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      {/* <Courses /> */}
      {/* <CreateCourse /> */}
      <Authors />
    </React.Fragment>
  );
};

export default App;
