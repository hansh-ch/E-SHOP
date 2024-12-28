import axios from "axios";
import {
  SIGNIN_URL,
  SIGNOUT_URL,
  SIGNUP_URL,
  VERIFY_AUTH,
} from "../utils/linkConstants";

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
export const logoutUserAPI = async () => {
  const { data } = await axios.post(
    SIGNOUT_URL,
    {},
    {
      withCredentials: true,
    }
  );
  return data;
};

export const verifyAuth = async () => {
  const { data } = await axios.get(VERIFY_AUTH, {
    withCredentials: true,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate,proxy-revalidate",
      // Expires: "0",
    },
  });
  return data;
};
