import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authors from "./components/Authors/Authors";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/createCourse" element={<CreateCourse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
