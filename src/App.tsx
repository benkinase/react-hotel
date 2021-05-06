import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useLocation } from "react-router-dom";
//local imports
import { routeComponents } from "./routeConfigs";
import Navbar from "./components/Navbar";
import { loadUser } from "./redux/actions/auth";
import { AppWrapper } from "./components";

function App() {
  const { token } = useSelector((state: any) => state.auth);

  // instantiate dispatch hook
  const dispatch = useDispatch();

  // fetch authenticated user details
  useEffect(() => {
    if (token) {
      dispatch(loadUser(token));
    }
  }, [token, dispatch]);

  // extract title from current url
  const location = useLocation();
  const curLocation = location.pathname.split("/")[1];

  let title: string;
  if (curLocation) {
    title = `${curLocation[0].toUpperCase()}${curLocation.slice(1)}`;
  } else if (curLocation === "") {
    title = "Homepage";
  } else {
    title = "no-title";
  }
  // change title on component mount
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <AppWrapper>
      <Navbar />
      <Switch>{routeComponents}</Switch>
    </AppWrapper>
  );
}

export default App;
