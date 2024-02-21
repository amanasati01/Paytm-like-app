import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import BottomText from '../components/BottomText'
const Login = ()=>{
    return(
        <div className="grid h-screen place-items-center bg-gray-500">
            <div className="bg-gray-300 h-96 w-80 content-center shadow-2xl" >
                <Heading label={'Sign In'}/>
                <SubHeading lebel={'Enter your information to Signin an'} subLebel={"account"}/>
                <div className="ml-3">
                <Input lebel={"Email"} placeholder={"Enter your email"} type={"email"}/>
                <Input lebel={"Password"} placeholder={"Enter your last password"} type={"password"}/>
               <Button label ={"Sign In"}/>
                </div>
                <BottomText label ={"Don't have account ? "} path={'/signup' } text={'signup'}/>
            </div>
         </div>
    )
}
export default Login