import React from 'react'
import Button from 'react-bootstrap/Button'

const ServiceList = () => {
  return (
    <div> 
      <div className='container'>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td> <Button variant="primary">Inser</Button>{' '}
      <Button variant="secondary">Update</Button>{' '}
      <Button variant="danger">Delete</Button>{' '}
    
      </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td> <Button variant="primary">Inser</Button>{' '}
      <Button variant="secondary">Update</Button>{' '}
      <Button variant="danger">Delete</Button>{' '}
    
      </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        <td> <Button variant="primary">Inser</Button>{' '}
      <Button variant="secondary">Update</Button>{' '}
      <Button variant="danger">Delete</Button>{' '}
    
      </td>
      </tr>
      
    </tbody>
  </table> 
  </div>
    </div>
  )
}

export default ServiceList