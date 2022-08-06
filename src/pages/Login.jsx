import Button from "../components/Button"
import { useNavigate } from "react-router-dom";

const Login= () =>
{
    const navigate = useNavigate();

    const gotoNextPage= ()=>{navigate('/list');};
    return(
        <Button label="toEmployeeList" handleClick={gotoNextPage} />
        
    );

}
export default Login;


