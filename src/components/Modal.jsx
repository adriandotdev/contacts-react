import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactsAction';
import { v4 as uuid4 } from 'uuid';

function Modal() {

    const firstNameFieldRef = useRef();

    const [contact, setContact] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: ''
    });
    const dispatch = useDispatch();

    const add = (e) => {

        e.preventDefault();

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

    useEffect(() => {
        firstNameFieldRef.current.focus();
    }, []);

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">New Contact</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={add} action="" className='d-flex flex-column'>
                            <section>
                                <label htmlFor="first-name" className="form-label">First Name</label>
                                <input ref={firstNameFieldRef} value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })} type="text" name="first-name" id="first-name" className='form-control' />
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
                                <input value={contact.emailAddress} onChange={(e) => setContact({ ...contact, emailAddress: e.target.value })} type="text" name="email" id="email" className='form-control' />
                            </section>

                            <input type="submit" value="Save Contact" className='btn btn-success mt-3 fw-bold' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal