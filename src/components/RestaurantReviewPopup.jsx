import React, { useEffect } from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAction } from "../redux/store/actions/orderAction";
import { useNavigate } from "react-router-dom";
import { getReviewsAction } from "../redux/store/actions/reviewAction";
import StarsRating from "stars-rating";
import PopupCard from "./CartPopup";
import { Dialog, Transition } from "@headlessui/react";

const RestaurantReviewPopup = ({ setPopup, popupOpen, reviews, resName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  let myReviews = state?.menu?.myReviews;
  // console.log(myReviews, "redux");
  const access_token = localStorage.getItem("uuid");

  useEffect(() => {
    dispatch(getReviewsAction("", access_token));
  }, []);

  return (
    <Dialog
      className="relative z-10 "
      onClose={() => {
        setPopup(false);
      }}
      open={popupOpen}
    >
      <div className="fixed  inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center  p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative border-2 w-full   transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div className="flex min-h-full bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
              <h1 className="font-bold text-[2rem]">{resName}</h1>

              {reviews?.length > 0 ? (
                reviews?.map((review, index) => (
                  <div className="mt-8">
                    <p className="mt-4 font-bold">{review?.username}</p>

                    <p className="mt-4 font-bold">{review?.date}</p>
                    <div className="flex justify-between lg:w-3/4 w-full mt-4">
                      <p className="flex flex-col justify-center font-bold">
                        Quality
                      </p>
                      <p>
                        <span className="w-full flex items-center justify-end">
                          <StarsRating
                            value={review?.foodqualityrating}
                            count={5}
                            color2={"#F3BE00"}
                            size="30"
                            half={false}
                            edit={false}
                          />
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between lg:w-3/4 w-full mt-4">
                      <p className="flex flex-col justify-center font-bold">
                        Delivery
                      </p>
                      <span className="w-full flex items-center justify-end">
                        <StarsRating
                          value={review.deliveryrating}
                          count={5}
                          color2={"#F3BE00"}
                          size="30"
                          half={false}
                          edit={false}
                        />
                      </span>
                    </div>
                    {reviews?.length - 1 != index && (
                      <hr className="mt-4 lg:w-3/4 w-full" />
                    )}
                  </div>
                ))
              ) : (
                <div className="mt-[1rem] justify-center flex">
                  No Reviews yet!
                </div>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default RestaurantReviewPopup;
