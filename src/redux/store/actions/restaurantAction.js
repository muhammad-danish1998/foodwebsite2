import { toast } from "react-toastify";
import { recommendRestaurant } from "../../services/restaurantServices";

export const recommendRestaurantAction =
  (state, success) => async (dispatch) => {
    console.log("recommendRestaurantAction called", state);
    try {
      const response = await recommendRestaurant(state);
      if (response?.type == "success") {
        console.log("restaurantAction", response);
        toast.success(response?.msg);
        success && success();
      }
    } catch (err) {
      toast.error(err.data.msg);
    }
  };
