const TextField = (props)  => {
    const {text,cls}=props;
    return(
        <label className={cls} >{text}</label>
    );
}

export default TextField;