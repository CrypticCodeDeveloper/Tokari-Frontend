
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProject } from "../services/endpointRequests"
import toast from "react-hot-toast"

const useCreateProject = () => {

    const queryClient = useQueryClient()

  return (
    
    useMutation({
        mutationFn: createProject,
        onSuccess: () => {
            queryClient.invalidateQueries(["all-projects"])
            toast.success("Project create successfully!")
        },
        onError: () => {
            toast.error("Error creating project, try again.")
        }
    })

  )
}

export default useCreateProject