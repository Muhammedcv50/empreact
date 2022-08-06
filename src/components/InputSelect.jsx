const InputSelect= ({options,cls}) =>
{
    return(
        <div >
            <select className={cls} >
                {
                    options.map((item)=> (
                       <option>{item}</option> 

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