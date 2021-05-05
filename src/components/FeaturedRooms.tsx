import React from "react";
import { Title } from "./Title";
import { RoomContext } from "../context/RoomContext";
import { Loading } from "./Loading";
import { Room } from "./Room";
import styled from "styled-components";
import { IRoom } from "../types";

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;

  render() {
    const featured_roomTitle = "Featured Rooms";
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room: IRoom) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <ContainerFeatured>
        <section className='featured-rooms'>
          <Title title={featured_roomTitle} />
          <div className='featured-rooms-center'>
            {loading ? <Loading /> : rooms}
          </div>
        </section>
      </ContainerFeatured>
    );
  }
}

export default FeaturedRooms;
const ContainerFeatured = styled.div`
  /* featured rooms */

  .featured-rooms {
    padding: 5rem 0;
  }
  //repeat(auto-fit, minmax(270px, 1fr))
  .featured-rooms-center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
  }
  @media screen and (min-width: 776px) {
    .featured-rooms-center {
      width: 90vw;
      grid-template-columns: repeat(3, 1fr);
      //grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    }
  }
  @media screen and (min-width: 992px) {
    .featured-rooms-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
  /* end pf featured rooms */
`;
