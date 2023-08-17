/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import DeleteModal from './DeleteModal';

function Table({ setContactToUpdate }) {

    const contacts = useSelector(state => state);
    const [contactToDelete, setContactToDelete] = useState(null);

    return (
        <div className="table-container table-responsive">
            <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">Actions</th>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email Address</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        contacts.map((contact, index) =>
                        (
                            <tr key={index}>
                                <div className="btn-group">
                                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className='dropdown-item' onClick={() => setContactToUpdate(contact)}>Update</li>
                                        <li onClick={() => setContactToDelete(contact)} type="" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                            Delete Contact
                                        </li>
                                    </ul>
                                </div>
                                <td scope="row">{index + 1}</td>
                                <td>{contact.firstName}</td>
                                <td>{contact.middleName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.mobileNumber}</td>
                                <td>{contact.emailAddress}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <DeleteModal contactToDelete={contactToDelete} setContactToUpdate={setContactToUpdate} />
        </div>
    )
}

export default Table