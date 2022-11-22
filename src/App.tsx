import React from "react";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Courses />
    </React.Fragment>
  );
};

export default App;
