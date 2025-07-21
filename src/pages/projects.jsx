import CreateProjectForm from "../components/create-project-form";
import ProjectCard from "../components/project-card";
import { Input } from "../components/ui/input";
import DotCard from "../components/mvpblocks/dot-card";


import { useSuspenseQuery } from "@tanstack/react-query";
import { getProjects } from "../services/endpointRequests";

const Projects = () => {

  const {data: projects} = useSuspenseQuery({
    queryKey: ["all-projects"],
    queryFn: getProjects,
    select: (res) => res.projects
  })

  return (
    <section className="w-full flex flex-col">
      <h1 className="font-semibold text-2xl mb-2">Projects</h1>
      <div className="w-full flex justify-between items-start md:items-center gap-6 max-md:flex-col">
        <h2 className="text-lg">
          Create a new project to start integrating AI into your applications.
        </h2>
        <CreateProjectForm />
      </div>

      <div className="my-5 flex gap-4 max-[1122px]:flex-col">

        <div
            className="w-full shadow-xl border border-black p-8 py-10
                 flex flex-col gap-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-none"
          >
            <h2>Total Projects</h2>
            <p className="text-2xl font-bold">{projects.length}</p>
          </div>

          <div
            className="w-full shadow-xl border border-black p-8 py-10
                 flex flex-col gap-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-none"
          >
            <h2>Active Projects</h2>
            <p className="text-2xl font-bold">{projects.filter((project) => project.status === "active").length}</p>
          </div>


      </div>

      <Input placeholder="Search for projects ... " className="max-w-[300px]" />

      <div className="mt-6 grid grid-cols-3 max-[1550px]:grid-cols-2 max-[1122px]:grid-cols-1 gap-4">
        {projects.length > 0 ? (
          projects.map((project) => (
          <ProjectCard
            title={project.name}
            desc={project.description}
            apiKey={project.api_key}
            id={project._id}
            key={project._id}
          />
        ))
        ) : <div>
          <h2 className="text-lg">No projects found.</h2>
          <p className="text-sm text-gray-600">Create a new project to get started.</p>
          <img src="/void.svg" alt="No projects found" className="w-52 h-52 mx-auto mt-10" />
          </div>}
      </div>
    </section>
  );
};

export default Projects;
