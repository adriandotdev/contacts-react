/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteContact } from '../actions/contactsAction';

function DeleteModal({ contactToDelete }) {

    const dispatch = useDispatch();

    return (
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteModal">Are you sure you want to remove this contact?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{contactToDelete?.firstName + " " + contactToDelete?.middleName + " " + contactToDelete?.lastName}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={() => dispatch(deleteContact(contactToDelete.id))} type="button" className="btn btn-danger" data-bs-dismiss="modal">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal