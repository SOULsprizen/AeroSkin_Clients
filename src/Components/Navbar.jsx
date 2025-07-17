import Logo from './Logo.jsx'
import EncryptButton from './EncryptButton.jsx'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div className='bg-black flex justify-between'>
      <Link to='/'>
        <Logo />
      </Link>
      <Link to='/SignUp'>
        <EncryptButton />
      </Link>
    </div>

  )
}
