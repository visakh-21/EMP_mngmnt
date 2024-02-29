const express=require('express')

const server=express()

const cors=require('cors')

const logic=require('./service/logic')
const { collection } = require('./service/db')

//connect with frontend

server.use(cors({orgin:'http://localhost:3000'}))


server.use(express.json())

//port setting for server


server.listen(8000,()=>{

console.log("served started at 8000");
})


server.get('/getAllEmployee',(req,res)=>{

logic.allEmployee().then(result=>{

    res.status(result.statusCode).json(result)
})

})

server.delete('/deleteEmployee/:id',(req,res)=>{

    logic.removeEmployee(req.params.id).then(result=>{
    
        res.status(result.statusCode).json(result)
    })
    
    })

server.post('/addEmployee',(req,res)=>{

    logic.addEmployee(req.body.id,req.body.uname,req.body.age,req.body.designation,req.body.salary).then(result=>{
    
        res.status(result.statusCode).json(result)
    })
    
    })

    server.get('/getAnEmp/:id',(req,res)=>{

        logic.getAnEmp(req.params.id).then(result=>{
        
            res.status(result.statusCode).json(result)
        })
        
        })
        server.post('/editEmp/',(req,res)=>{

            logic.editEmp(req.body.id,req.body.uname,req.body.age,req.body.desig,req.body.salary,).then(result=>{
            
                res.status(result.statusCode).json(result)
            })
            
            })

           