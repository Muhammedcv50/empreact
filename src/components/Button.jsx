const Button = (props) => {
    const {label,handleClick,id} = props
    return (
        <button id={id} onClick={()=> handleClick()}> {label} </button>
    );
}
export default Button;