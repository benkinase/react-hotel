import axios from "axios";
export const API_URL_LOCAL = process.env.REACT_APP_DJANGO_BACKEND;
export const API_URL_LIVE = process.env.REACT_APP_DJANGO_BACKEND_ANYWHERE;

// GET TOKEN FROM LOCAL STORAGE
let pre_Token = localStorage.getItem("token");
let token = pre_Token ? JSON.parse(pre_Token) : null;

// AXIOS INSTANCE
export const axiosAPI = axios.create({
  baseURL: API_URL_LIVE,
  timeout: 5000,
  headers: {
    Authorization: token ? "Token " + token : "",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const axiosAPI2 = (token: string) => {
  return axios.create({
    baseURL: API_URL_LIVE,
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
  localStorage.setItem("token", JSON.stringify(data.auth_token));
};
