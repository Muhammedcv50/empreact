const InputSelect= ({text,options,cls,id,onChange}) =>
{
    return(
        <div >
            <select id ={id} className={cls} value={text} onChange={(event)=> onChange(event.target.value) }>
                {
                    options?.map((item,i)=> (
                       <option  key={i} value={item} >{item}</option> 

                    ))
                }
            </select>
            {/* <select name="role" id="role" >
                <option value="role1">Role1</option>
                <option value="role2">Role2</option>
                <option value="role3">Role3</option>
                <option value="rol4">Role4</option>
            </select> */}
        </div>
    )
}

export default InputSelect;