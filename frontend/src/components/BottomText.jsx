import {Link} from 'react-router-dom'
function BottomText({label ,path,text}){
    return <>
           <p className="mt-4 text-center">Don't have account ? <Link to={path}className="text-accent cursor-pointer text-blue-500 underline ">{text}</Link></p>
    </>
}
export default BottomText