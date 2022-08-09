import { useNavigate } from "react-router-dom";


const TableRow= ({data,id,onDelete,onUpdate,color }) =>
{   console.log(color);
    const navigate=useNavigate()
    return(
        
            
             <tr onClick={()=>{navigate(`/details/${data.id}`)}} id={id}>
                <td >{data.name}</td>
                <td>{data.id.substring(0,8)}</td>
                <td>{data.joiningDate}</td>
                <td  id="trole">{data.role}</td>
                <td style={{background: `${color} 0% 0% no-repeat padding-box`}}  id="tstatus">{data.status}</td>
                <td id="texperience">{data.experience}</td>
                <button id="tdelete" onClick={(event)=>{ onDelete();event.stopPropagation();}}><i className="fa fa-trash" style={{color:"red"}} /></button>
                <button id="tedit" onClick={(event)=>{ onUpdate();event.stopPropagation();}}><i className="fa fa-pencil"  style={{color:"blue"}} /></button>
            </tr>
        
    )
}

export default TableRow;