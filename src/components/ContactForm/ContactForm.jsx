import { Form, Label, Input, Submit } from './ContactForm.styled.jsx';
import { addContact } from '../../redux/Contacts/contactsOperations.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/Contacts/contactsSelector.jsx';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    const contact = {
      name: name.value,
      number: number.value,
    };
    if (contacts.some(item => item.name === name.value)) {
      alert('Nope, you have it...');
      e.currentTarget.reset();
      return true;
    }
    dispatch(addContact(contact));
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Submit type="submit">Submit</Submit>
    </Form>
  );
};
