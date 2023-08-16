import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactsAction';
function Form() {

    const [contact, setContact] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: ''
    });
    const dispatch = useDispatch();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }} action="" className='d-flex flex-column'>
            <section>
                <label htmlFor="first-name" className="form-label">First Name</label>
                <input type="text" name="first-name" id="first-name" className='form-control' />
            </section>

            <section>
                <label htmlFor="first-name" className="form-label">Middle Name</label>
                <input type="text" name="middle-name" id="middle-name" className='form-control' />
            </section>

            <section>
                <label htmlFor="first-name" className='form-label'>Last Name</label>
                <input type="text" name="last-name" id="last-name" className='form-control' />
            </section>

            <section>
                <label htmlFor="first-name" className='form-label'>Mobile Number</label>
                <input type="text" name="mobile-number" id="mobile-number" className='form-control' />
            </section>

            <section>
                <label htmlFor="first-name" className='form-label'>Email Address</label>
                <input type="text" name="email" id="email" className='form-control' />
            </section>

            <button onClick={() => dispatch(addContact({ message: 'hi' }))} className="btn btn-success mt-3 fw-bold">Save Contact</button>
        </form>
    )
}

export default Form