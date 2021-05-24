export function ErrorHandler(error) {
  let myError;
  if (error.response.data.password) {
    return error.response.data.password.map((err) => {
      myError = err;
    });
  } else if (error.response.data.username) {
    return error.response.data.username.map((err) => {
      myError = err;
    });
  } else if (error.response.data.email) {
    return error.response.data.email.map((err) => {
      myError = err;
    });
  } else {
    myError = error.response.data.detail;
  }
  return myError;
}
