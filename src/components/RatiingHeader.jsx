import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}
export default function RatiingHeader({
  setFilterRating,
  filterRating,
  setShowModal,
}) {
  const { t, i18n } = useTranslation();

  const publishingOptions = [
    { title: `${t("restaurantratings")} 0.0`, value: "0.0", current: true },
    { title: `${t("restaurantratings")} 2.0`, value: "2.0", current: false },
    { title: `${t("restaurantratings")} 2.5`, value: "2.5", current: false },
    { title: `${t("restaurantratings")} 3.0`, value: "3.0", current: false },
    { title: `${t("restaurantratings")} 4.0`, value: "4.0", current: false },
    { title: `${t("restaurantratings")} 4.5`, value: "4.5", current: false },
    { title: `${t("restaurantratings")} 5.0`, value: "5.0", current: false },
  ];
  const [selected, setSelected] = useState(publishingOptions[0]);

  const handleSelect = (e) => {
    setSelected(e);
    setFilterRating(e);
    // console.log("ratiiiing", e);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    setSelected(filterRating);
  }, [filterRating]);

  useEffect(() => {
    publishingOptions.map((item) => {
      if (item.value == selected.value) {
        setSelected(item);
      }
    });
  }, [i18n.language]);

  return (
    <Listbox value={selected} onChange={(e) => handleSelect(e)}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">
            {" "}
            Change published status{" "}
          </Listbox.Label>
          <div className="relative">
            <div className="inline-flex divide-x rounded-md shadow-sm">
              <div className="inline-flex divide-x rounded-md shadow-sm bg-gray-100">
                <div
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="flex items-center rounded-l-2xl bg-black p-2 pl-3 pr-4 text-white shadow-sm"
                >
                  {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                  <p className="ml-2 font-bold">{selected.title}</p>
                  <i className="fa-solid fa-star ml-2 mb-0 text-xs"></i>
                </div>
                <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-2xl bg-black p-2 text-sm font-medium text-white border-0 focus:outline-none">
                  <span className="sr-only">Change published status</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {publishingOptions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-black" : "text-gray-900",
                        "cursor-default select-none p-4 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? "font-semibold" : "font-normal"
                            }
                          >
                            {option.title}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? "text-white" : "text-indigo-500"
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
