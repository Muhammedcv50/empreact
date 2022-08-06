import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useGetAllEmployeesQuery } from "../services/api";

// import { ListItem } from 'react-native-elements'


// import Button from "../components/Button"

const EmployeeList= () =>
{
    const navigate =useNavigate();
    const {data,isLoading,isFetching,error}=useGetAllEmployeesQuery()
    if(error)
    {
        console.log("error")
    }
    else if(isFetching)
    {
        console.log("fetching")
    }
    else if(data)
    {

        console.log(data)

    }
    
    const empList =[{name:"Rahul",id:"180178",role:"DevOps",status:"Probation",experience:1},{name:"Ajay",id:"180177",role:"Full Stack",status:"Inactive",experience:2},{name:"Madhav",id:"180176",role:"DevOps",status:"Active",experience:1},{name:"Abhishek",id:"180171",role:"Full Stack",status:"Active",experience:4},{name:"Rajesh",id:"180172",role:"DevOps",status:"Active",experience:5}];
    
    
    return(
         <div>
         <Button label="toCreate" handleClick={()=>{navigate('/create')}} /> 
           <>
           <br />
         {
        data?.data?.map(item => (
         <>
        {item.id}&nbsp;&nbsp;
        {item.name}&nbsp;&nbsp;
        {item.role}&nbsp;&nbsp;
        {item.status}&nbsp;&nbsp;
        {item.experience}&nbsp;&nbsp;

        <p/>
        </>
       ))
        }
     </>
    </div>   
    );
   

  }


export default EmployeeList;

 