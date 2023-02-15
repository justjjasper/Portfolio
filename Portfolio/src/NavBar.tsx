import { Link } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

export default function NavBar () {
  return (
    <nav>
      <ul>
        <li><Link to= '/'> home </Link></li>
        <li><Link to= '/about'> about </Link></li>
        <li><Link to= '/experience'> experience </Link></li>
        <li><Link to= '/projects'> projects </Link></li>
        <li><Link to= '/contact'> contacts </Link></li>
      </ul>
    </nav>
  )
}