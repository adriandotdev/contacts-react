import React, { useState } from 'react'
import './App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { addContact } from './actions/contactsAction';

function App() {

  const [contact, setContact] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: ''
  });

  const contacts = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(contacts);
  return (
    <main className='row px-4 py-5'>

      <div className='d-none d-lg-block contact-form-container col-3 col-xl-3 col-xxl-2 border py-3'>

        <h1 className='h5'>Create New Contact</h1>
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
      </div>

      <div className='col'>

        <div className='mobile-view-header d-lg-none col-12 d-flex align-items-center gap-3 mb-3'>
          <h1 className='h5'>Contact List</h1>
          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            New
          </button>
        </div>

        <div className="table-container table-responsive">
          <table className="table ">
            <thead>
              <tr>
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
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">New Contact</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="">
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
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save Contact</button>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default App