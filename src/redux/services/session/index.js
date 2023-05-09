import axios from "axios";
import { axiosUrl } from "../../../apiUrl";

export const getSessionData = (sessid) => {
    return new Promise((ressolve, reject) => {
      const endpoint = axiosUrl(`/sess-view4.php?sessid=${sessid}`);
  
      axios
        .get(endpoint, {
        })
        .then((res) => {         
          ressolve((res.data));
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  };