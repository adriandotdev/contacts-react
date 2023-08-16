import { useSelector } from 'react-redux/es/hooks/useSelector';

function Table() {

    const contacts = useSelector(state => state);

    return (
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
    )
}

export default Table