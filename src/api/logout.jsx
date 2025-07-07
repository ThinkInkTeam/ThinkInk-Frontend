import axios from "./axiosInstance";

export const logout = () => axios.post("/logout");
