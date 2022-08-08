<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const TableRow= ({data,id,onDelete,onUpdate}) =>
{
    return(
        <div >
            
             <tr id={id}>
                <td>{data.name}</td>
                <td>{data.id.substring(0,8)}</td>
                <td>{data.joiningDate}</td>
                <td  id="trole">{data.role}</td>
                <td id="tstatus">{data.status}</td>
                <td id="texperience">{data.experience}</td>
                <button id="tdelete" onClick={(event)=>{ onDelete()}}><i class="fa fa-trash" aria-hidden="true"></i>d</button>
                <button id="tedit" onClick={(event)=>{ onUpdate()}}>Update</button>
                

              </tr>
        </div>
    )
}

export default TableRow;