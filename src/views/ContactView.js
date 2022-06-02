import { NameField } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { FilterField } from 'components/Filter/filter';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useState } from 'react';
import {
  ContactsContainer,
  ContactsTitle,
  ContactsColumn,
} from './ContactsView.styled';

export default function ContactsView() {
  const [search, setSearch] = useState('');
  const { data, isFetching } = useGetContactsQuery();

  const normalizedFilter = search.toLocaleLowerCase();
  const visibleContacts = data?.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );

  const addFilter = event => {
    setSearch(event.currentTarget.value);
  };

  return (
    <ContactsContainer>
      <ContactsColumn>
        <NameField listOfContacts={data} />
      </ContactsColumn>

      <ContactsColumn>
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterField addFilter={addFilter} />
        {isFetching && <h2>Loading...</h2>}
        {data && <ContactList listOfContacts={visibleContacts.reverse()} />}
      </ContactsColumn>
    </ContactsContainer>
  );
}
