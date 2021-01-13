import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Rooms from "./pages/Rooms";
import SingleRoomDetails from "./pages/SingleRoomDetails";
import { ROUTES } from "./routes";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Footer from "./components/Footer";
import { ToggleContext } from "./context/modal/ModalContext";

function App() {
  const { toggleLogin, toggleSignUp } = React.useContext(ToggleContext);

  return (
    <div className='App'>
      <Navbar toggle={toggleLogin} toggle1={toggleSignUp} />

      <Login />
      <Signup />

      <Switch>
        <Route exact path={ROUTES.HOMEPAGE} component={Homepage} />
        <Route exact path={ROUTES.ROOMS} component={Rooms} />
        <Route exact path={ROUTES.SINGLEROOM} component={SingleRoomDetails} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
