import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import logincover from "../assets/logincover.png"
import logo from '../assets/kv logo@2x.png'
import InputField from "../components/InputField"

import '../styles/style.css';


const Login= () =>
{
    const navigate = useNavigate();

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
                <InputField id="logusername" placehold="Username"/>
                <InputField id="logpassword" placehold="Password"/>
                 <Button id="logbutton" label="Login" handleClick={gotoNextPage} />

            </div>
        </div>
        </div>
        
    );

}
export default Login;


