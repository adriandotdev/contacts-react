export const addContact = (payload) => {

    return {
        type: 'ADD_CONTACT',
        payload
    }
}

export const deleteContact = (payload) => {
    return {
        type: 'DELETE_CONTACT',
        payload
    }
}

export const updateContact = (payload) => {
    return {
        type: 'UPDATE_CONTACT',
        payload
    }
}