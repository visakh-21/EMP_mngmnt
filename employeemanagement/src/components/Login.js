import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';




function Login() {


    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
      
        
    }


  return (
    <div>
          <div className='"border border-primary"'>
      <Form  className=' text-center container  mt-5 border border-dark w-25 shadow-sm'>
        <Form.Group className="mb-3 " >
          <Form.Label> Email</Form.Label>
          <Form.Control type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder=""  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Password</Form.Label>
          <Form.Control type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="" />
        </Form.Group>
        {/* <Form.Group className="mb-3" >
          <Form.Label>password</Form.Label>
          <Form.Control type="password" placeholder=""  />
        </Form.Group> */}
        {/* <div>
          <Button  className='' variant="danger"> submit</Button>
        </div> */}
    <Link to={'login'}>
    <Button className='mt-2' variant="danger"> log in</Button>
    </Link>
        <div>
        </div>
      </Form>
    </div>
    </div>
  )
}

export default Login