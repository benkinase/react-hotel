import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Wrapper, Button, H3, Span } from "../../components";
import { register } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Formik, FormikProps } from "formik";
import { newUserSchema } from "../../utils";
import { INewUser, RegisterState } from "../../types";
import { RootState } from "../../redux/reducers";

export const Register: FC = () => {
  // destruring redux register state
  const { loading, error }: RegisterState = useSelector(
    (state: RootState) => state.register
  );

  // instantiate use history and use dispatch hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // new user object
  const newUser: INewUser = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  return (
    <Wrapper>
      <ul>{error && <li>{error}</li>}</ul>
      <H3>Signup</H3>

      <Formik
        validationSchema={newUserSchema}
        initialValues={newUser}
        onSubmit={(values: INewUser, actions) => {
          dispatch(register(values));
          history.push("/");
          setTimeout(() => {
            actions.resetForm();
            actions.setSubmitting(false);
          }, 500);
        }}
      >
        {(props: FormikProps<INewUser>) => {
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
              <Wrapper className='control'>
                <Input
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username && (
                  <Span color='var(--nice-red)'>{errors.username}</Span>
                )}
              </Wrapper>
              <Wrapper className='control'>
                <Input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <Span color='var(--nice-red)'>{errors.email}</Span>
                )}
              </Wrapper>
              <Wrapper className='control'>
                <Input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <Span color='var(--nice-red)'>{errors.password}</Span>
                )}
              </Wrapper>
              <Wrapper className='control'>
                <Input
                  type='password'
                  name='password2'
                  placeholder='Confirm password'
                  value={values.password2}
                  onChange={handleChange}
                />
                {errors.password2 && touched.password2 && (
                  <Span color='var(--nice-red)'>{errors.password2}</Span>
                )}
              </Wrapper>

              <Button margin='10px 0'>
                {loading || isSubmitting ? "signing..." : "signup"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
