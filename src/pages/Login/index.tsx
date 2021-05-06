import React, { useState, FC } from "react";
import {
  CustomContainer,
  Form,
  Input,
  FormWrapper,
  Wrapper,
  Button,
  H3,
  Span,
} from "../../components";
import { login } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IUser } from "../../types";

export const Login: FC = () => {
  // destruring redux auth state
  const { error, loading } = useSelector((state: any) => state.auth);

  // instantiate use history and use dispatch hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // user object
  const user: IUser = {
    username: "",
    password: "",
  };

  // local state=> store user object
  const [state, setState] = useState(user);

  // handle input change
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // handle login dispatch
  async function handleLogin(e: React.SyntheticEvent) {
    e.preventDefault();
    const { username, password } = state;
    if (!username || !password || error) {
      return false;
    }
    dispatch(login(state));
    setState(state);
    history.push("/");
  }

  return (
    <CustomContainer>
      <FormWrapper>
        <Wrapper className='main'>
          <Wrapper>
            {error && <Span>{error}</Span>}
            <H3>Login</H3>

            <Form onSubmit={handleLogin}>
              <Input
                type='text'
                name='username'
                placeholder='Enter username'
                value={state.username}
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
              <Button>{loading ? "Login..." : "Login"}</Button>
            </Form>
          </Wrapper>
        </Wrapper>
      </FormWrapper>
    </CustomContainer>
  );
};
