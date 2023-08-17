import { useState } from 'react'
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {

  const [contactToUpdate, setContactToUpdate] = useState(null);

  return (
    <main className='row px-4 py-5'>

      <div className='contact-form-container col col-xl-3 col-xxl-2 border py-3 mb-3'>

        <h1 className='h5'>Create New Contact</h1>
        <Form contactToUpdate={contactToUpdate} setContactToUpdate={setContactToUpdate} />
      </div>

      <div className='col'>

        <Table setContactToUpdate={setContactToUpdate} />
      </div>
    </main >
  )
}

export default App