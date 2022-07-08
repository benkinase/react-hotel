import React, { Component, createContext } from "react";
import { API_URL_LIVE } from "../utils";
import { RoomContextState, IRoom } from "../types";
//

const defaultValue: RoomContextState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: false,
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
const RoomContext = createContext(defaultValue);

class RoomContextProvider extends Component {
  state: RoomContextState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
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
      this.setState({ loading: true });
      const res = await fetch(url, { method: "GET", headers });
      const result = await res.json();

      // format result
      const rooms = this.djangoDataFormatter(result);
      //filter featured rooms
      const featuredRooms = rooms.filter(
        (room: IRoom) => room.featured === true
      );

      // get max price and size
      let maxPrice = Math.max(...rooms.map((item: IRoom) => item.price));
      let maxSize = Math.max(...rooms.map((item: IRoom) => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error: any) {
      this.setState({ error: error.message, loading: false });
    }
  }
  // fetch hotel data on component mount
  componentDidMount() {
    this.getDjangoHotelData();
  }
  // get a single room with using slug
  getRoomDetails = (slug: string) => {
    let tempRooms = this.state.rooms;
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  // custom function to format received backend data
  djangoDataFormatter(items: IRoom[]) {
    let tempItems = items.map((item: IRoom) => {
      let id = item.id;
      let images = item.images.map((image) => image.image);
      let room = { ...item, images, id };
      return room;
    });
    return tempItems;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    this.setState({ [name]: inputValue }, this.filterRooms);
  };
  // filter rooms based on different properties
  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      this.state;

    let tempRooms = [...rooms];

    // transform values
    // get capacity
    capacity = parseInt(`${capacity}`);
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
