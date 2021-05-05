import React, { FC } from "react";
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
  const { error, loading } = useSelector((state: any) => state.auth);

  const history = useHistory();
  const dispatch = useDispatch();
  const user: IUser = {
    username: "",
    password: "",
  };

  const [state, setState] = React.useState(user);

  async function handleChange(e: any) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  async function handleLogin(e: any) {
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
