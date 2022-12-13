import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authors from "./components/Authors/Authors";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseInfo />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
