import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { userSchema } from "../../utils";
import { Form, Input, Wrapper, Button, H3, Span } from "../../components";
import { login } from "../../redux/actions/auth";
import { RootState } from "../../redux/reducers";
import { AuthState, IUser } from "../../types";

export const Login: FC = () => {
  // destructuring redux auth state
  const { loading, error }: AuthState = useSelector(
    (state: RootState) => state.register
  );

  // instantiate use history and use dispatch hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // user object
  const user: IUser = {
    username: "",
    password: "",
  };

  return (
    <Wrapper>
      {error && <Span>{error}</Span>}
      <H3>Login</H3>
      <Formik
        validationSchema={userSchema}
        initialValues={user}
        onSubmit={(values: IUser, actions) => {
          dispatch(login(values));
          history.push("/");
          setTimeout(() => {
            actions.resetForm();
            actions.setSubmitting(false);
          }, 500);
        }}
      >
        {(props: FormikProps<IUser>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <Wrapper className="control">
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username && (
                  <Span color="var(--nice-red)">{errors.username}</Span>
                )}
              </Wrapper>
              <Wrapper className="control">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <Span color="var(--nice-red)">{errors.password}</Span>
                )}
              </Wrapper>
              <Button margin="10px 0">
                {loading || isSubmitting ? "login..." : "login"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
