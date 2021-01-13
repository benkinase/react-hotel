import React from "react";
import Room from "./Room";
export default function RoomsList({ rooms }) {
  return (
    <section className='rooms-list'>
      <div className='rooms-list-center'>
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
