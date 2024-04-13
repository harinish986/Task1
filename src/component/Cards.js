import React from 'react'

const Cards = ({user, onDelete, onEdit}) => {
  return (
    <div className='user-card'>
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>
        <p>Phone:{user.phonenumber}</p>
        <p>Age:{user.age}</p>
        <p>Gender:{user.gender}</p>
        <button onClick={()=> onDelete(user.id)}>Delete</button>
        <button onClick={()=> onEdit(user.id)}>Edit</button>
    </div>
  )
}

export default Cards