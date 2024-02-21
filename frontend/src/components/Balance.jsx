function Balance({amount}){
    return (
        <div className="flex justify-start mt-6">
            <h1 className="ml-10 text-2xl font-semibold" >Your Balance : </h1>
            <h5 className="text-xl ml-4 mt-1 font-semibold">Rs:{amount}</h5>
        </div>
    )
}
export default Balance