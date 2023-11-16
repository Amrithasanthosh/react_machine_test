import { getCountriesSuccess } from "./homeSlice";

export const getCountries = (stopLoader) =>
  async (dispatch) => {
    try {
      const res = await fetch("https://restcountries.com/v2/all?fields=name,region,flag ");
      const response = await res.json();
      if (response) {
        dispatch(getCountriesSuccess(response));
        stopLoader(false);
      }
    } catch (error) {
      console.log(error);
      stopLoader(false);
    }
  };