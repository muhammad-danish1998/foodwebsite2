import { useState } from "react";
import Input from "../../common/input/Input";
import { useDispatch } from "react-redux";
import { recommendRestaurantAction } from "../../redux/store/actions/restaurantAction";
import { toast } from "react-toastify";
import { t } from "i18next";

const RestaurantPopup = ({
  title,
  handlePopup,
  isAllowPhoneNumber,
  profile,
}) => {
  const dispatch = useDispatch();
  const [restaurantFields, setRestaurantFields] = useState({
    restaurantName: "",
    postCode: "",
    city: "",
    restaurantNumber: "",
    emailAddress: "",
    note: "",
  });

  console.log(title, handlePopup, isAllowPhoneNumber, profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    let flag = false;
    const uuid = localStorage.getItem("uuid");

    const payload = {
      postal_code: Number(restaurantFields.postCode),
      user_note: restaurantFields.note,
      your_restaurant_name: restaurantFields.restaurantName,
      your_restaurant_email: restaurantFields.emailAddress,
      city: restaurantFields.city,
      saveProfile: profile,
      sessid: uuid,
    };

    // If User clicks on become a partner then add phone number in payload
    if (isAllowPhoneNumber) {
      payload.your_restaurant_phone = Number(restaurantFields.restaurantNumber);
    }

    Object.keys(payload).forEach((key) => {
      if (restaurantFields[key] !== "") {
        flag = true;
      }
    });

    if (flag) {
      dispatch(
        recommendRestaurantAction(payload, () => {
          setRestaurantFields({
            restaurantName: "",
            postCode: "",
            city: "",
            restaurantNumber: "",
            emailAddress: "",
            note: "",
          });
          handlePopup(false);
        })
      );
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-5 w-[660px] rounded-2xl">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-left">{title}</h1>
        </div>

        <div className="mt-8">
          <Input
            type="text"
            label={t("yourrestaurantname")}
            name="restaurantName"
            id="restaurantName"
            value={restaurantFields.restaurantName}
            onChange={handleChange}
          />
        </div>

        <div className="postcode-city flex">
          <div className="mt-8">
            <Input
              type="number"
              label="Postcode"
              name="postCode"
              id="postCode"
              value={restaurantFields.postCode}
              onChange={handleChange}
            />
          </div>
          <div className="mt-8 ml-10 w-full">
            <Input
              type="text"
              label={t("city")}
              name="city"
              id="city"
              value={restaurantFields.city}
              onChange={handleChange}
            />
          </div>
        </div>

        {isAllowPhoneNumber && (
          <div className="mt-8">
            <Input
              type="number"
              label={t("yourrestaurantphone")}
              name="restaurantNumber"
              id="restaurantNumber"
              value={restaurantFields.restaurantNumber}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="mt-8">
          <Input
            type="text"
            label={t("yourrestaurantemail")}
            name="emailAddress"
            id="emailAddress"
            value={restaurantFields.emailAddress}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8">
          <Input
            type="text"
            label={t("note")}
            name="note"
            id="note"
            value={restaurantFields.note}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8">
          <div className="flex justify-end">
            <button
              onClick={() => handlePopup(false)}
              className="inline-flex items-center justify-end px-16 border border-transparent bg-orange-500 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {t("close")}
            </button>
            <button
              onClick={onSubmit}
              className="ml-5 inline-flex items-center justify-end px-16 border border-transparent bg-orange-500 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPopup;
