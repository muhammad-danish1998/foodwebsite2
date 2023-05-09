import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import {
  useNavigate,
  useParams,
  useRoutes,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import StarsRating from "stars-rating";
import {
  addReviewAction,
  getSubmitReviewDataAction,
} from "../redux/store/actions/reviewAction";
import { useEffect } from "react";

const SubmitReview = () => {
  const route = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  let resid = searchParams.get("resid");

  const redux = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access_token = localStorage.getItem("uuid");
  const [state, setState] = useState({
    review_key: "",
    resturent_id: "",
    shownameas: "",
    delivery_time: "",
    rating_data: "",
    drating_data: "",
    user_review: "",
    sessid: access_token,
  });
  let review_hash_key = searchParams.get("reviewkey");
  console.log(redux?.menu?.submitReviewData, "redux in submit");
  let reviewDetail = redux?.menu?.submitReviewData;
  useEffect(() => {
    if (review_hash_key) {
      setState((prev) => ({
        ...prev,
        ["review_key"]: review_hash_key,
        shownameas: reviewDetail?.shownameas?.showclientname,
        resturent_id: resid,
      }));
    }
  }, [review_hash_key, reviewDetail]);
  console.log(route.orderid, "order id in route");
  const handleRating = (rate, name) => {
    setState((prev) => ({
      ...prev,
      [name]: rate,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(state, "state");
  const onSubmit = () => {
    let success = () => {
      setState({
        review_key: "",
        resturent_id: "",
        shownameas: "",
        delivery_time: "",
        rating_data: "",
        drating_data: "",
        user_review: "",
        sessid: access_token,
      });
      navigate("/myreview");
    };
    dispatch(addReviewAction(state, success));
  };

  useEffect(() => {
    dispatch(getSubmitReviewDataAction(access_token));
  }, []);
  console.log(redux, "hh");
  return (
    <div className="">
      <HeaderNavbar />
      <div className="flex min-h-full bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
        <h1 className="text-4xl font-bold">Submit Review</h1>
        <div>
          <select
            id="location"
            name="shownameas"
            className="mt-8 block lg:w-3/4 w-full   rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Canada"
            value={state?.shownameas}
            onChange={(e) => {
              handleChange(e);
            }}
            style={{
              fontWeight: "bold",
            }}
          >
            <option
              value={reviewDetail?.shownameas?.showclientname}
              style={{
                fontWeight: "bold",
              }}
            >
              {reviewDetail?.shownameas?.showclientname}
            </option>
            <option
              value={reviewDetail?.shownameas?.showanonymous}
              style={{
                fontWeight: "bold",
              }}
            >
              {reviewDetail?.shownameas?.showanonymous}
            </option>
          </select>
        </div>
        <div>
          <select
            style={{
              fontWeight: "bold",
            }}
            id="location"
            name="delivery_time"
            className="mt-4 block lg:w-3/4 w-full  rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Select Duration"
            value={state?.delivery_time}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            {reviewDetail?.delivery_time?.map((time, index) => (
              <>
                {reviewDetail?.delivery_time?.map((option) => (
                  <option
                    key={Object.keys(option)[0]}
                    value={Object.keys(option)[0]}
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {Object.values(option)[0]}
                  </option>
                ))}
              </>
            ))}
          </select>
        </div>
        <div className="flex justify-between lg:w-3/4 w-full mt-8">
          <p style={{ fontWeight: "bolder" }}>Quality</p>
          <div className="w-[100%]">
            <span className="w-full flex items-center justify-end">
              <StarsRating
                value={state.rating_data}
                count={5}
                color2={"#F3BE00"}
                size="30"
                onChange={(e) => handleRating(e, "rating_data")}
                half={false}
              />
            </span>
            {/* <span className="flex items-center ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 "
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4  lg:ml-2"
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4  lg:ml-2"
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4  lg:ml-2"
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4  lg:ml-2"
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </span> */}
          </div>
        </div>
        <div className="flex justify-between lg:w-3/4 w-full mt-8 ">
          <p style={{ fontWeight: "bolder" }}>Delivery</p>
          <p>
            <span className="w-full flex items-center justify-end">
              <StarsRating
                value={state.drating_data}
                count={5}
                color2={"#F3BE00"}
                size="30"
                onChange={(e) => handleRating(e, "drating_data")}
                half={false}
              />
            </span>
            {/* <span className="flex items-center ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 "
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4  lg:ml-2"
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4  lg:ml-2"
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4  lg:ml-2"
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4  lg:ml-2"
                viewBox="0 0 24 24"
                style={{ color: "#FF8A00" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </span> */}
          </p>
        </div>
        <div
          className="flex justify-between lg:w-3/4 w-full mt-8 relative"
          data-te-input-wrapper-init
        >
          <textarea
            type="text"
            name="user_review"
            // id="exampleFormControlTextarea1"
            value={state.user_review}
            onChange={handleChange}
            placeholder="write description"
            required
            className="peer block min-h-[5rem] bg-gray-200 border-gray-300 w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            style={{ resize: "none" }}
          />
          {/* <label
            for="exampleFormControlTextarea1"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[2rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Write Description
          </label> */}
        </div>
        <div className="flex justify-end lg:w-3/4 mt-8 w-full">
          <button
            disabled={
              !state.delivery_time ||
              !state.drating_data ||
              !state.shownameas ||
              !state.rating_data
            }
            onClick={onSubmit}
            className="inline-flex items-center px-8   py-2 text-larger font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            style={{
              background: "rgba(255, 0, 0, 1)",
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitReview;
