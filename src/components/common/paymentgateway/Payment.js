import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
    const onToken = (token) =>{
        console.log(token);
    }
  return (
    <div>
      <StripeCheckout
        token={onToken}
        currency="Inr"
        amount="1199900"
        stripeKey="sk_test_51N7v9tSHBUGTQEr9w8hiaLxvKrNR0lTKB3JqDa3EU2fJ0RkVMOTFl6ktoEUG5YQ0wSQdir5tY3rTungAEE763CeV004GsUJN6v"
      />
    </div>
  );
};

export default Payment;
