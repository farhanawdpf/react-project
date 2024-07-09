import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function ItemsList() {

    const [items, setItems] = useState([]);

    const itemDelete = (id) => {
        axios.get("http://localhost/reactjs/dingo/backend/deleteItem.php?id=" + id)
            .then((res) => (console.log(res)))

        axios.get("http://localhost/reactjs/dingo/backend/getItems.php")
            .then((res) => setItems(res.data))
    }

    useEffect(() => {
        axios.get("http://localhost/reactjs/dingo/backend/getItems.php")
            .then((res) => setItems(res.data))
    }, [])

    return (
        <div className="container-fluid pt-4 px-4">
            <div className="col-sm-12 col-xl-12">
                <div className="bg-light rounded h-100 p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="mb-0">Item List</h2>
                        <NavLink to="/admin/items">
                            <button className="btn btn-primary btn-lg">Add Item</button>
                        </NavLink>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Details</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((d, i) => {
                                return (
                              
                                        <tr key={i}>
                                            <th scope="row">{++i}</th>
                                            <td>{d.name}</td>
                                            <td>{d.details}</td>
                                            <td>
                                                <img className='w-50' src={`http://localhost/reactjs/dingo/backend/images/${d.photo}`} />
                                            </td>
                                            <td>
                                                <NavLink to={`/admin/itemedit/${d.id}`}>
                                                    <button className='btn btn-info mb-2 mt-2'>Update</button>
                                                </NavLink>
                                                <button className='btn btn-danger' onClick={() => { itemDelete(d.id) }}>Delete</button>
                                            </td>
                                        </tr>
                               
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
