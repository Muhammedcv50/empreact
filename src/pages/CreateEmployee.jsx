import InputField from '../components/InputField'
import TextField from '../components/TextField';
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import InputSelect from '../components/InputSelect'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styles/style.css'
import { useCreateEmployeeMutation} from "../services/api";

// import { useParams } from 'react-router-dom';




function CreateEmployee(){

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

const onChange =(key,value) =>
{
    if(key==='addressLine1'||key==='city'||key==='district'||key==='state'||key==='zip')
    {
        setEmployee({
        ...employee,
        address:{
            ...employee.address,
            [key]:value
        }}
        )
    }
    else{
    setEmployee(
        {
            ...employee,
            [key]:value,
        }
        );
    }
        
           
        
        
  
  
}
const [createEmployee, result] = useCreateEmployeeMutation()

// useEffect(() => {
//     setEmployee({name:"Enter name",role:"Enter role",status:"Enter status",experience:"Enter experience",});
//     //Runs only on the first render
//   },[]);


const navigate = useNavigate();

const roles=["admin","trainee"];
const status=["Active","Inactive","Probation"];


    return (
        <>
        <Header/>
        <NavBar/>

        <div id="body">
            
        <div id="title">
            Create Employee
        </div>
        <div id="form" >
        <div id="details">
        
        <div className="empdetail" >
            {/* <label >Employee Name</label> */}
            <TextField text="Employee Name" cls="emplabel"/> <br/>
            {/* <input id="ename" type="text" placeholder={"Employee Name"}/> */}
            <InputField cls="empinput" type="text" placehold="Name" text={employee.name} onChange={(value)=>onChange("name",value)}/>
        </div>

        {/* <div >
            <TextField text='Employee ID'/> <br/>
            <InputField id="eid" type="text" placeholder={"Employee ID"}/>
        </div> */}

        <div className="empdetail"  >
            <TextField text='Joining Date' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text"  text={employee.joiningDate} onChange={(value)=>onChange("joiningDate",value)} />
        </div>
 
        {/* <div className="empdetail"  >
            <TextField text='Department' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text"  />
        </div> */}

        <div className="empdetail">
            {/* <label >Role</label> */}
            <TextField text='Role' cls="emplabel" /> <br/>
            <InputSelect cls="empinput" text={employee.role} options={roles}  onChange={(value)=>onChange("role",value)}/>

            {/* <select name="role" id="role" >
                <option value="role1">Role1</option>
                <option value="role2">Role2</option>
                <option value="role3">Role3</option>
                <option value="rol4">Role4</option>
              </select> */}
        </div>

        <div className="empdetail">
            <TextField text='Status' cls="emplabel"/> <br/>
             <InputSelect key="ds" cls="empinput"  text={employee.status} options= {status}  onChange={(value)=>onChange("status",value)}/> 
            {/* <select name="status" id="status">
                <option value="status">Status1</option>
                <option value="status">Status2</option>
                <option value="status">Status3</option>
                <option value="status">Status4</option>
              </select> */}
        </div>

        <div className="empdetail">
            <TextField text='Experience' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placehold="Experience" text={employee.experience} onChange={(value)=>onChange("experience",value)}/>
        </div>


        <div  className="empdetail" >
                    <label className="emplabel" >Upload ID Proof</label><br />
                    <input  type="file" id="chooser"   style={{display: "none",opacity:0}}/>
                    <label id="col">
                    <label id="browse" htmlFor="chooser" >Browse</label></label>
         </div>

         <div className="empdetail">
            <TextField text='Address' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience} text={employee.address.addressLine1}  onChange={(value)=>onChange("addressLine1",value)} />
        </div>

        <div className="empdetail">
            <TextField text='City' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience} text={employee.address.city}  onChange={(value)=>onChange("city",value)}/>
        </div>

        {/* <div className="empdetail">
            <TextField text='District' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience} text={employee.address.district}  onChange={(value)=>onChange("district",value)} />
        </div> */}

        <div className="empdetail">
            <TextField text='State' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience} text={employee.address.state}  onChange={(value)=>onChange("state",value)}/>
        </div>
       
        <div className="empdetail">
            <TextField text='Zip Code' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.address.zip} text={employee.address.zip} onChange={(value)=>onChange("zip",value)} />
        </div>


    </div>
       
       
    <div id="btns">

        <div >
        <Button id="createbutton" label="Create" handleClick={()=>{createEmployee(employee);navigate('/list')}} />
        </div>

        <div >
        <Button id="cancelbutton2" label="Cancel" handleClick={()=>{navigate('/list')}} />
        </div>

   </div>
        
        
    </div>
    </div>

    </>
) ;
}

export default CreateEmployee