import React from "react";
import Title from "./Title";
import { RoomContext } from "../context/RoomContext";
import Loading from "./Loading";
import Room from "./Room";

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;

  render() {
    const featured_roomTitle = "Featured Rooms";
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className='featured-rooms'>
        <Title title={featured_roomTitle} />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
