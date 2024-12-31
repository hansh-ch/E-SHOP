import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productLists: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProducts: (state, action) => {},
  },
});

export default productSlice.reducer;
