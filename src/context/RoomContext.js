import React, { Component, createContext } from "react";
//import items from "../data";
import Client from "../contentful";

const RoomContext = createContext();
class RoomContextProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    isLoading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  getContentfulData = async () => {
    try {
      let res = await Client.getEntries({
        content_type: "homecomingRooms",
        order: "-fields.price", //"sys.createdAt",
      });
      //after
      let rooms = this.dataFormatter(res.items); //res.items replaces items
      // console.log(rooms);
      let featuredRooms = rooms.filter((room) => room.featured === true);

      //
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        isLoading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });

      //after
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getContentfulData();
  }

  getSingleRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room; //obj---filetr// array
  };

  dataFormatter(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempRooms = [...rooms];

    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getSingleRoom: this.getSingleRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomContextProvider, RoomConsumer, RoomContext };
