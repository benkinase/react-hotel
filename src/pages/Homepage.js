import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { ROUTES } from "../routes";

export default function Homepage() {
  const homeTitle = "Welcome Back";
  const homeMsg = " Rooms now starting at $455";
  return (
    <>
      <Hero>
        <Banner title={homeTitle} subtitle={homeMsg}>
          <Link to={ROUTES.ROOMS} className="btn-primary">
            Find Your Ideal Room
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
