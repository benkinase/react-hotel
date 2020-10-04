import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
export default function RoomsContainer() {
  const { loading, rooms, sortedRooms } = useContext(RoomContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter sortedRooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}
