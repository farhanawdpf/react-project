import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export default function ChefsAdd() {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [photo, setPhoto] = useState('')
    const navi = useNavigate()
    const save = () => {
        const formdata = new FormData()
        formdata.append('name', name)
        formdata.append('details', details)
        formdata.append('photo', photo)
        axios.post("http://localhost/reactjs/dingo/backend/chefs/addchefs.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setName('')
                setPhoto('')
                setDetails('')
                setPhoto(null)
                navi('/admin/cheflist');
            })
    }
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-light rounded h-100 p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h2 className="mb-0">Add Chef</h2>

                                <NavLink to={`/admin/itemslist`}>
                                    <button className="btn btn-info btn-lg">Chef List</button>
                                </NavLink>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}

                                />
                                <label htmlFor="floatingInput">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setDetails(e.target.value)}
                                    value={details}

                                />
                                <label htmlFor="floatingInput">Designation</label>
                            </div>

                            <div className='col-md-6'>
                                <input className="form-control form-control-lg mt-4" id="formFileLg" type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                            </div>

                            <div>
                                <button onClick={save} className="btn btn-primary mt-4 btn-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
