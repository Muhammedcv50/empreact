import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {useGetAllEmployeesQuery,useDeleteEmployeeMutation} from "../services/api";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../styles/style.css";
import InputSelect from "../components/InputSelect";
import crtbtn from "../assets/add_blue.png";
import TableRow from "../components/TableRow";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



const EmployeeList = () => {
  console.log("rendering.........");
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
  } else if (data) {
    console.log(data);
  }

  // const empList = [
  //   {
  //     name: "Rahul",
  //     id: "180178",
  //     role: "DevOps",
  //     status: "Probation",
  //     experience: 1,
  //   },
  //   {
  //     name: "Ajay",
  //     id: "180177",
  //     role: "Full Stack",
  //     status: "Inactive",
  //     experience: 2,
  //   },
  //   {
  //     name: "Madhav",
  //     id: "180176",
  //     role: "DevOps",
  //     status: "Active",
  //     experience: 1,
  //   },
  //   {
  //     name: "Abhishek",
  //     id: "180171",
  //     role: "Full Stack",
  //     status: "Active",
  //     experience: 4,
  //   },
  //   {
  //     name: "Rajesh",
  //     id: "180172",
  //     role: "DevOps",
  //     status: "Active",
  //     experience: 5,
  //   },
  // ];
  const filterlist = ["Status", "Role"];

  // function buildTable(data) {
  //   //console.log("isloading", isLoading);
  //   var table = document.getElementById("tablebody");
  //   //console.log("table",table);

  //   for (var i = 0; i < data?.length; i++) {
  //     var id2 = data[i].id.substring(0, 8);
  //     var row = `<tr>
  //               <td>${data[i].name}</td>
  //               <td>${id2}</td>
  //               <td>${data[i].joiningDate}</td>
  //               <td>${data[i].role}</td>
  //               <td>${data[i].status}</td>
  //               <td>${data[i].experience}</td>
               
  //             </tr>`;
  //     table.innerHTML += row;
  //   }
  // }

  return (
    <div>
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
          <tr id="tablehead">
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
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

          {
            
            //buildTable(data?.data)
            //   data?.data?.map(item => (
            //    <>
            //   {item.id}&nbsp;&nbsp;
            //   {item.name}&nbsp;&nbsp;
            //   {item.role}&nbsp;&nbsp;
            //   {item.status}&nbsp;&nbsp;
            //   {item.experience}&nbsp;&nbsp;

            //   <p/>
            //   </>
            //  ))
          }
        </>
      </div>
    </div>
  );
};

export default EmployeeList;
