import React from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { ToggleContext } from "../context/modal/ModalContext";
import LModal from "../components/Modal/LModal";

export default function Login(props) {
  const { login, error, loading } = React.useContext(AuthContext);
  const { toggleLogin, isLogin } = React.useContext(ToggleContext);

  const user = {
    username: "",
    password: "",
  };
  const [state, setState] = React.useState(user);

  async function handleChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  async function handleLogin(e) {
    e.preventDefault();
    const { username, password } = state;
    if (!username || !password) {
      return false;
    }
    login(state);
    toggleLogin();
    setState(state);
  }

  return (
    <LModal show={isLogin} setModalToggled={toggleLogin}>
      <div style={{ color: "#F09154" }}>
        <section className='contact'>
          <div className='form-container'>
            {error && <span>{error}</span>}
            <h3 style={{ textAlign: "center", paddingTop: "10px" }}>Login</h3>

            <form className='form' onSubmit={handleLogin}>
              <input
                className='input-field'
                type='text'
                name='username'
                placeholder='Enter username'
                value={state.username}
                onChange={handleChange}
                required
              />
              <input
                className='input-field'
                type='password'
                name='password'
                placeholder='Enter password'
                value={state.password}
                onChange={handleChange}
                required
              />
              <button className='submit-btn' type='submit'>
                {loading ? "Login..." : "Login"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </LModal>
  );
}
