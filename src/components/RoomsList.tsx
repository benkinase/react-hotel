import React, { FC } from "react";
import styled from "styled-components";
import { Room } from "./Room";
import { IRoom } from "../types";

type RoomListProps = {
  rooms: IRoom[];
};

export const RoomsList: FC<RoomListProps> = ({ rooms }) => {
  return (
    <ContainerList>
      <div className='rooms-list-center'>
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </ContainerList>
  );
};

const ContainerList = styled.div`
  padding: 5rem 0;
  .rooms-list-center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;
  }

  @media screen and (min-width: 776px) {
    .rooms-list-center {
      width: 90vw;
    }
  }
  @media screen and (min-width: 992px) {
    .rooms-list-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
`;
