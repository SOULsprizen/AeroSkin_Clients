import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SignUp from './Components/SignUp'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>

    </BrowserRouter>
  )
}















