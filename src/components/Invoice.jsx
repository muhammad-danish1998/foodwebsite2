import { useState, useEffect } from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutOrder } from "../redux/store/actions/menuAction";
// import {
//   Elements,
//   useStripe,
//   retrievePaymentIntent,
// } from "@stripe/react-stripe-js";
import Stripe from "stripe";

const stripePromise = loadStripe(
  "pk_test_51MuMjcHK08LMGtNrCtgv5nv9vByD16ZFwLPpOsdfURV5CA3Kmc8UqIyB8XyNyCjfSaEp5Vm5BPyssa0KA1EuKgVS00mfcaiFih"
);

// const stripe = new Stripe(
//   "pk_test_51MuMjcHK08LMGtNrCtgv5nv9vByD16ZFwLPpOsdfURV5CA3Kmc8UqIyB8XyNyCjfSaEp5Vm5BPyssa0KA1EuKgVS00mfcaiFih"
// );

const Invoice = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { checkoutPayloadData, msg } = useSelector((state) => state?.menu);
  const [paymentIntentResponse, setPaymentIntentResponse] = useState("");
  const [checkoutApiResponse, setCheckoutApiResponse] = useState("");

  async function retrievePaymentIntent(clientSecret) {
    console.log("retrieveStripePaymentIntent called 1");
    const stripe = await stripePromise;
    const paymentIntent = await stripe.retrievePaymentIntent(clientSecret);
    return paymentIntent;
  }

  const retrieveStripePaymentIntent = async (clientSecret, paymentIntentID) => {
    console.log("retrieveStripePaymentIntent called 2");
    // console.log("clientSecret", paymentIntent);
    // try {
    //   const paymentIntent = await retrievePaymentIntent(clientSecret);
    //   console.log("paymentIntent", paymentIntent);
    //   // setPaymentIntent(pi);
    // } catch (error) {
    //   console.log("Error fetching PaymentIntent:", error);
    // }
    // const response = await stripe.paymentIntents.retrieve(paymentIntent);
    // console.log(
    //   "🚀 ~ file: Invoice.jsx:36 ~ retrieveStripePaymentIntent ~ response:",
    //   response
    // );

    retrievePaymentIntent(clientSecret)
      .then((response) => {
        console.log("retrievePaymentIntent INNER", response.paymentIntent);
        checkoutPayloadData.RequestID = response.paymentIntent.id;
        console.log(
          "SENDING THIS DATA TO CHECKOUTORDER ACTION",
          checkoutPayloadData
        );
        dispatch(CheckoutOrder(checkoutPayloadData));
        setPaymentIntentResponse(response.paymentIntent);
      })
      .catch((error) => {
        console.error("retrievePaymentIntent", error);
      });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log("params", params);
    const paymentIntent = params.get("payment_intent");
    const clientSecret = params.get("payment_intent_client_secret");
    retrieveStripePaymentIntent(clientSecret, paymentIntent);
    if (paymentIntent) {
      // localStorage.setItem("paymentIntent", paymentIntent);
    }
  }, []);

  useEffect(() => {
    if (msg) {
      console.log("msg", msg);
      setCheckoutApiResponse(msg.order_number);
    }
  }, [msg]);

  return (
    <>
      <HeaderNavbar />
      <div className="flex flex-col justify-center h-96 items-center">
        <h1 className="text-4xl font-bold">You Are Awesome</h1>
        <p className="">Thank you so much For Deine Brstellung.</p>
        <h1 className="text-2xl lg:mt-14 mt-2 font-bold">
          {/* Order # {msg.order_number} */}
          {msg && <div>Order # {checkoutApiResponse}</div>}
        </h1>
        <Link
          to={"/"}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-lg bg-orange-600 text-white 
          font-bold mt-4 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Invoice;
