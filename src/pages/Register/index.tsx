import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
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

export const Register: FC = () => {
  // destruring redux register state
  const { error, loading } = useSelector((state: any) => state.register);

  // instantiate use history and use dispatch hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // new user object
  const newUser: INewUser = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  };
  // local state => store new user object
  const [state, setState] = useState(newUser);

  // handle input change
  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  // handle sign up event
  async function handleSignup(e: React.SyntheticEvent) {
    e.preventDefault();
    const { password1, password2 } = state;

    if (password1 !== password2 || error) {
      return false;
    }

    dispatch(register(state));
    setState(newUser);
    history.push("/success");
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
                name='password1'
                placeholder='Enter password'
                value={state.password1}
                onChange={handleChange}
                required
              />
              <Input
                type='password'
                name='password2'
                placeholder='Enter confirm password'
                value={state.password2}
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
