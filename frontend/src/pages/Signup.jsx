
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import BottomText from '../components/BottomText'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Signup = ()=>{
    const [firstName,setFirstName] = useState('')
    const [lastName,setlastName] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    return(
        <div className="grid h-screen place-items-center bg-gray-500">
            <div className="bg-gray-300 h-3/4 w-80 content-center shadow-2xl" >
                <Heading label={'Sign Up'}/>
                <SubHeading lebel={'Enter your information to create an'} subLebel={"account"}/>
                <div className="ml-3">
                <Input lebel={"First Name"} onChange={(e)=>{
                    setFirstName(e.target.value)      
                }} placeholder={"Enter your first name"} type={"text"}/>
                <Input lebel={"Last Name"} onChange={(e)=>{
                    setlastName(e.target.value)      
                }} placeholder={"Enter your last name"} type={"text"}/>
                <Input lebel={"Email"} onChange={(e)=>{
                    setUsername(e.target.value)      
                }} placeholder={"Enter your email"} type={"email"}/>
                <Input lebel={"Password"} onChange={(e)=>{
                    setPassword(e.target.value)      
                }} placeholder={"Enter your last password"} type={"password"}/>
               <Button onClick={async()=>{
                const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                    firstName,
                    lastName,
                    username,
                    password
                  })
                  localStorage.setItem('token',response.data.token);
               }} label ={"Sign up"}/>
                </div>
                <BottomText label ={"have account ? "} path={'/login' } text={'login'}/>
            </div>
         </div>
    )
}
export default Signup