import React, { useContext, FC } from "react";
import styled from "styled-components";
import { RoomContext } from "../context/RoomContext";
import { IRoom } from "../types";
import { Title } from "./UI/Title";

export const RoomsFilter: FC = () => {
  // get state values from context
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    rooms,
  } = context;

  //get unique rooms based on type
  let types = [...new Set(rooms.map((data: IRoom) => data.room_type))];
  // add all
  types = ["alle", ...types];

  // get unique rooms based capacity
  let people = [...new Set(rooms.map((data: IRoom) => data.capacity))];

  // min and max size from room sizes
  const defaultMinSize = Math.min(...rooms.map((room: IRoom) => room.size));
  const defaultMaxSize = Math.max(...rooms.map((room: IRoom) => room.size));

  return (
    <ContainerFilter>
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/* select type */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              className="form-control"
              value={type}
            >
              {types.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* end of select type */}
          {/* guests  */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              onChange={handleChange}
              className="form-control"
              value={capacity}
            >
              {people.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* end of guests */}
          {/* room price */}
          <div className="form-group">
            <label htmlFor="price">room price €{price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control rcolor"
            />
          </div>
          {/* end of room price*/}
          {/* size */}
          <div className="form-group">
            <label htmlFor="price">room size </label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                min={defaultMinSize}
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                max={defaultMaxSize}
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/* end of select type */}
          {/* extras */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">pets</label>
            </div>
          </div>
          {/* end of extras type */}
        </form>
      </section>
    </ContainerFilter>
  );
};

const ContainerFilter = styled.div`
  .filter-container {
    padding: 5rem 0;
  }
  .filter-form {
    width: 60vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
  }
  .form-group {
    text-transform: capitalize;
  }
  .form-group label {
    display: block;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 0.5rem;
  }
  .form-control {
    width: 100%;
    background: transparent;
    font-size: 1rem;
  }
  .form-group .rcolor {
    background-color: #0e2b3d !important;
  }
  .size-inputs {
    display: flex;
  }
  .size-input {
    width: 40%;
    padding: 0.2rem;
    border: 1px solid var(--mainBlack);
    border-radius: 0.3rem;
    margin-right: 0.3rem;
  }
  .single-extra label {
    display: inline-block;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }

  @media screen and (min-width: 776px) {
    .filter-form {
      width: 70vw;
    }
  }
  @media screen and (max-width: 460px) {
    .booking {
      width: 100px;
    }
  }
  @media screen and (min-width: 992px) {
    .filter-form {
      width: 95vw;
      max-width: 1170px;
    }
  }
`;
