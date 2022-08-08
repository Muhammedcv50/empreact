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
        const {text,cls,placehold,id,onChange} = props
        return (
            <div>
            {/* <label>{label}</label> */}
            <input id={id} className={cls} value={text} placeholder={placehold} type="text" onChange={(event)=> onChange(event.target.value)} />
            </div>
        );
    };
    export default InputField;