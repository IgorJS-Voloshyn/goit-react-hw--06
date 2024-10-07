import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});

export const filterReducer = filterSlice.reducer;
export const filterSelector = (state) => state.filters.name;
