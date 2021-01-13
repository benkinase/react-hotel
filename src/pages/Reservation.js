import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RModal from "../components/Modal/RModal";
import { ToggleContext } from "../context/modal/ModalContext";
//import { AuthContext } from "../context/auth/AuthContext";
import axiosInstance from "../context/auth/authAxios";

export default function Reservation(props) {
  //const { token } = React.useContext(AuthContext);
  const { isBooking, toggleBooking } = React.useContext(ToggleContext);
  const { name, hotel, capacity, is_available } = props.room;

  const reservation = {
    guest: "",
    room: name,
    hotel: hotel,
    number_of_guest: 0,
    check_in: new Date(),
    checkout: new Date(),
    available: is_available,
  };
  const [state, setState] = React.useState(reservation);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  async function handleCheckInChange(date) {
    setState({ ...state, check_in: date });
  }
  async function handleCheckOutChange(date) {
    setState({ ...state, checkout: date });
  }
  async function handleBooking(e) {
    e.preventDefault();
    if (!state.guest) return false;

    if (state.number_of_guest > capacity) {
      setError(`Max capacity of ${capacity} exceeded!`);
      return false;
    } else {
      setLoading(true);
      state.available = !is_available;
      console.log(state);
      axiosInstance.post("/booking/");
    }
    //post data
    toggleBooking();
    setState(reservation);
    window.history.replaceState({}, "", "/");
    setLoading(false);
  }
  return (
    <RModal show={isBooking} setModalToggled={toggleBooking}>
      <div style={{ color: "#F09154" }}>
        <section className='contact'>
          <div className='form-container'>
            {error && <p className='error-msg'>{error}</p>}
            <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
              Reservation
            </h3>

            <form className='form' onSubmit={handleBooking}>
              <input
                className='input-field'
                type='text'
                name='guest'
                placeholder='Enter full name'
                value={state.guest || ""}
                onChange={handleChange}
                required
              />
              <input
                className='input-field'
                type='number'
                name='number_of_guest'
                placeholder='How many guests?' //dynamic, use select input
                value={state.number_of_guest || ""}
                onChange={handleChange}
                required
              />
              <div className='date-picking'>
                <div>
                  <DatePicker
                    duration
                    className='date date1'
                    selected={state.check_in}
                    onChange={handleCheckInChange}
                  />
                </div>
                <div>
                  <DatePicker
                    duration
                    className='date date2'
                    selected={state.checkout}
                    onChange={handleCheckOutChange}
                  />
                </div>
              </div>

              <button className='submit-btn' type='submit'>
                {loading ? "Booking..." : "Book Now"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </RModal>
  );
}
