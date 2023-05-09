import React from "react";
import CheckBox from "../../common/checkBox/CheckBox";
import { useTranslation } from "react-i18next";

function CookiesModal({ handleCookieModal }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#FFF4F4] p-5 w-[460px]">
        <div className="flex flex-col">
          <h1 className="text-md font-bold text-left">WIR verwenden Cookies</h1>
          <p className="text-xs my-4">
            {t("weusecookiestopersonalizecontent")}
          </p>
        </div>
        <div className="my-4">
          <div className="flex items-start justify-between w-full">
            <div className="w-50">
              <CheckBox label={t("notwindig")} />
            </div>
            <div className="w-[40%]">
              <CheckBox label={t("praferenzen")} />
            </div>
          </div>
          <div className="flex items-start justify-between w-full mt-5">
            <CheckBox label={t("statistiken")} />
            <div className="w-[40%]">
              <CheckBox label={t("marketing")} />
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <button
            onClick={handleCookieModal}
            className="bg-[#AE6E6E] text-black font-bold px-4 py-1 mx-[4rem] mt-3 mb-3"
          >
            {t("allowallcookies")}
          </button>

          <button
            onClick={handleCookieModal}
            className="bg-[#D9D9D9] text-black font-bold px-4 py-1 mx-[4rem]"
          >
            {t("confirmselection")}
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <p className="text-center font-light ">{t("viewdetails")}</p>
          <button className="ml-2">
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookiesModal;
