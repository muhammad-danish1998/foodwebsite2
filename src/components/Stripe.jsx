import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

export const Stripe = ({ totalAmount, validation, email }) => {
  const navigate = useNavigate();
  const onToken = (token) => {
    navigate("/invoice");
    // window.location ='/invoice'
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        toast.success(`Order submitted`);
        console.log(data);
      });
    });
  };

  return (
    <button
      onClick={() => {
        validation();
      }}
      disabled={() => (validation() ? false : true)}
    >
      {validation() ? (
        <div className="w-[100%]">
          <StripeCheckout
            token={onToken}
            email={email}
            // billingAddress
            // shippingAddress
            stripeKey=""
            amount={totalAmount * 100}
            description={`Your total amount is ${totalAmount}`}
            panelLabel="Pay Now"
            currency="EUR"
          >
            <Button className="w-[20rem] p-2" style={{ width: "750px" }}>
              Pay With Card
            </Button>
          </StripeCheckout>
        </div>
      ) : (
        <>
          <button className="text-red-500">
            Please complete the required field to use Stripe!
          </button>
        </>
      )}
    </button>
  );
};
