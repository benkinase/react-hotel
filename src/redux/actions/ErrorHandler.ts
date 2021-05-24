export function ErrorHandler(error: any) {
  let myError;
  if (error.response.data.password) {
    return error.response.data.password.map((err: any) => {
      return (myError = err);
    });
  } else if (error.response.data.username) {
    return error.response.data.username.map((err: any) => {
      return (myError = err);
    });
  } else if (error.response.data.email) {
    return error.response.data.email.map((err: any) => {
      return (myError = err);
    });
  } else {
    myError = error.response.data.detail;
  }
  return myError;
}
