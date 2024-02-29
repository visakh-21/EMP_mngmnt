import {React , useEffect,useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function Edit() {

  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState('')
  const [desig, setdesig] = useState('')
  const [salary, setSalary] = useState('')

//object for hooks

const params=useParams()
console.log(params.id);

const fetchEmp= async ()=>{
const result=await axios.get('http://localhost:8000/getAnEmp/'+params.id)
 console.log(result.data.employee);
setId(result.data.employee.id)
setUname(result.data.employee.uname)
setAge(result.data.employee.age)
setdesig(result.data.employee.designation)
setSalary(result.data.employee.salary)

console.log(id);
console.log(uname);
}

const handleUpdate=async (e)=>{
  e.preventDefault()

  const body={
id,
uname,
age,
desig,
salary

  }

 const result=await axios.post('http://localhost:8000/editEmp',body)

 alert(result.data.message)
}
useEffect(()=>{

  fetchEmp()
},[])


  return (
    <div>
      <h1 className='mt-5 text-white text-center'>
        <i class="fa-sharp fa-solid fa-house-user"></i>

        Edit Emp Details</h1>


      {/* <p>Workers don’t need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them). The term employee is sometimes used to distinguish contract workers from full employees (who often earn additional benefits), but in this example, both types of workers are considered employees in the general sense.</p> */}
      <Form className='container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Emp name</Form.Label>
          <Form.Control type="text" placeholder="" value={uname} onChange={(e)=>setUname(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>age</Form.Label>
          <Form.Control  type="text" placeholder="" value={age} onChange={(e)=>setAge(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" placeholder="" value={desig}  onChange={(e)=>setdesig(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>sal</Form.Label>
          <Form.Control  type="text" placeholder=""  value={salary} onChange={(e)=>setSalary(e.target.value)}/>
        </Form.Group>
        <Button onClick={(e)=>handleUpdate(e)} className='ms-5' variant="primary" type="submit">
          update
        </Button>

       
      </Form>

    </div>

    
  )
}

export default Edit
