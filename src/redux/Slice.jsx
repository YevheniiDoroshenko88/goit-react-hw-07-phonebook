// import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
// import { nanoid } from 'nanoid';

// export const contactSlice = createSlice({
//   name: 'contact',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     setFilter: {
//       reducer(state, action) {
//         console.log(state.filter);
//         console.log(action.payload);
//         state.filter = action.payload;
//       },
//     },

//     addContacts: {
//       reducer(state, action) {
//         console.log(state.items);
//         state.items.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             id: nanoid(),
//             name: name,
//             number: number,
//           },
//         };
//       },
//     },
//     removeContact: {
//       reducer(state, action) {
//         const index = state.items.findIndex(item => item.id === action.payload);
//         state.items.splice(index, 1);
//       },
//       prepare(id) {
//         return {
//           payload: id,
//         };
//       },
//     },
//   },
// });
// const persistConfig = {
//   key: 'root',
//   storage,
// };
// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

// export const { setFilter, addContacts, removeContact } = contactSlice.actions;
