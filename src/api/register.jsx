import axios from "./axiosInstance";

export const register = (email, password) => {
  return axios.post("/signup", {
    email,
    password,
    date_of_birth: "1996-01-21T00:00:00Z",
    name: "yousef fathy",
  });
};
