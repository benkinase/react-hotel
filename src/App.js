import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Rooms from "./pages/Rooms";
import SingleRoomDetails from "./pages/SingleRoomDetails";
import { ROUTES } from "./routes";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.HOMEPAGE} component={Homepage} />
        <Route exact path={ROUTES.ROOMS} component={Rooms} />
        <Route exact path={ROUTES.SINGLEROOM} component={SingleRoomDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
