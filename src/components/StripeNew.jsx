import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import { saveCheckoutApiPayload } from "../redux/store/actions/menuAction";
import { useDispatch, useSelector } from "react-redux";

function StripeNew({ checkoutAPIPayload, setShowStripePopup }) {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showStripeForm, setShowStripeForm] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      setShowStripeForm(false);
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `http://localhost:5173/invoice`,
      },
      redirect: "if_required",
    });

    if (
      error &&
      (error.type === "card_error" || error.type === "validation_error")
    ) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "processing") {
      setMessage("Your payment is processing.");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setIsLoading(false);
      toast.success(`Your payment was successful!`);
      const newData = checkoutAPIPayload;
      newData["PaymentType"] = "stripe";
      dispatch(saveCheckoutApiPayload(newData));
      navigate(
        `/invoice?payment_intent=${paymentIntent.id}&payment_intent_client_secret=${paymentIntent.client_secret}&redirect_status=${paymentIntent.status}}`
      );
    } else {
      setIsLoading(false);
      setMessage("An unexpected error occurred.");
      toast.error("An unexpected error occurred.");
    }
  };

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-10">
      <div className="bg-white p-5 w-[600px] rounded-2xl">
        <div className="w-full">
          {showStripeForm && (
            <>
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
                    {isLoading === true ? (
                      <div className="flex justify-center items-center">
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-10 h-10 mr-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    ) : (
                      "Pay now"
                    )}
                  </span>
                </button>
              </form>
              <button
                onClick={() => setShowStripePopup(false)}
                className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-4 lg:text-lg text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StripeNew;
