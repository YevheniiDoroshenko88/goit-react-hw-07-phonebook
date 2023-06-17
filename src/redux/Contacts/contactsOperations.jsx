// import * as FetchContacts from '../../services/FetchContacts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6481866b29fa1c5c50318910.mockapi.io';

// export async function fetchContacs() {
//   const response = await axios.get('/contacts');
//   return response.data;
// }
// export async function addContact({name, number}) {
//     const response = await axios.post('/contacts', {name, number});
//     return response.data;
// }
// export async function deleteContact(id) {
//     const response = await axios.delete(`/contacts/${id}`);
//     return response.data;
// }


export const fetchContacs = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await axios.get('/PhoneContact');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, {rejectWithValue}) => {
    try {
      const {data} = await axios.post('/PhoneContact', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
    try {
      const {data} = await axios.delete(`/PhoneContact/${id}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
