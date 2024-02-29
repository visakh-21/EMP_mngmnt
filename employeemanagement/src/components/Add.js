import { React, useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';




function Add() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState('')
  const [desig, setdesig] = useState('')
  const [salary, setSalary] = useState('')

  useEffect(()=>{

    setId(uuid().slice(0,3))
  },[])

  let location=useNavigate()  // create an object for the hook



  const addEmployee=async(e)=>{
    e.preventDefault()

  setId(uuid().slice(0,3));
  const body={

    id,
    uname,
    age,
    designation:desig,
    salary
  }
  console.log(body);
const result=await axios.post('http://localhost:8000/addEmployee',body)
console.log(result);
alert(result.data.message)
location('/') //redirection to home page


    
  }




  return (
    <div className='container'>

      <h1 className='mt-5 text-white text-center'>
        <i class="fa-sharp fa-solid fa-house-user"></i>

        Employee management</h1>


      <p>Workers don’t need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them). The term employee is sometimes used to distinguish contract workers from full employees (who often earn additional benefits), but in this example, both types of workers are considered employees in the general sense.</p>
      <h1 className='mt-5 text-white text-center'>
        <i class="fa-sharp fa-solid fa-house-user"></i>

        Add new emloyeee</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>employee name</Form.Label>
          <Form.Control onChange={(e) => setUname(e.target.value)} type="text" placeholder="" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>age</Form.Label>
          <Form.Control onChange={(e) => setAge(e.target.value)} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Desig</Form.Label>
          <Form.Control onChange={(e) => setdesig(e.target.value)} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>sal</Form.Label>
          <Form.Control onChange={(e) => setSalary(e.target.value)} type="text" placeholder="" />
        </Form.Group>
        <Button onClick={(e) => addEmployee(e)} className='ms-5' variant="primary" type="submit">
          Add
        </Button>
<Link to={'/'}>
 <Button className='ms-5' variant="primary" type="submit">Cancel</Button>
</Link>
       
      </Form>

    </div>
  )
}

export default Add
