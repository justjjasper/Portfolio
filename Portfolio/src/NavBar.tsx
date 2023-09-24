import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { githubIcon, linkedInIcon, igIcon } from '../images/icons';

export default function NavBar () {
  const { pathname } = useLocation();

  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShowNav(true), 150)
  }, []);

  const menuItem = [
    { path: '/about', label: 'about' },
    // { path: '/experience', label: 'experience' },
    { path: '/projects', label: 'projects' },
    { path: '/contact', label: 'contact' },
  ];

  const reload = () => {
    setShowNav(false);
    setTimeout(() => setShowNav(true), 450);
  }

  return (
    <div className= {`bg-black text-white h-24 font-proxima text-lg flex justify-center items-center transform transition-transform duration-[400ms] ease-in ${showNav ? '' : "-translate-y-full"} w-full`}>
       {/* <div className='flex absolute'>
        <div className='relative naruto run'/>
        <div className='relative naruto-standing stand right-4 bottom-2'/>
      </div> */}
      <nav className=' w-9/12 flex justify-between items-center'>
        <span>
          <a href='/' onClick={reload}>
            <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full hover:bg-gray-600 ">
               <span className="font-medium text-3xl text-gray-600 dark:text-black">JB</span>
            </div>
          </a>
        </span>

        <ul className='flex ml-48'>
          {menuItem.map(item => (
            <li className='px-4 relative top-1'key={item.path}>
              <Link onClick={reload} className={`${item.path === pathname ? 'text-gray-600' : 'text-white'} hover:text-gray-600`}to={item.path}>
                {item.label}
              </Link>
              </li>
          ))}
        </ul>

        <ul className='flex w-60 justify-evenly'>
          <li className='inline hover:text-gray-600 px-2'> <a href='https://www.linkedin.com/in/jasper-bucad' title='Connect with me on Linkedin' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 inline"><path fill="currentColor"
          d={linkedInIcon}/></svg>
            </a></li>
          <li className='inline hover:text-gray-600 px-2'> <a href='https://github.com/justjjasper' title='View my code on Github' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-8 h-8 inline"><path fill="currentColor" d={githubIcon}/></svg>
            </a></li>
          <li className='inline hover:text-gray-600 px-2'> <a href='https://www.instagram.com/onlywithjasper/' title='Follow me on Instagram' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 inline"><path fill="currentColor"
          d= {igIcon}/></svg>
            </a></li>
        </ul>
      </nav>
    </div>
  )
}