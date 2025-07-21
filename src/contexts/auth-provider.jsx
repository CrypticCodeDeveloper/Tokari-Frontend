
import {createContext, useState, useEffect} from "react"
import {jwtDecode} from "jwt-decode"

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            setToken(token)
            setUser(jwtDecode(token))
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            token,
            user,
            setUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider