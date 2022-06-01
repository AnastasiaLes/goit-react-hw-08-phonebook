import { ListElement, DeleteBtn } from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ListElement>
      {name}: {number}
      <DeleteBtn
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >
        {' '}
        {isDeleting ? 'Deleting...' : 'Delete'}
      </DeleteBtn>
    </ListElement>
  );
};
