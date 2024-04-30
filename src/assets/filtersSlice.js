// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     filter: "",
//   },
//   reducers: {
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { setFilter } = filtersSlice.actions;

// export default filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
