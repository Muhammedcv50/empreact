import InputField from '../components/InputField'
import TextField from '../components/TextField';
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import InputSelect from '../components/InputSelect'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styles/style.css'



function CreateEmployee(){

const [employee,setEmployee]=useState({});

useEffect(() => {
    setEmployee({name:"Enter name",role:"Enter role",status:"Enter status",experience:"Enter experience",});
    //Runs only on the first render
  },[]);

const navigate = useNavigate();

const roles=["Role1","Role2","Role3","Role4"];
const status=["Status1","Status2","Status3","Status4"];


    return (
        <>
        <Header/>
        <NavBar/>

        <div id="body">
            
        <div id="title">
            Create Employee
        </div>
        <form >
        <div id="details">
        
        <div className="empdetail" >
            {/* <label >Employee Name</label> */}
            <TextField text="Employee Name" cls="emplabel"/> <br/>
            {/* <input id="ename" type="text" placeholder={"Employee Name"}/> */}
            <InputField cls="empinput" type="text" text={employee.name}/>
        </div>

        {/* <div >
            <TextField text='Employee ID'/> <br/>
            <InputField id="eid" type="text" placeholder={"Employee ID"}/>
        </div> */}

        <div className="empdetail"  >
            <TextField text='Joining Date' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" text={employee.name}/>
        </div>
 
        <div className="empdetail"  >
            <TextField text='Department' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" text={employee.name}/>
        </div>

        <div className="empdetail">
            {/* <label >Role</label> */}
            <TextField text='Role' cls="emplabel" /> <br/>
            <InputSelect cls="empinput" options={roles}/>

            {/* <select name="role" id="role" >
                <option value="role1">Role1</option>
                <option value="role2">Role2</option>
                <option value="role3">Role3</option>
                <option value="rol4">Role4</option>
              </select> */}
        </div>

        <div className="empdetail">
            <TextField text='Status' cls="emplabel"/> <br/>
             <InputSelect cls="empinput" options= {status}/> 
            {/* <select name="status" id="status">
                <option value="status">Status1</option>
                <option value="status">Status2</option>
                <option value="status">Status3</option>
                <option value="status">Status4</option>
              </select> */}
        </div>

        <div className="empdetail">
            <TextField text='Experience' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience}/>
        </div>


        <div  className="empdetail" >
                    <label className="emplabel" >Upload ID Proof</label><br />
                    <input  type="file" id="chooser"   style={{display: "none",opacity:0}}/>
                    <label id="col">
                    <label id="browse" for="chooser" >Browse</label></label>
         </div>

         <div className="empdetail">
            <TextField text='Address' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience}/>
        </div>

        <div className="empdetail">
            <TextField text='City' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience}/>
        </div>
        <div className="empdetail">
            <TextField text='District' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience}/>
        </div>
        <div className="empdetail">
            <TextField text='State' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience}/>
        </div>
       
        <div className="empdetail">
            <TextField text='Zip Code' cls="emplabel"/> <br/>
            <InputField cls="empinput" type="text" placeholder={employee.experience}/>
        </div>

        {/* <div >
            <TextField text='Address'/> <br/>
            <InputField type="text" placeholder={"Address"}/>
        </div> */}


         {/* <div > */}
            {/* <input type="file" id="file" /> */}
            {/* <InputField type="file" id="file"/> */}
            {/* <label > */}
              {/* <span id="file-name" ></span> */}
              {/* <span > */}
                {/* <i  aria-hidden="true"></i> */}
                {/* Select File */}
              {/* </span> */}
            {/* </label> */}
          {/* </div>  */}

    </div>
       
       
    <div id="btns">

        <div >
        <Button id="createbutton" label="Create" handleClick={()=>{navigate('/')}} />
        </div>

        <div >
        <Button id="cancelbutton" label="Cancel" handleClick={()=>{navigate('/')}} />
        </div>

   </div>
        
        
    </form>
    </div>

    </>
) ;
}

export default CreateEmployee