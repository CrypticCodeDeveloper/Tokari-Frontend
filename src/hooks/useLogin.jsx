
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/endpointRequests";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

import { jwtDecode } from "jwt-decode";

const useLogin = () => {

    const navigate = useNavigate()
    const { setUser } = useAuth()

  return (
    useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            const token = data.accessToken
            localStorage.setItem("token", token)
            setUser(jwtDecode(token))
            navigate("/dashboard")
        },
        onError: () => {
            toast.error(`Could not sign in, check credentials and try again.`)
        }
    })
  )
}

export default useLogin