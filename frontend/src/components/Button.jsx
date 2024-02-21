function Button ({label,onClick}){
    return(
        <>
        <button onClick={onClick} className=" bg-black text-white w-64 h-7 mt-4 ">{label}</button>
        </>
    )
}
export default Button