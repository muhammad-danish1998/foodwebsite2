import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import { CheckoutOrder } from "../redux/store/actions/menuAction";

const cardElementOptions = {
  style: {
    base: {
      color: "#303238",
      with: "750px",
      fontSize: "25px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

function StripeNew({ totalAmount, validation, checkoutAPIPayload }) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const billing_details = {
      address: {
        city: userAddress.your_city,
        country: null,
        line1: userAddress.your_address,
        line2: null,
        postal_code: userAddress.your_zip,
        state: null,
      },
      email: userAddress.your_email,
      name: userAddress.your_name,
      phone: userAddress.your_phone,
    };

    setIsLoading(true);

    await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `http://localhost:5173/invoice`,
        },
      })
      .then((res) => {
        console.log("confirmPayment", res);
      })
      .catch((error) => {
        console.log("err", error);
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
        } else {
          setMessage("An unexpected error occurred.");
        }
      });

    setIsLoading(false);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    //   billing_details,
    // });

    if (paymentMethod) {
      toast.success(`Your payment was successful!`);
      userAddress.stripePaymentResponse = paymentMethod;
      dispatch(CheckoutOrder(userAddress, navigate));
    }

    // if (error) {
    //   toast.error(`Your payment was unsuccessful!`);
    //   console.log("error", error);
    // }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!stripe || !elements) {
  //     // Stripe.js has not yet loaded.
  //     // Make sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   setIsLoading(true);

  //   const { error } = await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       // Make sure to change this to your payment completion page
  //       return_url: "http://localhost:5137/invoice",
  //     },
  //   });

  //   // This point will only be reached if there is an immediate error when
  //   // confirming the payment. Otherwise, your customer will be redirected to
  //   // your `return_url`. For some payment methods like iDEAL, your customer will
  //   // be redirected to an intermediate site first to authorize the payment, then
  //   // redirected to the `return_url`.
  //   if (error.type === "card_error" || error.type === "validation_error") {
  //     setMessage(error.message);
  //   } else {
  //     setMessage("An unexpected error occurred.");
  //   }

  //   setIsLoading(false);
  // };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-5 w-[600px] rounded-2xl">
        <div className="w-full">
          {/* <form onSubmit={handleSubmit}>
        <div className="my-10">
          <PaymentElement options={cardElementOptions} />
        </div>
        <Button
          type="submit"
          disabled={!stripe || !elements}
          onClick={() => setUserInfoToCookies()}
          className="w-full p-2"
        >
          Pay With Card
        </Button>
      </form> */}
          <form id="payment-form" onSubmit={handleSubmit}>
            <LinkAuthenticationElement
              id="link-authentication-element"
              onChange={(e) => e.target.value && setEmail(e.target.value)}
            />
            <PaymentElement
              id="payment-element"
              options={paymentElementOptions}
            />
            <button
              className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-4 lg:text-lg text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              disabled={isLoading || !stripe || !elements}
              id="submit"
            >
              <span id="button-text">
                {isLoading ? (
                  <div className="spinner" id="spinner"></div>
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default StripeNew;
