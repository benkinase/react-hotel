import React from "react";
import SModal from "../components/Modal/SModal";
import { AuthContext } from "../context/auth/AuthContext";
import { ToggleContext } from "../context/modal/ModalContext";

export default function Signup(props) {
  const { register, error, loading } = React.useContext(AuthContext);
  const { toggleSignUp, isSignUp } = React.useContext(ToggleContext);
  const newUser = {
    username: "",
    email: "",
    password: "",
    cPassword: "",
  };
  const [state, setState] = React.useState(newUser);

  async function handleChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  async function handleSignup(e) {
    e.preventDefault();
    const { password, cPassword, email, username } = state;

    if (password !== cPassword) {
      return false;
    }
    let newState = { password, email, username };
    await register(newState);
    setState(newUser);
    toggleSignUp(false);
  }

  return (
    <SModal show={isSignUp} setModalToggled1={toggleSignUp}>
      <div style={{ color: "#F09154" }}>
        <section className='contact'>
          <div className='form-container'>
            {error && <span>{error}</span>}
            <h3 style={{ textAlign: "center", paddingTop: "10px" }}>Signup</h3>

            <form className='form' onSubmit={handleSignup}>
              <input
                className='input-field'
                type='text'
                name='username'
                placeholder='Enter Username'
                value={state.username}
                onChange={handleChange}
                required
              />

              <input
                className='input-field'
                type='email'
                name='email'
                placeholder='Enter Email'
                value={state.email}
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
              <input
                className='input-field'
                type='password'
                name='cPassword'
                placeholder='Enter confirm password'
                value={state.cPassword}
                onChange={handleChange}
                required
              />
              <button className='submit-btn' type='submit'>
                {loading ? "Signing..." : "Signup"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </SModal>
  );
}
