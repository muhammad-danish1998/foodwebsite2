import React, { useState } from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  profileUser,
  updateUserProfile,
} from "../redux/store/actions/profileAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfileData } from "../redux/services/profile";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t, i18n } = useTranslation();
  const reduxState = useSelector((state) => state);
  // console.log(reduxState?.user?.userProfile, "redux state");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    user_id: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    zip: "",
    city: "",
    gender: "",
    profile_img: "",
  });

  let userProfile = reduxState?.user?.userProfile;

  useEffect(() => {
    if (reduxState?.user?.userProfileUpdate) {
      let {
        user_id,
        firstname,
        lastname,
        phone,
        email,
        zip,
        city,
        gender,
        profile_img,
      } = userProfile;
      setState({
        user_id,
        firstname,
        lastname,
        phone,
        email,
        zip,
        city,
        gender,
        // profile_img,
      });
    }
  }, [reduxState?.user?.userProfileUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "profile_img") {
      setState((state) => ({ ...state, ["profile_img"]: e?.target?.files[0] }));
    } else {
      setState((state) => ({ ...state, [name]: value }));
    }
  };

  const onSubmit = (e) => {
    let payload = {
      fname: state.firstname,
      lname: state.lastname,
      email: state.email,
      phone: state.phone,
      gender: state.gender,
      city: state.city,
      sessid: localStorage.getItem("uuid"),
      zip: state.zip,
      saveProfile: 1,
    };
    e.preventDefault();
    var data = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (typeof payload[key] == "object") {
        data.append(key, JSON.stringify(payload[key]));
      } else {
        data.append(key, value);
      }
    });
    console.log(state.profile_img, "img");
    data.append("profile_img", state.profile_img);
    dispatch(updateUserProfile(data));
  };

  useEffect(() => {
    dispatch(profileUser());
  }, []);

  // console.log(state, "state ");
  return (
    <div>
      <HeaderNavbar />
      <div className=" bg-white flex-col m-8 justify-center max-w-8xl sm:px-6 lg:px-1">
        <section className="text-gray-600 body-font relative">
          <div className="container  py-2 mx-auto">
            <div className="lg:w-5/6 md:w-2/3 ">
              <p className=" text-4xl font-bold text-black">{t("profile")}</p>

              <div className="flex flex-wrap -m-2 mt-5">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      {t("firstname")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="firstname"
                      value={state?.firstname}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      {t("lastname")}
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="lastname"
                      value={state?.lastname}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <div>
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("phoneNumber")}
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="phone"
                          id="phone-number"
                          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="+1 (555) 987-6543"
                          onChange={handleChange}
                          value={state?.phone}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      {t("emaiaddress")}
                    </label>
                    <input
                      disabled={true}
                      type="text"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={state?.email}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      {t("postcode")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="zip"
                      onChange={handleChange}
                      value={state?.zip}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      {t("city")}
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      onChange={handleChange}
                      value={state?.city}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("gender")}
                      </label>
                      <select
                        id="location"
                        name="gender"
                        onChange={handleChange}
                        value={state?.gender}
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        defaultValue="Canada"
                      >
                        <option>{t("male")}</option>
                        <option>{t("female")} </option>
                        <option> {t("other")} </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      class="block  text-sm font-medium text-gray-900 dark:text-white"
                      for="file_input"
                    >
                      {t("profileimage")}
                    </label>
                    <input
                      name="profile_img"
                      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      // value={state?.profile_img}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="lg:w-3/4 mt-8 mb-8 w-full">
                  <button
                    onClick={onSubmit}
                    className="inline-flex items-center px-8  border border-transparent bg-orange-500  py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {t("save")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
