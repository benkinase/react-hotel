import React, { FC } from "react";
import { Hero } from "../../components/Hero";
import { Banner } from "../../components/Banner";
import { Link } from "react-router-dom";
import { RoomsContainer } from "../../components/RoomsContainer";

export const Rooms: FC = () => {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='our rooms'>
          <Link to='/' className='btn-primary'>
            return home now
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};
