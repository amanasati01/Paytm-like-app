import Heading from "./Heading"
function AppBar(){
    return (
        <div className="flex justify-between">
        <Heading label={"PaytmApp"}/>
        <h1 className="text-black text-base text-center m-3  font-semibold ">Hello , user</h1>
        </div>
    )
}
export default AppBar