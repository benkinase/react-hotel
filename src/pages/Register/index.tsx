import React, { FC } from "react";
import {
  CustomContainer,
  Form,
  Input,
  FormWrapper,
  Wrapper,
  Button,
  H3,
} from "../../components";
import { register } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { INewUser } from "../../types";

export const Register: FC = (props) => {
  const { error, loading } = useSelector((state: any) => state.register);

  const dispatch = useDispatch();

  const newUser: INewUser = {
    username: "",
    email: "",
    password: "",
    re_password: "",
  };
  const [state, setState] = React.useState(newUser);

  async function handleChange(e: any) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  async function handleSignup(e: any) {
    e.preventDefault();
    const { password, re_password } = state;

    if (password !== re_password || error) {
      return false;
    }

    dispatch(register(state));
    setState(newUser);
  }

  return (
    <CustomContainer>
      <FormWrapper>
        <Wrapper className='main'>
          <Wrapper>
            <ul>{error && <li>{error}</li>}</ul>
            <H3>Signup</H3>

            <Form onSubmit={handleSignup}>
              <Input
                type='text'
                name='username'
                placeholder='Enter Username'
                value={state.username}
                onChange={handleChange}
                required
              />

              <Input
                type='email'
                name='email'
                placeholder='Enter Email'
                value={state.email}
                onChange={handleChange}
                required
              />
              <Input
                type='password'
                name='password'
                placeholder='Enter password'
                value={state.password}
                onChange={handleChange}
                required
              />
              <Input
                type='password'
                name='re_password'
                placeholder='Enter confirm password'
                value={state.re_password}
                onChange={handleChange}
                required
              />
              <Button type='submit'>{loading ? "Signing..." : "Signup"}</Button>
            </Form>
          </Wrapper>
        </Wrapper>
      </FormWrapper>
    </CustomContainer>
  );
};
