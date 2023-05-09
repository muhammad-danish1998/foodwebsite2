import React, { useState, useEffect } from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAction } from "../redux/store/actions/orderAction";
import { useNavigate } from "react-router-dom";
import { getReviewsAction } from "../redux/store/actions/reviewAction";
import StarsRating from "stars-rating";
import Pagination from "../common/pagination/Pagination";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Myreview = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  let myReviews = state?.menu?.myReviews;
  // console.log(myReviews, "redux");
  const access_token = localStorage.getItem("uuid");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page === "Next") {
      setCurrentPage(currentPage + 1);
    } else if (page === "Previous") {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(page);
    }
  };

  // useEffect(() => {
  //   dispatch(getReviewsAction(currentPage, access_token));
  // }, []);

  useEffect(() => {
    dispatch(getReviewsAction(currentPage, access_token));
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div>
      <HeaderNavbar />
      <div className="flex min-h-full bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
        <h1 className="text-4xl font-bold">{t("myreviews")}</h1>
        {myReviews?.my_reviews?.length > 0 ? (
          myReviews?.my_reviews?.map((review) => (
            <div className="mt-8">
              <h2 className="font-bold text-xl">{review?.restname}</h2>

              <div className="review-date-time flex mt-4">
                <p className="text-gray-500">{review?.date}</p>
                <p className="ml-5 text-gray-500">
                  {moment(review?.time, "HH:mm").format("HH:MM")}
                </p>
              </div>

              <div className="flex justify-between lg:w-3/4 w-full mt-4">
                <p className="flex flex-col justify-center">{t("delivery")} </p>
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

              <div className="flex justify-between lg:w-3/4 w-full mt-4">
                <p className="flex flex-col justify-center">{t("quality")} </p>
                <p>
                  <span className="w-full flex items-center justify-center">
                    <StarsRating
                      value={review?.qualityrating}
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
                <textarea
                  id="message"
                  rows="4"
                  disabled={true}
                  value={review?.content}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <hr className="mt-4 lg:w-3/4 w-full" />
            </div>
          ))
        ) : (
          <div className="mt-[1rem] justify-center flex">
            {t("noreviewfound")}
          </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        <Pagination
          pagination={myReviews.pagination}
          pageHandler={handlePageChange}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Myreview;
