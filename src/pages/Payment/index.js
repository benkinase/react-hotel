import React from "react";
import { Button } from "../../components";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const publishable_key =
  "pk_test_51IOdBIENNyF8krOvOfTQmAYOwPC1s5Qwep53vxXJTQ5rpZNgrI1WgjGm6RYyo6YGmZG0DQjPQZVp6akehQ65NbJQ002wE0M1lN";
const stripePromise = loadStripe(publishable_key);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) {
      console.log(error);
    }
    console.log(paymentMethod);
    //const id = paymentMethod.id;

    //handleBooking(id);
  };

  return (
    <form style={{ width: "250px" }} onSubmit={handleSubmit}>
      <CardElement />
      <Button width='100%' type='submit' disabled={!stripe}>
        Pay with Stripe
      </Button>
    </form>
  );
};

export const StripePay = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);
