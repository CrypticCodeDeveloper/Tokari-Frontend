import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./ui/input";
import { useState } from "react";

import { Eye, EyeClosed } from "lucide-react";
import CodeSnippets from "./code-snippets";

import { Button } from "../components/ui/button";
import DeleteModal from "./delete-modal";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProjectById } from "../services/endpointRequests";

const ProjectDetailsModal = ({ trigger, title, desc,  id }) => {
  const { data: project } = useSuspenseQuery({
    queryKey: ["project-details", id],
    queryFn: getProjectById,
    select: (res) => res.project,
  });

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="min-w-[90%] lg:min-w-[70%] overflow-x-auto h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>

          <Tabs defaultValue="basic" className="w-full mt-4 rounded-none">
            <TabsList className="rounded-none px-6 space-x-4">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <BasicTabSection
                requests={project.requests}
                tokens_used={`${project.token_used}PAT`}
                cost_usage={`$${(project.monthly_cost).toFixed(2)}`}
                model={project.model}
                last_used={project.last_used}
                origin={project.origin}
                status={project.status}
              />
            </TabsContent>
            <TabsContent value="integration">
              <IntegrationTabSection project={project} />
            </TabsContent>
            <TabsContent value="settings">
              <SettingsTabSection 
              title={title}
              id={id}
               />
            </TabsContent>
          </Tabs>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const BasicTabSection = ({
  requests,
  tokens_used,
  cost_usage,
  model,
  last_used,
  origin,
  status
}) => {
  const stats = [
    {
      title: "Total API Calls",
      value: requests,
    },
    {
      title: "Token Used",
      value: tokens_used,
    },
    {
      title: "Total Cost Usage",
      value: cost_usage,
    },
    {
      title: "AI Model",
      value: model,
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div className="p-4 shadow-lg">
            <h2>{stat.title}</h2>
            <p className="mt-2 font-semibold text-xl">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 px-8">
        <div className="flex items-center justify-between text-lg">
          <p>Last used:</p>
          <p>{last_used ? new Date(last_used).toLocaleString() : "---"}</p>
        </div>

        <div className="flex items-center justify-between text-lg">
          <p>Origin:</p>
          <p>{origin}</p>
        </div>

        <div className="flex items-center justify-between text-lg">
          <p>Status:</p>
          <p
          className={`px-3 rounded-xl ${status === "active" ? "bg-green-600 text-white" : "bg-gray-400 text-black"}`}
          >{status}</p>
        </div>
      </div>
    </section>
  );
};

const IntegrationTabSection = ({ project }) => {
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col items-start">
        <p className="my-1">Copy Api key here</p>
        <div className="flex items-center gap-2">
          <Input
          className="w-full"
            disabled={!isApiKeyVisible}
            value={isApiKeyVisible ? project.api_key : "*************************"}
          />
          <div onClick={() => setIsApiKeyVisible((prevState) => !prevState)}>
            {isApiKeyVisible ? <Eye /> : <EyeClosed />}
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-scroll mt-6">
        <CodeSnippets project={project} />
      </div>
    </section>
  );
};

const SettingsTabSection = ({ title, id }) => {
  return (
    <section>
      <p className="my-2">Control and manage your project from here.</p>

      <div>
        <DeleteModal buttonText="Delete Project" title={title} id={id} />
      </div>
    </section>
  );
};

export default ProjectDetailsModal;
