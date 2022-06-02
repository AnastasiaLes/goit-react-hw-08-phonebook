import { ContactItem } from './ContactItem';

export const ContactList = ({ listOfContacts }) => {
  return (
    <div>
      <ul>
        {listOfContacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};
