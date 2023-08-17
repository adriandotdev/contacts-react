const contactsReducer = (contacts = [], action) => {

    switch (action.type) {
        case 'ADD_CONTACT':
            contacts = [...contacts, action.payload];
            return contacts;
        case 'DELETE_CONTACT':
            contacts = contacts.filter(contact => contact.id !== action.payload);
            return contacts;
        case 'UPDATE_CONTACT':
            contacts = contacts.map(contact => {

                if (contact.id === action.payload.id)
                    return action.payload;

                return contact;
            })
            return contacts;
        default:
            return contacts;
    }
}

export default contactsReducer;