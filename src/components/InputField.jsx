// const InputField = ( {label,onChange}) => {  /* {label,onchange} are destructered variables*/ 
//         return (
//             <div>
//             <label>{label}</label>
//             <input value ="initial value " type="text" onChange={(event)=>onChange(event.target.value)}/>
//             </div>
//         );
//     };
//     export default InputField;

    const InputField = (props) => { 
        const {text,cls} = props
        return (
            <div>
            {/* <label>{label}</label> */}
            <input className={cls} value={text} type="text" />
            </div>
        );
    };
    export default InputField;