import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CheckoutOrder } from "../redux/store/actions/menuAction";
import { useDispatch } from "react-redux";

const style = {
  layout: "horizontal",
  shape: "rect",
};

const Paypal = ({ totalAmount, checkoutAPIPayload }) => {
  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePaypalPayment = (details) => {
    const name = details.payer.name.given_name;
    toast.success(`Transaction completed by ${name}`);
    const newData = checkoutAPIPayload;
    newData["PaymentType"] = "paypal";
    newData["RequestID"] = details.id;
    dispatch(CheckoutOrder(newData));
    navigate("/invoice");
  };

  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id": paypalClientId,
          currency: "EUR",
        }}
      >
        <PayPalButtons
          style={{ width: "800px", backgroundColor: "red" }}
          fundingSource="paypal"
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmount,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              console.log("PayPalButtons DETAILS", details);
              handlePaypalPayment(details);
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
