import InputField from '../components/InputField'
import TextField from '../components/TextField';
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from 'react';
import InputSelect from '../components/InputSelect'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styles/style.css'
import { useUpdateEmployeeMutation,useGetEmployeeByIdQuery} from "../services/api";
import { useParams } from 'react-router-dom';




function UpdateEmployee(){

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


const [updateEmployee, { isLoading: isUpdating }] = useUpdateEmployeeMutation()

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



// useEffect(() => {
//     setEmployee({name:"Enter name",role:"Enter role",status:"Enter status",experience:"Enter experience",});
//     //Runs only on the first render
//   },[]);




const roles=["admin","trainee"];
const status=["Active","Inactive","Probation"];
const {id}=useParams();
const {data,isLoading, error}=useGetEmployeeByIdQuery(id);
//console.log(data?.data.name)

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
 






    return (
        <>
        <Header/>
        <NavBar/>

        <div id="body">
            
        <div id="title">
            Update Employee
        </div>
        <div id="form" >
        <div id="details">
        
        <div className="empdetail" >
            {/* <label >Employee Name</label> */}
            <TextField text="Employee Name" cls="emplabel"/> <br/>
            {/* <input id="ename" type="text" placeholder={"Employee Name"}/> */}
            <InputField cls="empinput" id="name" type="text" placehold="Name" text={employee.name} onChange={(value)=>onChange("name",value)}/>
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

            
        </div>

        <div className="empdetail">
            <TextField text='Status' cls="emplabel"/> <br/>
             <InputSelect key="ds" cls="empinput"  text={employee.status} options= {status}  onChange={(value)=>onChange("status",value)}/> 
          
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
        <Button id="updatebutton" label="Update" handleClick={()=>{updateEmployee(employee);navigate('/list')}} />
        </div>

        <div >
        <Button id="cancelbutton" label="Cancel" handleClick={()=>{navigate('/list')}} />
        </div>

   </div>
        
        
    </div>
    </div>

    </>
) ;
}

export default UpdateEmployee