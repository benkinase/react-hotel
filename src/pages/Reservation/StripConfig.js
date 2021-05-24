import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Paragraph } from "../../components";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CARD_ELEMENT_OPTIONS } from "../../utils";

const PUBLISHABLE_KEY = process.env.REACT_APP_PUBLISHABLE_KEY;

const stripePromise = loadStripe(PUBLISHABLE_KEY);

const CheckoutForm = ({ handleBooking, token }) => {
  const stripe = useStripe();
  const elements = useElements();
  // handle error
  const [hasError, setHasError] = useState(null);
  const [loading, setLoading] = useState(false);
  // handle order/payment submission if user token
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) {
      setHasError("Please login to place order");
      return;
    }

    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      setHasError(result.error.message);
      setLoading(false);
    } else {
      // Send the token to your server.

      //setPayId(result.token.id);
      handleBooking(result.token);
      setLoading(false);
    }
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <Button width='100%' type='submit' disabled={!stripe}>
        {loading ? "loading" : "pay with stripe"}
      </Button>

      {hasError && <Paragraph color='var(--nice-red)'>{hasError}</Paragraph>}
    </form>
  );
};

export const StripePayment = ({ handleBooking, token }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm handleBooking={handleBooking} token={token} />
  </Elements>
);
