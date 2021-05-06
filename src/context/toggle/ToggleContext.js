import React, { createContext, useState, useCallback } from "react";

const ToggleContext = createContext();

function ToggleContextProvider(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // callback
  const toggleLogin = useCallback(() => setIsLogin(!isLogin), [
    isLogin,
    setIsLogin,
  ]);
  const toggleSignUp = useCallback(() => setIsSignUp(!isSignUp), [
    isSignUp,
    setIsSignUp,
  ]);
  // const toggleBooking = React.useCallback(() => setIsBooking(!isBooking), [
  //   isBooking,
  //   setIsBooking,
  // ]);
  const [isOpen, setOpen] = useState(false);
  const toggleBooking = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);

  const close = () => {
    setOpen(false);
  };
  return (
    <ToggleContext.Provider
      value={{
        isLogin,
        isSignUp,
        isOpen,
        close,
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
