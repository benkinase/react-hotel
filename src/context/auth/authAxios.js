import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api/"; // process.env.API_URL;
const accessToken = localStorage.getItem("access_token");

// process.env.REACT_APP_DJANGO_URL,
const axiosAPI = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    Authorization: accessToken ? "JWT " + accessToken : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
axiosAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      alert(
        "A server/network error occurred. " +
          "Looks like CORS might be the problem. " +
          "Sorry about this - we will get it fixed shortly."
      );
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + "auth/jwt/refresh/" // "token/refresh/"
    ) {
      window.location.href = "/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        //console.log(tokenParts.exp);
        //token/refresh/
        if (tokenParts.exp > now) {
          return axiosAPI
            .post("/auth/jwt/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);

              axiosAPI.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;

              return axiosAPI(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/";
      }
    }
    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export function setNewHeaders(data) {
  console.log(data);
  axiosAPI.defaults.headers["Authorization"] = "JWT " + data.access;
  localStorage.setItem("access_token", data.access);
  localStorage.setItem("refresh_token", data.refresh);
}

export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  return !!token;
};

export default axiosAPI;
