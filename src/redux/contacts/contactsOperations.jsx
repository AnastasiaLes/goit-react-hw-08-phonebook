// import axios from "axios";

// const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactRequest());
//     try {
//         const { data } = await axios.get('/contacts');
//         dispatch(fetchContactsSuccess());
//     } catch (error) {
//         dispatch(fetchContactsError(error.message));
//     }
// };

// const addContact = description => dispatch => {
//     const contact = {
//         description,
//         completed: false,
//     };
//     dispatch(addContactRequest());

//     axios.post('/contacts', contact)
//         .then(({ data }) => dispatch(addContactSuccess(data)))
//         .catch(error => dispatch(addContactError(error.message)));
// };

// const deleteContact = contactId => dispatch => {

//     dispatch(deleteContactRequest());

//     axios.post(`/contacts/${contactId}`)
//         .then(({ data }) => dispatch(deleteContactSuccess(contactId)))
//         .catch(error => dispatch(deleteContactError(error.message)));
// };

// const toggleCompleted = ({ id, completed }) => dispatch => {
//     const update = { completed };

//     dispatch(toggleCompletedRequest());
//     axios.post(`/contacts/${id}`, update)
//         .then(({ data }) => dispatch(toggleCompletedSuccess(contactId)))
//         .catch(error => dispatch(toggleCompletedError(error.message)));
// };

// const contactOperations = {
//     fetchContacts,
//     addContact,
//     deleteContact,
//     toggleCompleted
// }
