import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm, Controller } from "react-hook-form";
import useCreateProject from "../hooks/useCreateProject";

const CreateProjectForm = () => {

  const {mutate, isPending} = useCreateProject()


  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm();

  const onCreateProject = async (data) => {
    mutate(data)
    reset()
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="rounded-none">Create Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new AI project</DialogTitle>
          <DialogDescription>
            Please note that AI service will only be for the registered domain
            to this project.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-3" onSubmit={handleSubmit(onCreateProject)}>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="name">Name: </label>
            <Input
              id="name"
              placeholder="Song Writer AI"
              {...register("name", {
                required: "Input name of project",
              })}
            />
            <p className="text-red-700">{errors?.name?.message}</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="origin">Origin/Domain: </label>
            <Input
              id="origin"
              placeholder="https://jazz-master.io"
              {...register("origin", {
                required: "domain of project is mandatory",
              })}
            />
            <p className="text-red-700">{errors?.origin?.message}</p>
          </div>

          <div className="flex flex-col items-start gap-1">
            <label htmlFor="desc">Description: </label>
            <Textarea
              id="desc"
              placeholder="Write powerful jazz music with the power of AI"
              {...register("description", {
                required: "Briefly tell us what your project is about",
              })}
            />
            <p className="text-red-700">{errors?.description?.message}</p>
          </div>

          <div className="flex flex-col items-start gap-1">
            <label htmlFor="desc">Model: </label>
            <Controller
              name="model"
              defaultValue="gpt-3.5-turbo"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}
                  defaultValue="gpt-3.5-turbo"
                 value={field.value} >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
                    <SelectItem value="gemini">gemini</SelectItem>
                    <SelectItem value="llama">llama</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <p className="text-red-700">{errors?.model?.message}</p>
          </div>

          <div>
            <Button disabled={isPending}>Done</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectForm;
