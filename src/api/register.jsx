import axios from "./axiosInstance";

export const register = (email, password, name, date, address) => {
  return axios.post("/signup", {
    email,
    password,
    name,
    date_of_birth: date,
    address,
  });
};
