import axios from "axios";

const baseURL =import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL,
  withCredentials: true,
});

const getAccessToken = () => localStorage.getItem("token");
const storeToken = (token) => localStorage.setItem("token", token);

// request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    const originalRequest = error.config;

    if (error.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          `${baseURL}/api/v1/auth/token/refresh`,
          {},
          {
            withCredentials: true,
          }
        );

        const newToken = response.data.accessToken;
        storeToken(newToken);
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (error) {
        console.log("Error: ", error)
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
  }
);

export default api;
