import React, { FC, useState, SyntheticEvent } from "react";
import { useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
import { Banner, Hero } from "../../components";
import { Input, Button } from "../../components";
import { axiosAPI2 } from "../../utils";

export const Checkout: FC = () => {
  const { token, id: userId } = useSelector((state: any) => state.auth);
  const statusType = "Checkout";
  const statusMsg = "Thank you for choosing us!";

  const [checkout, setCheckout] = useState({ guest: "", id: "" });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setCheckout({ ...checkout, [name]: value });
  };

  const handleCheckout = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (userId) return;
    let check = {
      id: +checkout.id,
      guest: +userId,
      no_of_guests: 1,
      hotel: 1,
      room: 1,
    };
    // dispatch reservation
    const response: any = await axiosAPI2(token).post("/api/check-out/", check);
    console.log(response);
    setCheckout({ guest: "", id: "" });
  };
  return (
    <Hero>
      <Banner title={statusType} subtitle={statusMsg}>
        <>
          <Input
            type='text'
            placeholder='Reservation ID'
            name='id'
            value={checkout.id}
            onChange={handleChange}
          />

          <Button type='submit' onClick={handleCheckout}>
            Send
          </Button>
        </>
      </Banner>
    </Hero>
  );
};
