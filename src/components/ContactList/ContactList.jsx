import React, { useEffect } from 'react';
import {
  ListUl,
  ListLi,
  SpanName,
  SpanNumber,
  ListButton,
} from './ContactList.styled.jsx';
import { deleteContact, fetchContacs } from '../../redux/Contacts/contactsOperations.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts,selectFilteredContacts, selectIsLoading,selectError} from 'redux/Contacts/contactsSelector.jsx';

export function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const contactsList = useSelector(selectContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(()=>{
dispatch(fetchContacs());
},[dispatch])
  
  return (
    

    <ListUl>
      {isLoading && <p>Loading...</p> }
    {error && <p>Oops! Something went wrong.</p>}
      {contactsList.length > 0 &&
        filteredContacts.map(contact => {
          return (
            <ListLi key={contact.id}>
              <SpanName>{contact.name}</SpanName>:
              <SpanNumber>{contact.number}</SpanNumber>
              <ListButton onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </ListButton>
            </ListLi>
          );
        })}
    </ListUl>
  );
}
