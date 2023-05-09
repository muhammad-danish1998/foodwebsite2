import { Fragment, useState, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function RestaurantInfoPopup({ open, setOpen, detail }) {
  const latitude = Number(detail?.restlat);
  const longitude = Number(detail?.restlong);

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBwhHw0I3SUNIIMq0HaWkIx8BSbmHjooeA",
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center  justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  transform overflow-hidden rounded-lg bg-white  pb-4  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm ">
                <div>
                  <h1
                    className="p-4 mt-1"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <i class="fa fa-duotone fa-circle-xmark mr-4"></i>
                    Restaurant Info
                  </h1>
                </div>
                <div className="h-96">
                  <div>
                    {isLoaded && (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={18}
                      >
                        <Marker
                          position={{
                            lat: latitude,
                            lng: longitude,
                          }}
                          animation="drop"
                        />
                        <></>
                      </GoogleMap>
                    )}
                  </div>
                </div>
                <div
                  className=" p-2 mb-2"
                  style={{
                    background: "rgba(190, 183, 183, 0.29)",
                    fontWeight: "bolder",
                    fontSize: "larger",
                  }}
                >
                  <p className="text-2xl">{detail?.restname}</p>
                </div>
                <div
                  className="py-5 px-2"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <p className="mb-2 p-2">
                    {/* Brandenburger Straße 11, <br />
                    67065, Ludwigshafen <br />
                    Legal Representative: Hamayoon Rasoly */}
                    {detail?.restaddress?.split(",", 1)} <br />
                    {detail?.restzip}, {detail?.restcity}
                    <br />
                    {detail?.restaddress?.split(",", 3)[2]}
                    <br />
                  </p>
                  <a
                    className="p-2 text-blue-500"
                    href="#"
                    style={{ textDecoration: "underline" }}
                  >
                    Info@Liefermars.De
                  </a>
                  <br />
                  <a
                    style={{ textDecoration: "underline" }}
                    className="p-2 text-blue-500 "
                    href="#"
                  >
                    {" "}
                    Https://Liefermars.De
                  </a>
                </div>
                <div
                  className="p-2 mb-2"
                  style={{
                    background: "rgba(190, 183, 183, 0.29)",
                    fontWeight: "bolder",
                    fontSize: "larger",
                  }}
                >
                  <p className="text-2xl">Delivery Costs</p>
                </div>
                <div
                  className="flex justify-between py-3 px-4"
                  style={{
                    fontWeight: "bold",
                    fontSize: "large",
                  }}
                >
                  <p>Minimum Order Amount</p>
                  <p>{detail?.minorderamount} €</p>
                </div>
                <div
                  className="flex justify-between py-1 px-5"
                  style={{
                    fontWeight: "bold",
                    fontSize: "large",
                  }}
                >
                  <p>Delivery Costs</p>
                  <p>{detail?.deliverycost} €</p>
                </div>
                <div
                  style={{
                    background: "rgba(190, 183, 183, 0.29)",
                    fontWeight: "bolder",
                    fontSize: "larger",
                  }}
                  className=" p-2 mb-2"
                >
                  <p>Opening Hours</p>
                </div>
                {detail?.resttimingsarr?.map((obj) => (
                  <div
                    className="flex justify-between py-3 "
                    style={{
                      borderBottom: "1px solid gray",
                      margin: "0 30px 0 30px",
                    }}
                  >
                    <p className="">{obj?.day}</p>
                    <p>{obj?.delivery}</p>
                  </div>
                ))}

                <div className="flex justify-end mt-2 p-2">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
