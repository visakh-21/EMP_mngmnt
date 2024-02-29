import {React,useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';




function Admin() {



  const [allEmployees,setAllemployees]=useState([])
  const fetchData=async()=>{

    const result=await axios.get('http://localhost:8000/getAllEmployee')
    setAllemployees(result.data.employees)
  }

  const handleDelete=async (id)=>{


 const result=await  axios.delete('http://localhost:8000/deleteEmployee/'+id)

  alert(result.data.message)
  fetchData()
  }
  

    useEffect(()=>{


    fetchData()
  },[])
  return (
    <div>

<div className='text-end mt-4 me-4'>
<Link to={'./add'}>


<button className='me-5' type="button" class="btn btn-info" ><i class="fa-solid fa-user"></i>Add Emp</button>
</Link>
</div>


      
      
<h1 className='mt-5 text-white text-center'>
<i class="fa-sharp fa-solid fa-house-user"></i>

    EMP management</h1>

    <p>Workers don’t need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them). The term employee is sometimes used to distinguish contract workers from full employees (who often earn additional benefits), but in this example, both types of workers are considered employees in the general sense.</p>
    <Table striped bordered hover>
      <thead>
        <tr>
        <th>#</th>

          <th className='heading'>  Emp Name</th>
          <th>Age</th>
          <th> designation</th>
          <th>Salary</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>

        {

          allEmployees?.map((item, index)=>(

            <tr>
            <td>{index+1}</td>
    
              <td>{item.uname}</td>
              <td>{item.age}</td>
              <td>{item.designation}</td>
              <td>{item.salary}</td>
              <td>
                <Link to={'edit/'+item.id}>
                <button className='me-5' type="button" class="btn btn-danger "> <i class="fa-solid fa-pen-to-square"></i>Edit
              
              </button>
                </Link>

                {/* <Link>

                <button className='me-5' type="button" class="btn btn-info"> <i class="fa-regular fa-eye"></i>View
               
               </button>
                </Link> */}
                
              
               <button onClick={()=>handleDelete(item.id)} type="button" class="btn btn-warning"> <i class="fa-solid fa-trash"></i>Delete</button> </td>
    
            </tr>
          ))
        }
   



    
      
       
      </tbody>
    </Table>

    </div>
  )
}

export default Admin
