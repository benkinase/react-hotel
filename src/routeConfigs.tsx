import { Route } from "react-router-dom";
import React from "react";
//local imports
import {
  RoomDetails,
  Homepage,
  NotFound,
  Rooms,
  Success,
  Checkout,
  Profile,
  Auth,
} from "./pages/index";

export const ROUTES = {
  HOMEPAGE: "/",
  ROOMS: "/rooms",
  ROOM: "/rooms/:slug",
  AUTH: "/auth",
  RESERVE: "/room/reserve",
  CHECKOUT: "/room/checkout",
  PROFILE: "/profile",
};

// array of route objects
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
    path: "/auth",
    component: Auth,
    name: "register",
    title: "register-page",
  },

  {
    path: "/profile",
    component: Profile,
    name: "profile",
    title: "profile-page",
  },
  {
    path: "/success",
    component: Success,
    name: "success",
    title: "success-page",
  },
  {
    path: "/room/checkout",
    component: Checkout,
    name: "checkout",
    title: "checkout-page",
  },
  {
    path: "*",
    component: NotFound,
    name: "notfound",
    title: "404-page",
  },
];
// map route objects and return Route with corresponding properties
export const routeComponents = routes.map(({ path, component }, key) => {
  return <Route exact path={path} component={component} key={key} />;
});
