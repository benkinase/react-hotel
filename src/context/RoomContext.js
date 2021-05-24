import React, { Component, createContext } from "react";
import { API_URL_LIVE } from "../utils";

//
const RoomContext = createContext();

class RoomContextProvider extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.getRoomDetails = this.getRoomDetails.bind(this);
  // }
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    isLoading: true,
    error: "",
    type: "alle",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  async getDjangoHotelData() {
    const url = `${API_URL_LIVE}/api/rooms/`;
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "",
    };

    try {
      const res = await fetch(url, { method: "GET", headers });
      const result = await res.json();

      // format result
      const rooms = this.djangoDataFormatter(result);
      //filter featued rooms
      const featuredRooms = rooms.filter((room) => room.featured === true);

      // get max price and size
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
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  // fetch hotel data on component mount
  componentDidMount() {
    this.getDjangoHotelData();
  }
  // get a single room with using slug
  getRoomDetails = (slug) => {
    let tempRooms = this.state.rooms;
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  // custom function to format received backend data
  djangoDataFormatter(items) {
    let tempItems = items.map((item) => {
      let id = item.id;
      let images = item.images.map((image) => image.image);
      let room = { ...item, images, id };
      return room;
    });
    return tempItems;
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value }, this.filterRooms);
  };
  // filter rooms based on different properties
  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      this.state;

    let tempRooms = [...rooms];

    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = Number(price);

    // filter by type
    if (type !== "alle") {
      tempRooms = tempRooms.filter((room) => room.room_type === type);
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
          getRoomDetails: this.getRoomDetails,
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
