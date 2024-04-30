// import { createSlice } from "@reduxjs/toolkit";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     contacts: [],
//   },
//   reducers: {
//     addContact(state, action) {
//       state.contacts = [...state.contacts, action.payload];
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter((el) => el.id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export default contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
