import Heading from "../components/Heading";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

function Dashboard(){
    return(
        <>
        <AppBar/>
        <Balance amount={10000}/>
        <Users />
        </>
    )
}
export default Dashboard;