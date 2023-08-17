/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactsAction';
import { updateContact } from '../actions/contactsAction';
import { v4 as uuid4 } from 'uuid';

function Form({ contactToUpdate, setContactToUpdate }) {

    const firstNameFieldRef = useRef();

    // This is the input field for the forms
    const [contact, setContact] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: ''
    });

    // This is the booleans for each input field to know if it is valid or invalid.
    const [validation, setValidation] = useState({
        firstName: true,
        middleName: true,
        lastName: true,
        mobileNumber: true,
        emailAddress: true
    })

    // Patterns to be followed for mobile phone, and email.
    const MOBILE_PHONE_PATTERN = /^09\d{9}$/;
    const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@(gmail\.com|pragmanila\.com)$/i;

    const dispatch = useDispatch();

    // A function that checks if all the required fields are provided.
    const isRequiredFieldsProvided = () => {

        if (!contact.firstName)
            setValidation(prev => ({ ...prev, firstName: false }));

        if (!contact.middleName)
            setValidation(prev => ({ ...prev, middleName: false }));

        if (!contact.lastName)
            setValidation(prev => ({ ...prev, lastName: false }));

        if (!EMAIL_PATTERN.test(contact.emailAddress))
            setValidation(prev => ({ ...prev, emailAddress: false }));

        if (!MOBILE_PHONE_PATTERN.test(contact.mobileNumber))
            setValidation(prev => ({ ...prev, mobileNumber: false }));

        if (!contact.firstName || !contact.middleName ||
            !contact.lastName || !contact.mobileNumber || !contact.emailAddress)
            return false;

        if (!EMAIL_PATTERN.test(contact.emailAddress) || !MOBILE_PHONE_PATTERN.test(contact.mobileNumber))
            return false;
        return true;
    }

    // A function that adds a new contact to the list.
    const add = (e) => {

        e.preventDefault();

        if (isRequiredFieldsProvided()) {
            const newContact = {
                id: uuid4(),
                ...contact
            }
            dispatch(addContact(newContact));

            // Clear the contact state
            setContact({
                firstName: '',
                middleName: '',
                lastName: '',
                mobileNumber: '',
                emailAddress: ''
            });

            firstNameFieldRef.current.focus();
        }
    }

    // A function that updates the selected contact.
    const update = (e) => {

        e.preventDefault();

        if (isRequiredFieldsProvided()) {

            dispatch(updateContact(contact));

            setContactToUpdate(null);
            firstNameFieldRef.current.focus();
        }
    }

    useEffect(() => {
        firstNameFieldRef.current.focus();
    }, []);

    useEffect(() => {

        if (contactToUpdate) {
            setContact(contactToUpdate);
            setValidation({
                firstName: true,
                middleName: true,
                lastName: true,
                mobileNumber: true,
                emailAddress: true
            });
        }
        else
            setContact({
                firstName: '',
                middleName: '',
                lastName: '',
                mobileNumber: '',
                emailAddress: ''
            });

    }, [contactToUpdate]);

    return (
        <form onSubmit={contactToUpdate ? update : add} className='d-flex flex-column'>
            <section>

                {/* First Name */}
                <label htmlFor="first-name" className="form-label">First Name</label>

                <input ref={firstNameFieldRef} value={contact.firstName} onChange={(e) => {
                    setContact({ ...contact, firstName: e.target.value })

                    if (!e.target.value) {
                        setValidation({ ...validation, firstName: false });
                    }
                    else {
                        setValidation({ ...validation, firstName: true });
                    }
                }} placeholder='Ex. John' type="text" name="first-name" id="first-name" className={`form-control ${validation.firstName ? '' : 'is-invalid'}`} />

                {!validation.firstName && <small className='text-danger fw-bold'>Please provide your first name</small>}
            </section>

            <section className='mt-2'>

                {/* Middle Name */}
                <label htmlFor="first-name" className="form-label">Middle Name</label>

                <input value={contact.middleName} onChange={(e) => {
                    setContact({ ...contact, middleName: e.target.value })

                    if (!e.target.value) {
                        setValidation({ ...validation, middleName: false });
                    }
                    else {
                        setValidation({ ...validation, middleName: true });
                    }
                }} placeholder='Ex. Hayward' type="text" name="middle-name" id="middle-name" className={`form-control ${validation.middleName ? '' : 'is-invalid'}`} />

                {!validation.middleName && <small className='text-danger fw-bold'>Please provide your middle name</small>}
            </section>

            <section className='mt-2'>

                {/* Last Name */}
                <label htmlFor="first-name" className='form-label'>Last Name</label>

                <input value={contact.lastName} onChange={(e) => {
                    setContact({ ...contact, lastName: e.target.value });

                    if (!e.target.value) {
                        setValidation({ ...validation, lastName: false });
                    }
                    else {
                        setValidation({ ...validation, lastName: true });
                    }
                }} placeholder='Ex. Doe' type="text" name="last-name" id="last-name" className={`form-control ${validation.lastName ? '' : 'is-invalid'}`} />

                {!validation.lastName && <small className='text-danger fw-bold'>Please provide your last name</small>}
            </section>

            <section className='mt-2'>

                {/* Mobile Number */}
                <label htmlFor="first-name" className='form-label'>Mobile Number</label>

                <input value={contact.mobileNumber} onChange={(e) => {
                    setContact({ ...contact, mobileNumber: e.target.value });

                    if (!MOBILE_PHONE_PATTERN.test(e.target.value))
                        setValidation({ ...validation, mobileNumber: false });
                    else
                        setValidation({ ...validation, mobileNumber: true });

                }} placeholder='Ex. 09321152341' type="text" name="mobile-number" id="mobile-number" className={`form-control ${validation.mobileNumber ? '' : 'is-invalid'}`} />

                {!validation.mobileNumber && <small className='text-danger fw-bold'>Please provide a valid phone number. (E.g. 09234451123) It must be start at 09, and follow by 9 digits.</small>}
            </section>

            <section className='mt-2'>

                {/* Email Address */}
                <label htmlFor="first-name" className='form-label'>Email Address</label>

                <input value={contact.emailAddress} onChange={(e) => {

                    setContact({ ...contact, emailAddress: e.target.value });

                    if (!EMAIL_PATTERN.test(e.target.value))
                        setValidation({ ...validation, emailAddress: false });
                    else
                        setValidation({ ...validation, emailAddress: true });

                }} placeholder='Ex. johndoe@pragmanila.com' type="email" name="email" id="email" className={`form-control ${validation.emailAddress ? '' : 'is-invalid'}`} />

                {!validation.emailAddress && <small className='text-danger fw-bold'>Please provide a valid email. Accepted emails are email@gmail.com, and email@pragmanila.com</small>}
            </section>

            <input type="submit" value={`${contactToUpdate ? 'Update' : 'Save Contact'}`} className='btn btn-success mt-3 fw-bold' />

            {
                contactToUpdate && <button onClick={() => setContactToUpdate(null)} className="btn btn-danger mt-2">Cancel</button>
            }
        </form>
    )
}

export default Form