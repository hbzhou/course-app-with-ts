import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import Label from "../../common/Label/Label";
import Title from "../../common/Title/Title";

interface User {
  name: string;
  email: string;
  password: string;
}

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (user: User) => {
    console.log(user);
  };

  return (
    <div className="m-4 border-2 border-blue-600 border-solid flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Registration</Title>
        <div className="my-2">
          <Label>Name</Label>
          <Input placeholder="Enter name" className=" border-amber-300 " {...register("name", { required: true })} />
          {errors.name && <div className=" text-red-500">Required</div>}
        </div>
        <div className="my-2">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email" className=" border-amber-300" {...register("email", { required: true })} />
          {errors.email && <div className=" text-red-500">Required</div>}
        </div>
        <div className="my-2">
          <Label>Password</Label>
          <Input type="password" placeholder="Enter password" className=" border-amber-300" {...register("password", { required: true })} />
          {errors.password && <div className=" text-red-500">Required</div>}
        </div>
        <div className="my-2 text-center">
          <Button className=" border-purple-500 w-36 rounded-md">Registration</Button>
        </div>
        <div>
          if you have an account you can {""}
          <Link to="/login" className=" text-blue-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
