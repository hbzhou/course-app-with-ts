import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import Label from "../../common/Label/Label";
import Title from "../../common/Title/Title";

interface LoginRequest {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();
  const onSubmit = (request: LoginRequest) => {
    console.log(request);
  };
  return (
    <div className="border-2 border-solid border-blue-400 flex justify-center m-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>
        <div className="my-2">
          <Label>Email</Label>
          <div>
            <Input className=" border-amber-300" placeholder="Enter email" {...register("email", { required: true })} />
            {errors.email && <span className=" text-red-500">Required</span>}
          </div>
        </div>
        <div className="my-2">
          <Label>Password</Label>
          <div>
            <Input
              className=" border-amber-300"
              type="password"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            {errors.password && <span className=" text-red-500">Required</span>}
          </div>
          <div className="my-4 text-center">
            <Button className="border-purple-500 w-36 h-10 rounded-md"> Login </Button>
          </div>
          <div>
            If you don't have an account you can {""}
            <Link className=" text-blue-500" to="/register">
              register
            </Link>
            {""} here
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
