import React, {useEffect, useState} from 'react'

function EmployeeListing() {
    const [empdata, setEmpData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/employee').then(resp => {
            return resp.json();
        }).then((resp) =>setEmpData(resp)).catch((error) => {
            console.log(error.message);
        });
    }, []);
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h1>Employee List</h1>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            empdata && empdata.map(emp=>
                              <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.phone}</td>
                                <td><a className="btn btn-primary">details</a>
                                <a className="btn btn-success">Edit</a>
                                <a className="btn btn-danger">Remove</a>
                                </td>
                              </tr>
                            )
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeListing
