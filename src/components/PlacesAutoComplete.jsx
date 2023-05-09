import React, { useEffect, useState } from "react";
import { getZipCode, getGeocode, getDetails } from "use-places-autocomplete";
import AutoComplete from "react-google-autocomplete";
import { GoogleMapApiKey } from "./Header";

function PlacesAutoComplete({ onPlaceSelect, zipCode, address }) {
  const [addressData, setAddressData] = useState("");
  console.log("localStorage.getItem", localStorage.getItem("your_street_name"));
  // useEffect(()=> {
  //     if(localStorage.getItem("your_street_name") == null){
  //         localStorage.setItem("your_zip", '');
  //         localStorage.setItem("your_street_name",'')
  //     }

  // },[])

  const handlePlaceSelected = (data) => {
    console.log(data, "data");
    if (data.place_id) {
      getGeocode({
        placeId: data.place_id,
      })
        .then((result) => {
          const city = getCity(result[0]?.address_components);
          localStorage.setItem("city", city);
          console.log("result------->", result[0].formatted_address);
          const zipCode = getZipCode(result[0], false);
          localStorage.setItem("your_zip", zipCode);
          onPlaceSelect({
            ...data,
            zipCode,
            city,
          });
        })
        .catch((e) => console.log(e));
    }
  };
  const getCity = (address_components = []) => {
    const city = address_components.find((component) =>
      component.types.includes("locality")
    );
    return city?.long_name || "";
  };
  let streetName = localStorage.getItem("your_street_name");

  useEffect(() => {
    if (streetName?.toLowerCase() != "please select your address") {
      setAddressData(streetName);
    }
  }, []);
  console.log(addressData);
  return (
    <AutoComplete
      style={{ width: "100%" }}
      // placeholder={`${address && zipCode}  ${zipCode,address} : "Add Location" `}
      // value = {address ? `${zipCode},${address}}` : ""}
      value={addressData}
      placeholder={"please select your address"}
      defaultValue={addressData}
      inputAutocompleteValue={`${address}`}
      className="block   w-full border-0 outline-none   py-3 text-base   sm:flex-1"
      apiKey={GoogleMapApiKey}
      options={{
        types: [],
      }}
      onChange={(e) => {
        setAddressData(e.target.value);
      }}
      onPlaceSelected={handlePlaceSelected}
    />
  );
}

export default PlacesAutoComplete;
