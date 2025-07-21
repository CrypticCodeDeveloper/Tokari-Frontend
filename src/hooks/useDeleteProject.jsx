
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteProject } from "../services/endpointRequests"
import toast from "react-hot-toast"

const useDeleteProject = () => {

    const queryClient = useQueryClient()

  return (
    useMutation({
        mutationFn: deleteProject,
        onSuccess: () => {
            queryClient.invalidateQueries(["all-projects"])
            toast.success("Project deleted successfully")
        },
        onError: (error) => {
            toast.error("Error deleting project: ", error.response.data.error)
        }
    })
  )
}

export default useDeleteProject