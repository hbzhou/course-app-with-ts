import React from "react";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <CreateCourse />
    </React.Fragment>
  );
};

export default App;
