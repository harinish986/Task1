import './App.css';
import Cards from './component/Cards';
import Form from './component/Form';
import { useState } from 'react';

function App() {
  const [user, setUser]=useState([])
  const [editUser, setEditUser] = useState(null)

  const handleFormSubmit =(formData)=>{
    if(editUser){
      const updateUser = user.map((user)=>(user.id === editUser.id ? formData:user))
      setUser(updateUser)
      setEditUser(null)
    }
    else{
      const newUser = {...formData, id: Date.now()}
      setUser((prevUsers)=>[...prevUsers, newUser])
    }
  }

  const handleDelete =(userId)=>{
    setUser((prevUsers)=>prevUsers.filter((user)=>user.id !== userId))
  }

  const handleEdit =(userId)=>{
    const selectedUser = user.find((users)=>users.id === userId)
    if(selectedUser){
      setEditUser(selectedUser)
    }
  }
  return (
    <div className="app-container">
      <div className='form-container'>
        <h2>{editUser ? 'Edit User' : 'User Form'}</h2>
        <Form onSubmit={handleFormSubmit} userData={editUser}/>
      </div>
      <div className='card-container'>
        <h2>User Details</h2>
        {user.map((users)=>(
          <Cards key={users.id} user={users} onDelete={handleDelete} onEdit={handleEdit}/>
        ))}
      </div>
    </div>
  );
}

export default App;
