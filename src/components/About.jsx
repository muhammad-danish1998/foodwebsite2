import React, { useState } from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeaderNavbar />
      <div
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
        }}
        className="fontfamily max-w-7xl lg:p-0 p-2 mt-12 mb-8 lg:h-96 mx-auto flex flex-col "
      >
        <h1 className="text-center text-4xl  font-bold">{t("pgabouttitle")}</h1>
        <p
          className=" fontfamily "
          style={{
            fontWeight: "bolder",
          }}
        >
          {t("pgabouttitle")}
        </p>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          {t("pgaboutpara1")}
        </p>
      </div>

      <Footer />
    </>
  );
};

export default About;
