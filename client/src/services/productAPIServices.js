import axios from "axios";
import {
  CREATE_PRODUCT_URL,
  DELETE_PRODUCT_URL,
  EDIT_PRODUCT_URL,
  GET_ALL_PRODUCT_URL,
} from "@/utils/linkConstants";

export const getAllProductAPI = async () => {
  const { data } = await axios.get(GET_ALL_PRODUCT_URL, {
    withCredentials: true,
  });
  return data;
};

/*==> Create Product ==*/
export const createProductAPI = async (formdata) => {
  const { data } = await axios.post(CREATE_PRODUCT_URL, formdata, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  console.log(data);
  return data;
};

/*==> Edit Product ==*/
export const editProductAPI = async (id, formdata) => {
  const { data } = await axios.put(`${EDIT_PRODUCT_URL}/${id}`, formdata, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  console.log(data);
  return data;
};

/*==> Delete Product ==*/
export const deleteProductAPI = async (id) => {
  console.log(id);
  const { data } = await axios.delete(`${DELETE_PRODUCT_URL}/${id}`, {
    withCredentials: true,
  });
  console.log(data);
  return data;
};
