import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authors from "./components/Authors/Authors";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
const course = {
  title: "title",
  description: "description",
  creationDate: "9/3/2021",
  duration: 30,
  authors: ["9b87e8b8-6ba5-40fc-a439-c4e30a373d36"],
  id: "66cc289e-6de9-49b2-9ca7-8b4f409d6467",
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseInfo {...course} />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
