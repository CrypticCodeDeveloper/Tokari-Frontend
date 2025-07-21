import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { useState } from "react";
import useDeleteProject from "../hooks/useDeleteProject";

const DeleteModal = ({
    buttonText="Delete",
    title="Delete",
    id
}) => {

      const {mutate, isPending} = useDeleteProject()
        const [deleteText, setDeleteText] = useState("")


  return (
    <Dialog>
          <DialogTrigger><Button variant="destructive">{buttonText}</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure you want to delete {title}?</DialogTitle>
              <DialogDescription>Type in "<span className="font-semibold">{title}</span>" to delete project forever.</DialogDescription>
            </DialogHeader>

            <Input onChange={(e) => setDeleteText(e.target.value)} />
            <Button 
            onClick={() => mutate(id)}
            disabled={deleteText !== title && !isPending}>Delete</Button>
          </DialogContent>
        </Dialog>
  )
}

export default DeleteModal