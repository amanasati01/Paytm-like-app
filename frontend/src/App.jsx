import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import { SendMoney } from './pages/SendMoney'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/> 
        <Route path='/send' element={<SendMoney/>}/> 
      </Routes>
      </BrowserRouter>
      </>
  )
} 

export default App
