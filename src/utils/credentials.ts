import axios from "axios";
//const baseURL = process.env.REACT_APP_DJANGO_BACKEND_ANYWHERE;
const baseURL = process.env.REACT_APP_DJANGO_BACKEND;

// const accessToken = localStorage.getItem("access_token");
let pre_Token = localStorage.getItem("token");
let token = pre_Token ? JSON.parse(pre_Token) : null;

// process.env.REACT_APP_DJANGO_URL,
export const axiosAPI = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: token ? "Token " + token : null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const axiosAPI2 = (token: string) => {
  return axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
// set token on user login
export const setToken = (data: any) => {
  localStorage.setItem("token", JSON.stringify(data.key));
};
