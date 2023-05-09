import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";

const Impressum = () => {
  return (
    <div>
      <HeaderNavbar />
      <div>
        <div className="bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
          <h1 className="text-4xl font-bold mb-8 text-center">Impressum</h1>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-1">
            <>
              <div className="relative flex items-center space-x-3   bg-white px-6 py-5 shadow-sm ">
                <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />

                  <p className="truncate text-large text-gray-500">
                    Kontaktdaten des Verantwortlichen <br /> [Unternehmensname
                    mit Rechtsformzusatz]
                    <br /> [Gesetzlicher Vertreter]
                    <br /> [Anschrift]
                    <br />
                    [Telefonnummer]
                    <br /> [Faxnummer]
                    <br /> [E-Mail-Adresse] <br /> Wir begrüßen Sie auf unserer
                    Webseite. Der Schutz Ihrer Daten ist uns sehr wichtig.
                    Deshalb zeigen wir Ihnen nachfolgend auf, wie wir Ihre
                    personenbezogenen Daten verarbeiten.
                    <br /> Allgemeine Verarbeitung von Besucherdaten <br /> Die
                    Nutzung unserer Webseite ist grundsätzlich ohne die Angabe
                    personenbezogener Daten möglich.
                    <br /> Wir weisen jedoch darauf hin, dass auch <br /> in
                    diesem Fall Zugriffsdaten erhoben und in den <br />{" "}
                    Server-Log-Files gespeichert werden. Hierbei handelt es sich
                    insbesondere um folgende
                    <br /> Daten:
                    <br />  Browsertyp / Ihre Browserversion,
                    <br />  Betriebssystem,
                    <br />  die Webseite, von der aus Sie uns besuchen,
                    <br />  Datum und Zeitpunkt des Besuchs,
                    <br />  Ihre IP-Adresse.
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
