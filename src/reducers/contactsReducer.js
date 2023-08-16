const contactsReducer = (contacts = [], action) => {

    switch (action.type) {
        case 'ADD_CONTACT':
            contacts = [...contacts, action.payload];
            return contacts;
        case 'DELETE_CONTACT':
            return contacts;
        case 'UPDATE_CONTACT':
            return contacts;
        default:
            return contacts;
    }
}

export default contactsReducer;