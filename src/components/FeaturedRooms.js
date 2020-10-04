import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../context/RoomContext";
import Loading from "./Loading";
import Room from "./Room";

class FeaturedRooms extends React.Component {
  // const { services } = useContext(RoomContext);
  static contextType = RoomContext;

  render() {
    const f_roomTitle = "Featured Rooms";
    let { loading, featuredRooms: rooms } = this.context;
    //console.log(rooms);
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      // on homepage
      <section className="featured-rooms">
        <Title title={f_roomTitle} />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
