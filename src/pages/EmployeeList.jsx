import { useNavigate } from "react-router-dom"
import {useGetAllEmployeesQuery,useDeleteEmployeeMutation} from "../services/api";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../styles/style.css";
import InputSelect from "../components/InputSelect";
import crtbtn from "../assets/add_blue.png";
import TableRow from "../components/TableRow";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



const EmployeeList = () => {
 
  const navigate = useNavigate();

  const [deleteEmployee, { isLoading: isDeleting }] = useDeleteEmployeeMutation();
  const updateEmp = (id)=>{
    navigate(`/${id}`)
  }
  
  const { data, isLoading, isFetching, error } = useGetAllEmployeesQuery();
  if (error) {
    console.log("error");
  } else if (isFetching) {
    console.log("fetching");
  }

  
  const filterlist = ["Status", "Role"];

  

  return (
    <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    
      <Header />
      <NavBar />
      <div id="body">
        <div id="title">
          Employee List
          <p>Filter By</p>
          <InputSelect id="filterdropdown" options={filterlist} />
          <button
            id="creator"
            onClick={() => {
              navigate("/create");
            }}>

            <input
              type="image"
              id="crtbtn"
              name="imgbtn"
              src={crtbtn}
              alt="Add an employee"
            />
            <label id="crtlbl">Create employee</label>
          </button>
        </div>
        <table>
          <thead >
            <tr id="tablehead">
              <td>Employee Name</td>
              <td>Employee ID</td>
              <td>Joining Date</td>
              <td>Role</td>
              <td>Status</td>
              <td>Experience</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody >
            {
              data?.data.map((item) => (
             
                 <TableRow data={item} id="tbody" onDelete={()=>{deleteEmployee(item.id)}} onUpdate={()=>{updateEmp(item.id)}}/>
                
                ))
            }
          </tbody>
        </table>
        <>
          <br />

         
        </>
      </div>
    </div>
  );
};

export default EmployeeList;
