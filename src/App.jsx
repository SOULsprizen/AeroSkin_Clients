import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Logo from '../src/Components/Logo.jsx'
import EncryptButton from './Components/EncryptButton.jsx'
import { SmoothScrollHero } from './Components/SmoothScrollHero.jsx'
import BubbleText from './Components/BubbleText.jsx'
import { SFT } from './Components/SFT.jsx'
import ShiftingCountdown from './Components/ShiftingCountdown.jsx'

export default function App() {
return (


<BrowserRouter>
<div className='bg-black flex justify-between'>
  <Logo />
  <EncryptButton />
</div>
<SmoothScrollHero />
<BubbleText />




<SFT />
<ShiftingCountdown />

</BrowserRouter>
)
}















