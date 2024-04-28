import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul style={{display:'flex',flexDirection:'row',gap:'2rem'}}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar