import { ContactForm } from './ContactForm/ContactForm';
// import React, { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export function App() {
  return (
    <>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
}
