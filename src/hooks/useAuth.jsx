
import { useContext } from "react";
import { AuthContext } from "../contexts/auth-provider";

const useAuth = () => {

    const data = useContext(AuthContext)

  return data
}

export default useAuth