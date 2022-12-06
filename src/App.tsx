import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
      </Routes>
      <CreateCourse />
    </BrowserRouter>
  );
};

export default App;
