
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../services/endpointRequests";

import toast from "react-hot-toast";


const useCreateUser = () => {
  return (
    useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            toast.success("New user created successfully")
        },
        onError: () => {
            toast.error("Error creating new user")
        }
    })
  )
}

export default useCreateUser