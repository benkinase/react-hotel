import { Route } from "react-router-dom";
import React from "react";
//local imports
import {
  Login,
  Register,
  RoomDetails,
  Homepage,
  NotFound,
  Rooms,
  Success,
} from "./pages/index";

export const ROUTES = {
  HOMEPAGE: "/",
  ROOMS: "/rooms",
  ROOM: "/rooms/:slug",
  LOGIN: "/login",
  REGISTER: "/register",
  RESERVE: "/room/reserve/:slug",
};
export const routes = [
  {
    path: "/",
    component: Homepage,
    name: "home",
    title: "home-page",
  },
  {
    path: "/rooms",
    component: Rooms,
    name: "room",
    title: "rooms-page",
  },
  {
    path: "/rooms/:slug",
    component: RoomDetails,
    name: "room-details",
    title: "room-page",
  },
  {
    path: "/register",
    component: Register,
    name: "register",
    title: "register-page",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    title: "login-page",
  },
  {
    path: "/success",
    component: Success,
    name: "success",
    title: "success-page",
  },
  {
    path: "*",
    component: NotFound,
    name: "notfound",
    title: "404-page",
  },
];
// map route objects
export const routeComponents = routes.map(({ path, component }, key) => {
  return <Route exact path={path} component={component} key={key} />;
});
