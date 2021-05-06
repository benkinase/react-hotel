import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import styled from "styled-components";
import { IRoom } from "../types";

type RoomProps = {
  room: IRoom;
};

export const Room: React.FC<RoomProps> = ({ room }) => {
  // destructuring room prop
  const { name, images, slug, price } = room;

  return (
    <ContainerRoom>
      <article className='room'>
        <div className='img-container'>
          <img src={images[0] || defaultImg} alt='single room' />
          <div className='price-top'>
            <h6>€{price}</h6>
            <p>pro Night</p>
          </div>
          <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
            features
          </Link>
        </div>
        <p className='room-info'>{name}</p>
      </article>
    </ContainerRoom>
  );
};

//container with embedded styles
const ContainerRoom = styled.div`
  /* room */
  .room {
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
  }
  .room:hover {
    box-shadow: var(--darkShadow);
  }

  .img-container {
    position: relative;
  }
  .img-container img {
    width: 100%;
    display: block;
    transition: var(--mainTransition);
  }
  .price-top {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: var(--mainWhite);
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition: var(--mainTransition);
  }
  .price-top h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: var(--mainSpacing);
  }
  .room-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.35s linear;
  }
  .img-container:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .img-container:hover img {
    opacity: 0.3;
  }
  .img-container:hover .price-top {
    opacity: 0;
  }
  .img-container:hover .room-link {
    transform: translate(-50%, -50%) scale(1);
  }
  .room-info {
    background: var(--darkGrey);
    text-transform: capitalize;
    padding: 0.5rem 0;
    text-align: center;
    font-weight: 700;
    letter-spacing: var(--mainSpacing);
  }
`;
