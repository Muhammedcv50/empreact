import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styles/style.css'
import { useParams } from 'react-router-dom';
import TextField from '../components/TextField';
import { useGetEmployeeByIdQuery} from "../services/api";
import { useEffect, useState} from 'react';



const EmployeeDetails= () =>
{

  const [employee,setEmployee]=useState({
    name:"",
    experience:0,
    joiningDate:"",
    departmentId:"c0c8c7a1-77d8-479b-b33c-064a06b09de9",
    status:"Inactive",
    role:"trainee",
    address:
    {
     addressLine1:"",
     city:"",
     district:"",
     state:"",
     country:"India",
     zip:""  
    }
});

    
    console.log("reached");
    const {id}=useParams();
    console.log(id);

    const {data,isLoading, error}=useGetEmployeeByIdQuery(id);

    useEffect(()=>{
      if(data?.data)
      {
      setEmployee({
          id:data?.data?.id,
          name:data?.data?.name,
          status:data?.data?.status,
          experience:data?.data?.experience,
          joiningDate:data?.data?.joiningDate,
          role:data?.data?.role,
          address:{
              city:data?.data?.address.city,
              district:data?.data?.address.district,
              state:data?.data?.address.state,
              addressLine1:data?.data?.address.addressLine1,
              zip:data?.data?.address.zip
          }});
      }
  },[data]);
  
  
  console.log(employee.name)
   


       return(
         <div>
        <Header/>
        <NavBar/>
        <div id="body">
        <div id="title">Employee Details
        </div>   

        <div id="detemp">

          <div className="det" >
            <TextField   text = "Employee Name"  />
            <TextField   text = {employee.name}  />
          </div>

          <div className="det" >
            <TextField   text ="Employee ID"   />
            <TextField   text ={employee.id}   />
          </div>

          <div className="det" >
            <TextField   text ="Joining Date"   />
            <TextField   text = {employee.joiningDate}  />
          </div>

          <div className="det" >
            <TextField   text ="Role"   />
            <TextField   text = {employee.role}  />
          </div>

          <div className="det" >
            <TextField   text ="Status"   />
            <TextField   text = {employee.status}  />
          </div>

          <div className="det" >
            <TextField   text ="Experience"   />Experience
            <TextField   text ={employee.experience}   />
          </div>

          <div className="det" >
            <TextField   text ="Address"   />
            <TextField   text ={employee.address.addressLine1}   />
          </div>

          
        </div>
        </div>
        </div>);

   
}

export default EmployeeDetails