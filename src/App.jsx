import { useState } from 'react'
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import Modal from './components/Modal';

function App() {

  const [contactToUpdate, setContactToUpdate] = useState(null);

  return (
    <main className='row px-4 py-5'>

      <div className='d-none d-lg-block contact-form-container col-3 col-xl-3 col-xxl-2 border py-3'>

        <h1 className='h5'>Create New Contact</h1>
        <Form contactToUpdate={contactToUpdate} setContactToUpdate={setContactToUpdate} />
      </div>

      <div className='col'>

        <div className='mobile-view-header d-lg-none col-12 d-flex align-items-center gap-3 mb-3'>
          <h1 className='h5'>Contact List</h1>
          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            New
          </button>
        </div>

        <Table setContactToUpdate={setContactToUpdate} />
      </div>

      <Modal />
    </main >
  )
}

export default App