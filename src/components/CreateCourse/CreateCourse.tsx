import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Button } from "@/common/Button/Button";
import { Input } from "@/common/Input/Input";
import { Label } from "@/common/Label/Label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, selectAuthors } from "@/store/store";
import { createCourse } from "@/store/course/course.thunk";
import { Course } from "@/types/course";
import { Author } from "@/types/author";

const CreateCourse: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Course>();
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigate();
  const onSubmit: SubmitHandler<Course> = (data) => {
    dispatch(createCourse(data));
    navigator("/courses");
  };
  const authorOptions = useSelector(selectAuthors).map((author: Author) => {
    return { value: author.id, label: author.name };
  });

  return (
    <main className="container mx-auto p-6 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Create New Course</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                placeholder="Enter course title"
                {...register("title", { required: true })}
              />
              {errors.title && <span className="text-sm text-destructive">This field is required</span>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (hours)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="Enter duration in hours"
                {...register("duration", { required: true, valueAsNumber: true })}
              />
              {errors.duration && <span className="text-sm text-destructive">This field is required</span>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="authors">Authors</Label>
              <Controller
                control={control}
                defaultValue={[]}
                name="authors"
                rules={{ required: true }}
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    ref={ref}
                    value={authorOptions.filter((c: { value: string; label: string }) => value.includes(c.value))}
                    onChange={(val) => onChange(val.map((c: { value: string; label: string }) => c.value))}
                    options={authorOptions}
                    isMulti
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                )}
              />
              {errors.authors && <span className="text-sm text-destructive">Please select at least one author</span>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows={6}
                placeholder="Enter course description"
                {...register("description", { required: true })}
              />
              {errors.description && <span className="text-sm text-destructive">This field is required</span>}
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigator("/courses")}
              >
                Cancel
              </Button>
              <Button type="submit">
                Create Course
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default CreateCourse;
