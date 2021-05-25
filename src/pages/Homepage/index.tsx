import React, { useContext, FC } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../components/UI/Banner";
import FeaturedRooms from "../../components/FeaturedRooms";
import { Hero } from "../../components/UI/Hero";
import Services from "../../components/Services";
import { ROUTES } from "../../routeConfigs";
import { RoomContext } from "../../context/RoomContext";
import { IRoom } from "../../types";

export const Homepage: FC = () => {
  const { rooms } = useContext(RoomContext);
  // const sortedRoomPrices = rooms
  //   .map((room) => room.price)
  //   .sort((a, b) => a - b);
  // let [minPrice] = sortedRoomPrices; // first element in the sorted array

  // min price from room prices
  const minPrice = Math.min(...rooms.map((room: IRoom) => room.price)); //one-liner☺

  const homeTitle = "Welcome Back";
  const homeMsg = `Rooms now starting at €${minPrice}`;

  return (
    <>
      <Hero>
        <Banner title={homeTitle} subtitle={homeMsg}>
          <Link to={ROUTES.ROOMS} className='btn-primary'>
            find your ideal room
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};
