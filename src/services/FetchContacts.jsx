import axios from 'axios';

axios.defaults.baseURL = 'https://6481866b29fa1c5c50318910.mockapi.io';

export async function fetchContacs() {
  const response = await axios.get('/contacts');
  return response.data;
}
export async function addContact({name, number}) {
    const response = await axios.post('/contacts', {name, number});
    return response.data;
}
export async function deleteContact(id) {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
}

