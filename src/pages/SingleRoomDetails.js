import React from "react";
import { Link } from "react-router-dom";
//import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { ROUTES } from "../routes";
import DynamicHero from "../components/DynamicHero";
import { RoomContext } from "../context/RoomContext";
import { ToggleContext } from "../context/modal/ModalContext";
import { AuthContext } from "../context/auth/AuthContext";
import Reservation from "./Reservation";

export default function SingleRoomDetails(props) {
  const { toggleLogin, isLogin, isBooking, toggleBooking } = React.useContext(
    ToggleContext
  );

  const { token } = React.useContext(AuthContext);
  const { getRoomDetails } = React.useContext(RoomContext);

  let initialState = {
    slug: props.match.params.slug,
    //defaultBcg: defaultBcg,
  };
  const [state] = React.useState(initialState);

  // fet single room
  const room = getRoomDetails(state.slug);

  if (!room) {
    return (
      <div className='error'>
        <h3> no such room could be found...</h3>
        <Link to={ROUTES.ROOMS} className='btn-primary'>
          back to rooms
        </Link>
      </div>
    );
  }

  // if room is fetched/in context
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  // grab one image as main
  // const [mainimage, ...defaultImages] = images;
  // console.log(defaultImages)
  function generateRandomImage() {
    const random = Math.floor(Math.random() * images.length);
    return random;
  }

  let randomImg = images[generateRandomImage()];

  function activateBooking() {
    if (!token) {
      toggleLogin();
    } else {
      toggleBooking();
    }
  }
  return (
    <>
      <DynamicHero imgHero={randomImg}>
        <Banner title={`${name} room`}>
          <Link to={ROUTES.ROOMS} className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </DynamicHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {images.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
      </section>
      <div className='booking'>
        {!isBooking && !isLogin && (
          <button onClick={() => activateBooking()} className='booking-btn'>
            Book Now
          </button>
        )}
      </div>

      <section className='single-room'>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price : €{price}</h6>
            <h6>size : {size} SqFt</h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>extras </h6>
        <ul className='extras'>
          {extras[0].extra.split(",").map((item, index) => (
            <li key={index}>✿ {item}</li>
          ))}
        </ul>
      </section>
      <Reservation room={room} />
    </>
  );
}
