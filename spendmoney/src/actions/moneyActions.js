import axios from "axios";
import { allTypes } from "../actionTypes";

export const fetchCardItems = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    await axios
      .get("http://localhost:3000/cardItems")
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
  };
};

export const moneyAction = (val) => {
  return { type: allTypes.moneyTypes.MONEY_CHANGE, payload: val };
};
export const fetchRequest = () => {
  return { type: allTypes.moneyTypes.FETCH_REQUEST };
};
export const fetchSuccess = (data) => {
  return { type: allTypes.moneyTypes.FETCH_SUCCESS, payload: data };
};
export const fetchError = (error) => {
  return { type: allTypes.moneyTypes.FETCH_ERROR, payload: error };
};
