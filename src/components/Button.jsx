const Button = (props) => {
    const {label,handleClick,id} = props
    return (
        <button id={id} onClick={(event)=>{ handleClick()}}> {label} </button>
    );
}
export default Button;