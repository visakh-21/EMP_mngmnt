const db=require('./db')

const allEmployee=()=>{

 return db.Employee.find().then(result=>{

        if(result){
            return{

                statusCode:200,
                employees:result
            }
        }
        else{

            return{

                statusCode:404,
                message:"no data is available"
            }
        }
    })
}

const addEmployee=(id,uname,age,designation,salary)=>{
return db.Employee.findOne({id}).then(result=>{
if(result)
{

    return{

        statusCode:404,
        message:"employee already exist"

    }
}

else  
{
    const newEmp=new db.Employee({  //create object of employee model for new employee
id,
uname,
age,
designation,
salary

    })

    newEmp.save()  //save the object in db
    return{

        statusCode:200,
        message:"employee added sucessfully"
    }
}



})

}
const removeEmployee=(eid)=>{
  return db.Employee.deleteOne({id:eid}).then(result=>{

        if(result){

            return{
                statusCode:200,


                message:"employee removed"

            }
        }
        else{

            return{
                statusCode:404,


                message:"employee not present"

            }
        }
    })


}

const getAnEmp=(id)=>{

  return  db.Employee.findOne({id}).then(result=>{

        if(result)
        {
            return{

                statusCode:200,
                employee:result
            }
        }

        else{

            return{


                statusCode:404,
                message:"employee not present"
            }
        }
    })
}

const editEmp=(id,uname,age,desig,salary)=>{
    return db.Employee.findOne({id}).then(result=>{


        if(result)
        {
result.id=id
result.uname=uname
result.age=age
result.designation=desig
result.salary=salary

result.save()
return{

    statusCode:200,
    message:'employee data updated'
}

        }

        else{


            return{

                statusCode:404,
                message:"employee not present"
            }
        }
    })
}


module.exports={

    allEmployee,addEmployee,removeEmployee,getAnEmp,editEmp
}