import { useNavigate } from "react-router-dom";


const TableRow= ({data,id,onDelete,onUpdate}) =>
{   
    const navigate=useNavigate()
    return(
        
            
             <tr onClick={()=>{navigate(`/details/${data.id}`)}} id={id}>
                <td >{data.name}</td>
                <td>{data.id.substring(0,8)}</td>
                <td>{data.joiningDate}</td>
                <td  id="trole">{data.role}</td>
                <td id="tstatus">{data.status}</td>
                <td id="texperience">{data.experience}</td>
                <button id="tdelete" onClick={(event)=>{ onDelete()}}><i className="fa fa-trash" style={{color:"red"}} /></button>
                <button id="tedit" onClick={(event)=>{ onUpdate()}}><i className="fa fa-pencil"  style={{color:"blue"}} /></button>
            </tr>
        
    )
}

export default TableRow;