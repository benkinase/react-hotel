import React, { createContext } from "react";

const ToggleContext = createContext();

function ToggleContextProvider(props) {
  const [isLogin, setIsLogin] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [isBooking, setIsBooking] = React.useState(false);

  // callback
  const toggleLogin = React.useCallback(() => setIsLogin(!isLogin), [
    isLogin,
    setIsLogin,
  ]);
  const toggleSignUp = React.useCallback(() => setIsSignUp(!isSignUp), [
    isSignUp,
    setIsSignUp,
  ]);
  const toggleBooking = React.useCallback(() => setIsBooking(!isBooking), [
    isBooking,
    setIsBooking,
  ]);

  return (
    <ToggleContext.Provider
      value={{
        isLogin,
        isSignUp,
        isBooking,
        toggleLogin,
        toggleSignUp,
        toggleBooking,
      }}
    >
      {props.children}
    </ToggleContext.Provider>
  );
}

const ToggleConsumer = ToggleContext.Consumer;

export { ToggleContextProvider, ToggleConsumer, ToggleContext };
