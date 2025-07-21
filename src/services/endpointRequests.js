import api from "./api";


export const createProject = async (data) => {
    const response = await api.post("/api/v1/projects", data)
    return response.data
}

export const getProjects = async () => {
    const response = await api.get("/api/v1/projects")
    return response.data
}

export const getProjectById = async ({queryKey}) => {
    const id = queryKey[1]
    const response = await api.get(`/api/v1/projects/${id}`)
    return response.data
}

export const deleteProject = async (id) => {
    await api.delete(`/api/v1/projects/${id}`)
}

export const getGeneralStats = async () => {
    const response = await api.get('/api/v1/projects/general-stats')
    return response.data
}

export const createUser = async (userInfo) => {
    const response = await api.post("/api/v1/auth/sign-up", userInfo)
    return response.data
}

export const loginUser = async (userInfo) => {
    const response = await api.post("/api/v1/auth/sign-in", userInfo, {
        withCredentials: true,
    })
    return response.data
}