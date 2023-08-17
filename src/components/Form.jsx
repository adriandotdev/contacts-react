/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactsAction';
import { updateContact } from '../actions/contactsAction';
import { v4 as uuid4 } from 'uuid';

function Form({ contactToUpdate, setContactToUpdate }) {

    const firstNameFieldRef = useRef();

    const [contact, setContact] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: ''
    });
    const [isFirstNameValid, setFirstNameValid] = useState(true);

    const dispatch = useDispatch();

    const isRequiredFieldsProvided = () => {

        if (!contact.firstName || !contact.middleName ||
            !contact.lastName || !contact.mobileNumber || !contact.emailAddress)
            return false;
        return true;
    }

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
        else {
            alert("Please provide all of the fields")
        }
    }

    const update = (e) => {

        e.preventDefault();
        // console.log(e)
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

        if (contactToUpdate)
            setContact(contactToUpdate);
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
                <label htmlFor="first-name" className="form-label">First Name</label>
                <input ref={firstNameFieldRef} value={contact.firstName} onChange={(e) => {
                    setContact({ ...contact, firstName: e.target.value })

                    if (!e.target.value) {
                        setFirstNameValid(false);
                    }
                    else {
                        setFirstNameValid(true);
                    }
                }} type="text" name="first-name" id="first-name" className={`form-control ${isFirstNameValid ? '' : 'is-invalid'}`} />
            </section>

            <section>
                <label htmlFor="first-name" className="form-label">Middle Name</label>
                <input value={contact.middleName} onChange={(e) => setContact({ ...contact, middleName: e.target.value })} type="text" name="middle-name" id="middle-name" className='form-control' />
            </section>

            <section>
                <label htmlFor="first-name" className='form-label'>Last Name</label>
                <input value={contact.lastName} onChange={(e) => setContact({ ...contact, lastName: e.target.value })} type="text" name="last-name" id="last-name" className='form-control' />
            </section>

            <section>
                <label htmlFor="first-name" className='form-label'>Mobile Number</label>
                <input value={contact.mobileNumber} onChange={(e) => setContact({ ...contact, mobileNumber: e.target.value })} type="text" name="mobile-number" id="mobile-number" className='form-control' />
            </section>

            <section>
                <label htmlFor="first-name" className='form-label'>Email Address</label>
                <input value={contact.emailAddress} onChange={(e) => setContact({ ...contact, emailAddress: e.target.value })} type="email" name="email" id="email" className='form-control' />
            </section>

            <input type="submit" value={`${contactToUpdate ? 'Update' : 'Save Contact'}`} className='btn btn-success mt-3 fw-bold' />

            {
                contactToUpdate && <button onClick={() => setContactToUpdate(null)} className="btn btn-danger mt-2">Cancel</button>
            }
        </form>
    )
}

export default Form