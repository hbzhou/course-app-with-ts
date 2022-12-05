import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "../../common/Input/Input";
import { Course } from "../Courses/CourseCard";
const authorOptions = [
  {
    value: "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
    label: "Vasiliy Dobkin",
  },
  {
    value: "f762978b-61eb-4096-812b-ebde22838167",
    label: "Nicolas Kim",
  },
  {
    value: "df32994e-b23d-497c-9e4d-84e4dc02882f",
    label: "Anna Sidorenko",
  },
  {
    value: "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
    label: "Valentina Larina",
  },
];

const CreateCourse = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    // formState: { errors },
  } = useForm<Course>();
  const onSubmit: SubmitHandler<Course> = (data) => console.log(data);
  console.log(watch("title"));

  return (
    <main className="border-solid border-2 border-indigo-500 m-4">
      <div className=" text-center font-bold text-3xl m-2">Create Course</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center m-4">
          <div>
            <div>Title</div>
            <Input className="h-8 border-amber-300 rounded-md" {...register("title", { required: true })} />
          </div>
          <div>
            <input
              type="submit"
              className="mr-4 w-40 border-2 border-solid p-1  border-purple-700"
              value="Create Course"
            />
          </div>
        </div>
        <div className="m-4">
          <div>Duration</div>
          <Input
            type="number"
            className="h-8 border-amber-300 rounded-md"
            {...register("duration", { required: true })}
          />
        </div>
        <div className="m-4">
          <div>Authors</div>
          <Controller
            control={control}
            // defaultValue={authorOptions.map((c) => c.value)}
            name="authors"
            render={({ field: { onChange, value, ref } }) => (
              <Select
                ref={ref}
                value={authorOptions.filter((c) => value.includes(c.value))}
                onChange={(val) => onChange(val.map((c) => c.value))}
                options={authorOptions}
                isMulti
                className="border-2 border-solid border-amber-300 w-1/2"
              />
            )}
          />
        </div>
        <div className="m-4">
          <div>Description</div>
          <textarea
            rows={4}
            className="block p-2.5 w-full rounded-md border-solid border-2 border-amber-300"
            {...register("description", { required: true })}
          ></textarea>
        </div>
      </form>
    </main>
  );
};

export default CreateCourse;
