import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
//import defaultBcg from "../images/room-1.jpeg";
import { Banner } from "../../components/UI/Banner";
import {
  Button,
  Wrapper,
  H3,
  H4,
  H6,
  Span,
  Image,
  Paragraph,
  Loading,
} from "../../components";
import { ROUTES } from "../../routeConfigs";
import DynamicHero from "../../components/DynamicHero";
import { RoomContext } from "../../context/RoomContext";
import { ToggleContext } from "../../context/toggle/ToggleContext";
import { Reservation } from "../index";
import styled, { keyframes } from "styled-components";

export function RoomDetails(props) {
  const { getRoomDetails } = useContext(RoomContext);
  const { isLogin, isOpen, close, toggleBooking } = useContext(ToggleContext);

  // initial slug state
  let initialState = {
    slug: props.match.params.slug,
    //defaultBcg: defaultBcg,
  };
  // manage slug change => retriest current slug from params
  const [state] = useState(initialState);

  // fetch single room
  const room = getRoomDetails(state.slug);

  if (!room) {
    return (
      <Wrapper>
        <Loading title='Room loading' />
      </Wrapper>
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
    promo,
    images,
  } = room;

  // 5% promo deduction
  let promo_price = price * 0.95;

  // grab one image as main::array spread operator
  // const [mainImage, ...defaultImages] = images;

  function generateRandomImage() {
    const random = Math.floor(Math.random() * images.length);
    return random;
  }

  // random image on page reload
  let randomImg = images[generateRandomImage()];

  return (
    <ContainerDetails>
      <DynamicHero imgHero={randomImg}>
        <Banner title={`${name} room`}>
          <Link to={ROUTES.ROOMS} className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </DynamicHero>
      <section className='single-room'>
        <Wrapper className='single-room-images'>
          {images.map((item, index) => (
            <Image key={index} src={item} alt={name} />
          ))}
        </Wrapper>
      </section>
      <Wrapper className='booking'>
        {!isOpen && !isLogin && (
          <Button
            width='100%'
            onClick={toggleBooking}
            disabled={!room.is_available}
          >
            {room.is_available ? "book now" : "unavailable"}
          </Button>
        )}
      </Wrapper>

      <section className='single-room'>
        <Wrapper className='single-room-info'>
          <article className='desc'>
            <H3>details</H3>
            <Paragraph>{description}</Paragraph>
          </article>
          <article className='info'>
            <H3>info</H3>
            {promo ? (
              <H6>
                <Span>
                  price :<span className='promo-ed'> €{price}</span>
                </Span>
                <Span className='promo'> €{promo_price}</Span>
              </H6>
            ) : (
              <H6>price : €{price}</H6>
            )}
            <H6>size : {size} SqFt</H6>
            <H6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </H6>
            <H6>{pets ? "pets allowed" : "no pets allowed"}</H6>
            <H6>{breakfast && "free breakfast included"}</H6>
          </article>
        </Wrapper>
      </section>
      <section className='room-extras'>
        <H4>extras</H4>
        <ul className='extras'>
          {extras[0].extra.split(",").map((item, index) => (
            <li key={index}>✿ {item}</li>
          ))}
        </ul>
      </section>
      <Reservation room={room} isOpen={isOpen} close={close} />
    </ContainerDetails>
  );
}

// slide down animation
const showUp = keyframes`
0%{
  opacity:0;
  transform:translate(50px)
}
100%{
  opacity:1;
  transform:translate(0px)
}
`;
// container with styles
const ContainerDetails = styled.div`
  .single-room {
    padding: 5rem 0 0 0;
  }

  .single-room-images {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
  }

  @media screen and (min-width: 776px) {
    .single-room-images {
      width: 90vw;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .single-room-images img {
    width: 100%;
    display: block;
  }
  .single-room-info {
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr;
    margin: 2rem auto;
  }
  .desc,
  .info {
    margin: 1rem 0;
  }
  .desc h3 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  .desc p {
    line-height: 1.5;
    text-align: justify;
  }
  .info h3,
  .info h6 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  .info h6 {
    font-weight: 300;
  }

  .room-extras {
    width: 80vw;
    margin: 0 auto 3rem auto;
  }
  .room-extras h4 {
    text-transform: capitalize;
    text-align: justify;
    letter-spacing: var(--mainSpacing);
  }
  .extras {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
  }
  @media screen and (min-width: 992px) {
    .single-room-images,
    .single-room-info,
    .room-extras {
      width: 95vw;
      max-width: 1170px;
    }
    .single-room-info {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-column-gap: 2rem;
    }
    .info {
      padding-left: 3rem;
    }
  }
  .promo-ed {
    text-decoration: line-through;
    margin: 0px 5px;
  }
  .promo {
    color: rgb(245, 14, 207);
    font-weight: bold;
  }
  .booking {
    transition: var(--mainTransition);
    position: fixed;
    z-index: 500;
    right: 5px;
    top: 50%;
    width: 200px;
    background-color: var(--mainBlack);
    animation: ${showUp} 1s linear forwards;
  }
`;
