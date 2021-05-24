import React, { useState, useEffect, FC } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// local imports
import { IReservation, IRoom } from "../../types";
import { axiosAPI, getBookingDate } from "../../utils";
import { StripePayment } from "./StripConfig";

import {
  CustomContainer,
  Form,
  Input,
  Booking,
  Wrapper,
  Paragraph,
  Label,
} from "../../components";

export interface ReservationProps {
  room: IRoom;
  close: () => void;
  isOpen: boolean;
}
export const Reservation: FC<ReservationProps> = (props) => {
  // destructuring redux auth state
  const { id: userId, token } = useSelector((state: any) => state.auth);

  // destructuring props from room details
  const { room, close, isOpen } = props;

  // destructuiring room object
  const { hotel, capacity, id: roomId, price } = room;

  const initialState = {
    guest: userId,
    room: roomId,
    hotel: hotel,
  };
  // local state=> manage reservation inputs
  const [state, setState] = useState(initialState);
  const [startDate, setStart] = useState<Date>(new Date());
  const [endDate, setEnd] = useState<Date>(new Date());
  const [guests, setGuests] = useState<number>(1);
  const [charges, setCharges] = useState<number>(0);
  const [days, setDays] = useState<number>(0);

  const [error, setHasError] = useState<any>("");

  // instantiate use history hook
  const history = useHistory();

  // using use effect hook to update current charges
  useEffect(() => {
    const getTotalCharges = () => {
      const difference = endDate.getTime() - startDate.getTime();

      if (difference < 1) return;
      const numberOfDays = difference / (1000 * 3600 * 24);
      setDays(numberOfDays);

      const total_guests = guests ? +guests : 1;
      const total_charges = total_guests * numberOfDays * price;

      setCharges(+total_charges.toFixed(0));
    };
    getTotalCharges();
  }, [guests, startDate, price, endDate]);

  async function handleBooking(pay_token: any) {
    // reservation object
    let reservation: IReservation = {
      check_in_date: getBookingDate(startDate),
      checkout_date: getBookingDate(endDate),
      guest: state.guest,
      room: state.room,
      //room_item: room,
      hotel: state.hotel,
      no_of_guests: +guests,
      charges: +charges,
      paid: true,
      stripe_token: pay_token.id,
    };

    // sanitize reservation object
    if (!state.guest) {
      setHasError(`Please login to complete booking`);
      return false;
    }
    // using the raw dates
    if (endDate.getTime() <= startDate.getTime()) {
      setHasError(`End date must be AFTER the start date`);
      return false;
    }
    if (
      reservation.checkout_date < Date.now() ||
      reservation.check_in_date < Date.now()
    ) {
      setHasError(`Can't book days in the PAST.`);
      return false;
    }

    if (reservation.no_of_guests > capacity) {
      setHasError(`Max capacity of ${capacity} guests exceeded!`);
      return false;
    }

    try {
      // dispatch reservation
      const response: any = await axiosAPI.post(
        "/api/pay/stripe/",
        reservation
      );
      // redirect if res is ok
      if (response.status === 201) {
        // reset state
        setState(initialState);
        setHasError("");
        close();
        // redirect
        history.push("/success");
      }
    } catch (error) {
      setHasError(error.detail);
    }
  }
  // toggle class
  let drawClass = "reserve";

  if (isOpen) {
    drawClass = "reserve show";
  }

  return (
    <CustomContainer>
      <Booking>
        <Wrapper className={drawClass}>
          <i className='fas fa-times' onClick={() => close()}></i>
          {error && <Paragraph className='error-msg'>{error}</Paragraph>}
          <Form onSubmit={handleBooking}>
            <Label>Enter number of guests</Label>
            <Input
              type='number'
              name='guests'
              min='1'
              placeholder='How many guests?'
              value={guests}
              onChange={(e: any) => setGuests(e.target.value)}
              required
              width='80%'
            />

            <Wrapper className='date-picking'>
              <Wrapper className='check-in '>
                <Label>Check in</Label>
                <DatePicker
                  className='picker'
                  selected={startDate}
                  onChange={(value: Date) => setStart(value)}
                />
              </Wrapper>
              <Wrapper className='checkout'>
                <Label>Checkout</Label>
                <DatePicker
                  className='picker'
                  selected={endDate}
                  onChange={(value: Date) => setEnd(value)}
                />
              </Wrapper>
            </Wrapper>
            <Wrapper className='totals'>
              <Paragraph>Total days: {Math.ceil(days)}</Paragraph>
              <Paragraph>Total charges: €{charges}</Paragraph>
            </Wrapper>
            <hr />
            <StripePayment handleBooking={handleBooking} token={token} />
          </Form>
        </Wrapper>
      </Booking>
    </CustomContainer>
  );
};
