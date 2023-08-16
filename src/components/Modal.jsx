function Modal() {
    return (
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
    )
}

export default Modal