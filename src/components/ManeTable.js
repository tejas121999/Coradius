import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllUserAction } from '../redux/UserAction'

const ManeTable = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.data)
    console.log(users)
    useEffect(() => {
        dispatch(getAllUserAction())
    })

    return (
        <div className="container-fluid">
            <div>
                <Link to='/add'>
                    <button type="button" class="btn btn-link">Add user</button>
                </Link>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.state}</td>
                            <td>{user.city}</td>
                            <td>{user.pincode}</td>
                            <td>
                                <Link
                                    class="btn btn-danger"
                                >
                                    Delete
                                </Link>
                                <Link
                                    className="btn btn-primary"
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ManeTable;
