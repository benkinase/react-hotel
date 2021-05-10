import React, { useContext, FC } from "react";
import { RoomContext } from "../context/RoomContext";
import { RoomsFilter } from "./RoomsFilter";
import { RoomsList } from "./RoomsList";
import { Error, Loading } from "./Loading";
import { Wrapper } from "./Containers";

export const RoomsContainer: FC = () => {
  const { error, loading } = useContext(RoomContext);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error title={error} />;
  }
  return (
    <Wrapper>
      <RoomsFilter />
      <RoomsList />
    </Wrapper>
  );
};
