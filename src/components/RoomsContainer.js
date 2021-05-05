import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { RoomsFilter } from "./RoomsFilter";
import { RoomsList } from "./RoomsList";
import { Error, Loading } from "./Loading";
import { Wrapper } from "./Containers";

export const RoomsContainer = () => {
  const { error, loading, rooms, sortedRooms } = useContext(RoomContext);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error title={error} />;
  }
  return (
    <Wrapper>
      <RoomsFilter sortedRooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </Wrapper>
  );
};
