import { useState, useEffect } from "react";
import CookiesModal from "../cookiesPopup/CookiesModal";
import { useTranslation } from "react-i18next";

function Cookies({ handleCookieBanner }) {
  const { t, i18n } = useTranslation();

  const [showCookieModal, setShowCookieModal] = useState(false);
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  const cookiesSetting = () => {
    setShowCookieModal(!showCookieModal);
  };

  const handleCookie = () => {
    localStorage.setItem("isCookieAccepted", true);
    handleCookieBanner(false);
  };

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem("isCookieAccepted");
    setIsCookieAccepted(isCookieAccepted);
    if (isCookieAccepted) {
      handleCookieBanner(false);
    }
  }, []);

  return (
    <div className="sticky bottom-0  w-full bg-[#D9D9D9] flex flex-col lg:flex-row items-center justify-between px-5 z-10">
      <div className="text-center">{t("cookiestext")}</div>
      <div className="my-3 flex items-center">
        <button
          onClick={() => cookiesSetting()}
          className="bg-[#FF0000] text-white px-4 py-2"
        >
          {t("cookiessetting")}
        </button>

        <button
          onClick={() => handleCookie()}
          className="bg-[#FF0000] text-white px-4 py-2 mx-2"
        >
          {t("onlyessentialcookies")}
        </button>

        <button
          onClick={() => handleCookie()}
          className="bg-[#FF0000] text-white px-4 py-2 "
        >
          {t("acceptallcookies")}
        </button>
      </div>

      {showCookieModal && <CookiesModal handleCookieModal={cookiesSetting} />}
    </div>
  );
}

export default Cookies;
