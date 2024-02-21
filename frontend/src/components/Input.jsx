function Input({lebel , placeholder,type,onChange}){
    return(
        <>
             <h1 className="text-sm mt-3 font-semibold">{lebel}</h1>
            <input type={type} onChange={onChange} placeholder={placeholder} className="bg-gray-300 border-black border-2 mt-5  p-1 font-light text-base bg" />
            </>
    )
}
export default Input