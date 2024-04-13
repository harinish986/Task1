import React,{useState, useEffect} from 'react';
import './Form.css';

const Form = ({onSubmit, userData}) => {
    const [formData, setFormData] = useState({name:'',email:'',gender:'', phonenumber:'',age:''})

    useEffect(()=>{
        if(userData){
            setFormData(userData)
        }
    },[userData])

    const handleChange =(e)=>{
        const {name,value}=e.target
        setFormData((prevData)=>({...prevData, [name]:value}))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        onSubmit(formData)
        setFormData({name:'',email:'',gender:'', phonenumber:'',age:''})
    }

  return (
    <form onSubmit={handleSubmit} className='user-form'>
        <label>Name</label>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Name'/>
        <label>Email</label>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email'/>
        <label>Phone Number</label>
        <input type='text' id='phonenumber' name='phonenumber' value={formData.phonenumber} onChange={handleChange} placeholder='Phone Number'/>
        <label>Age</label>
        <input type='number' id='age' name='age' value={formData.age} onChange={handleChange} placeholder='Age'/>
        <label>Gender</label>
        <select name='gender' id='gender' value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <button type='submit'>{userData ? 'Update':'Submit'}</button>
    </form>
  )
}

export default Form
