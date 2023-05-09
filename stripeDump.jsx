import { Button } from "flowbite-react";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import axios from "axios";

export const Stripe = ({ totalAmount, validation, email, userAddress }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // dispatch(CheckoutOrder(payload, navigate));

  const onToken = async (token) => {
    console.log(token);
    // return;
    // navigate("/invoice");
    // window.location ='/invoice'

    await axios
      .post("/save-stripe-token", token)
      .then((res) => {
        console.log("/save-stripe-token RESPONSE", res);
        if (res.data.status === "success") {
          // navigate("/invoice");
          toast.success(`Order submitted`);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch("/save-stripe-token", {
    //   method: "POST",
    //   body: JSON.stringify(token),
    // }).then((response) => {
    //   response.json().then((data) => {
    //     toast.success(`Order submitted`);
    //     console.log(data);
    //   });
    // });
  };

  const setUserInfoToCookies = () => {
    Cookies.set("userAddressInfo", JSON.stringify(userAddress));
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
            stripeKey="pk_test_51MJbDYJuN3mm28fxwc5ryA1bb1Z4OlRGJFz6PgVE3bgOQSioswntN8VMhurSQvVvGtFQphH7lHn2v9wSZy4Dikcr006W1ktJjZ"
            amount={totalAmount * 100}
            description={`Your total amount is ${totalAmount}`}
            panelLabel="Pay Now"
            currency="EUR"
          >
            <Button
              onClick={() => setUserInfoToCookies()}
              className="w-[20rem] p-2"
              style={{ width: "750px" }}
            >
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
