import axios from "./axiosInstance";

export const login = (email, password) =>
  axios.post("/signin", {
    email,
    password,
  });

export const logout = () => {
  localStorage.removeItem("authToken");
};
