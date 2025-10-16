import axios from "axios";



const API_BASE = import.meta.env.BASE_URL || "http://localhost:8080/api";

const axiosInstance = axios.create({
    baseURL: API_BASE,
});

axiosInstance.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token");

    if(token&& config.headers ){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;