import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styles/style.css'
import { useParams } from 'react-router-dom';
import TextField from '../components/TextField';
import { useGetEmployeeByIdQuery} from "../services/api";
import { useEffect, useState} from 'react';
import crtbtn from "../assets/bluepen.png";
import { useNavigate } from "react-router-dom"




const EmployeeDetails= () =>
{
  const navigate = useNavigate();

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
        <button
            id="creator2"
            onClick={() => {
              navigate(`/${id}`);
            }}>

            <input
              type="image"
              id="crtbtn2"
              name="imgbtn"
              src={crtbtn}
              alt="Add an employee"
            />
            <label id="crtlbl2">Edit</label>
          </button>
        </div>   

        <div id="detemp">

          <div className="det" >
            <TextField cls="detlabel"  text = "Employee Name"  />
            <TextField   text = {employee.name}  />
          </div>

          <div className="det" >
            <TextField cls="detlabel"   text ="Employee ID"   />
            <TextField   text ={employee.id}   />
          </div>

          <div className="det" >
            <TextField cls="detlabel"   text ="Joining Date"   />
            <TextField   text = {employee.joiningDate}  />
          </div>

          <div className="det" >
            <TextField cls="detlabel"   text ="Role"   />
            <TextField   text = {employee.role}  />
          </div>

          <div className="det" >
            <TextField  cls="detlabel"  text ="Status"   />
            <TextField   text = {employee.status}  />
          </div>

          <div className="det" >
            <TextField  cls="detlabel"  text ="Experience"   />
            <TextField   text ={employee.experience}   />
          </div>

          <div className="det" >
            <TextField  cls="detlabel"   text ="Address"   />
            <TextField   text ={employee.address.addressLine1}   />
          </div>

          
        </div>
        </div>
        </div>);

   
}

export default EmployeeDetails