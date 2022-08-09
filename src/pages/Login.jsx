import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import logincover from "../assets/logincover.png"
import logo from '../assets/kv logo@2x.png'
import InputField from "../components/InputField"
import { useEmployeeLoginMutation } from "../services/api";
import {setStorage} from "../services/utils"


import '../styles/style.css';
import { useState } from "react";


const Login= () =>
{
    const navigate = useNavigate();
    const [credential,setCredential]=useState({username:"",password:""})

    const onChange =(key,value) =>
    {
        setCredential(
            {
                ...credential,
                [key]:value,
            }
            );
     }
     const [employeeLogin] = useEmployeeLoginMutation()
     
    //  console.log(result)

     const handle=async ()=>{
        const result = await employeeLogin(credential);   
          if(result)
          {setStorage("idToken",result.data.data.idToken)
            gotoNextPage()}}

     

    const gotoNextPage= ()=>{navigate('/list');};
    return(
        <div id="logsplit">
        <div id="cover">
        <aside>
            <div id="logincover">
                <img src={logincover} alt="cover_image" />
            </div>
        </aside>
        </div>
        <div>
            <div>
                <img id="logo2" src={logo} alt="logo"/>
                <InputField id="logusername" text={credential.username}  onChange={(value)=>onChange("username",value)}  placehold="Username"/>
                <InputField id="logpassword"   text={credential.password}  onChange={(value)=>onChange("password",value)}   placehold="Password"/>
                 <Button id="logbutton"  label="Login" handleClick={handle} />

            </div>
        </div>
        </div>
        
    );

}
export default Login;


