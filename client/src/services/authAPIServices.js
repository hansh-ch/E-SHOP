import axios from "axios";
import { SIGNIN_URL, SIGNUP_URL } from "../utils/linkConstants";

export const signupUserAPI = async (formdata) => {
  const { data } = await axios.post(SIGNUP_URL, formdata, {
    withCredentials: true,
  });
  console.log(data);
  return data;
};
export const loginUserAPI = async (formdata) => {
  const { data } = await axios.post(SIGNIN_URL, formdata, {
    withCredentials: true,
  });
  return data;
};
