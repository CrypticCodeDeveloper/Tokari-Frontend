import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { Eye, EyeClosed, EllipsisVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ProjectDetailsModal from "./project-details-modal";


const ProjectCard = ({
  title,
  desc,
  apiKey,
  id,
}) => {
  const maxDescChars = 100;
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);

  return (
    <div className="w-[400px] max-sm:w-[300px] shadow-lg p-6 flex flex-col gap-3 rounded-none">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">{title}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical className="hover:cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Turn inactive</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p>
        {desc.length > maxDescChars
          ? `${desc.slice(0, maxDescChars)}...`
          : desc}
      </p>

      <div className="flex items-center gap-2">
        <Input
          disabled={!isApiKeyVisible}
          value={isApiKeyVisible ? apiKey : "*************************"}
        />
        <div onClick={() => setIsApiKeyVisible((prevState) => !prevState)}>
          {isApiKeyVisible ? <Eye /> : <EyeClosed />}
        </div>
      </div>

          <ProjectDetailsModal 
            trigger={<Button>View Details</Button>}
            title={title}
            desc={desc}
            id={id}
            apiKey={apiKey}
          />
    </div>
  );
};

export default ProjectCard;
