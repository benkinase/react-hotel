import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is missing")
    .label("Username"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is missing")
    .label("Password"),
});

export const newUserSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Username is required")
    .label("Username"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    //.required("Confirm password is required"),
    .test("password-match", "Password musth match", function (value) {
      return this.parent.password === value;
    }),
});
