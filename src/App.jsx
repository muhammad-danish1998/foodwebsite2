import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSectionThree from "./components/HeaderSectionThree";
import HeaderSectiontwo from "./components/HeaderSectiontwo";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { ToastContainer } from "react-toastify";
// import SnackbarProvider from 'react-simple-snackbar'
import "react-toastify/dist/ReactToastify.css";
import Cookies from "./components/cookiesBanner/CookiesBanner";

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleCookieBanner = (bool) => {
    setShowCookieBanner(bool);
  };

  return (
    // <Provider store={store}>
    <div className="bg-pink-100">
      {/* <ToastContainer position="top-center" /> */}
      <Header />

      <HeaderSectiontwo />
      <HeaderSectionThree />
      <Footer />

      {showCookieBanner && <Cookies handleCookieBanner={handleCookieBanner} />}
    </div>
    //  </Provider>
  );
}

export default App;
