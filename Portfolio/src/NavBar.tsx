import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { githubIcon, linkedInIcon, igIcon, mobileMenuSVG } from '../images/icons';

export default function NavBar () {
  const { pathname } = useLocation();

  const [showNav, setShowNav] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShowNav(true), 150)
  }, []);

  const menuItem = [
    { path: '/', label: 'home'},
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
    <section className= {`bg-black text-white font-proxima text-lg flex justify-center items-center transform transition-transform duration-[400ms] ease-in ${showNav ? '' : "-translate-y-full"} md:h-24 h-16 w-full`}>
       {/* <div className='flex absolute'>
        <div className='relative naruto run'/>
        <div className='relative naruto-standing stand right-4 bottom-2'/>
      </div> */}
      <div className='flex justify-center items-center  w-full flex-col'>
        <nav className='sm:w-9/12 w-11/12 flex justify-between items-center'>
          <span>
            <a href='/' onClick={reload}>
              <div className="relative inline-flex items-center justify-center md:w-14 md:h-14 w-11 h-11 overflow-hidden bg-gray-100 rounded-full hover:bg-gray-600 ">
                <span className="font-medium md:text-3xl  text-2xl text-gray-600 dark:text-black">JB</span>
              </div>
            </a>
          </span>

          <ul className='md:flex hidden lg:ml-48'>
            {menuItem.map(item => (
              <li className='px-4 relative top-1'key={item.path}>
                <Link onClick={reload} className={`${item.path === pathname ? 'text-gray-600' : 'text-white'} hover:text-gray-600`}to={item.path}>
                  {item.label}
                </Link>
                </li>
            ))}
          </ul>

          <ul className='hidden md:flex w-60 justify-evenly items-center'>
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

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className='lg:hidden'
          >
          <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 md:h-10 md:w-10 md:hidden block' x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" fill={`${mobileMenu ? 'gray' : 'white'}`}>{mobileMenuSVG}</svg>
          </button>
        </nav>

        <div className={`mobileMenu top-[64px] xsm:top-[4rem] text-black absolute ${mobileMenu ? 'block' : 'hidden'} md:hidden transform transition-transform duration-300 ease-in-out ${mobileMenu ? 'translate-y-0' : 'translate-y-full'} w-full flex justify-center items-center`}>
          <nav className='text-3xl font-light w-full flex flex-col items-center justify-center'>
            <ul className='flex flex-col items-center justify-center w-full'>
              <li className='flex border-b-[0.5px] border-gray-500 py-4 w-full items-center justify-center bg-[#222222]'>
                <a
                  onClick={reload}
                  href='/'
                  className='text-white hover:text-gray-600'
                >
                  home
                </a>
              </li>
              <li className='flex border-b-[0.5px] border-gray-500 py-4 w-full items-center justify-center bg-[#222222]'>
                <a
                  onClick={reload}
                  href='/about'
                  className='text-white hover:text-gray-600'
                >
                  about
                </a>
              </li>
              <li className='flex border-b-[0.5px] border-gray-500 py-4 w-full items-center justify-center bg-[#222222]'>
                <a
                  onClick={reload}
                  href='/projects'
                  className='text-white hover:text-gray-600'
                >
                  projects
                </a>
              </li>
              <li className='flex border-b-[0.5px] border-gray-500 py-4 w-full items-center justify-center bg-[#222222]'>
                <a
                  href='/contact'
                  className='text-white hover:text-gray-600'
                >
                  contact
                </a>
              </li>

            </ul>
            <ul className='flex flex-row w-full items-center justify-center border-gray-500 bg-[#222222] py-4 text-white'>
              <li className='inline hover:text-gray-600 px-6'> <a href='https://www.linkedin.com/in/jasper-bucad' title='Connect with me on Linkedin' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 inline"><path fill="currentColor"
              d={linkedInIcon}/></svg>
                </a></li>
              <li className='inline hover:text-gray-600 px-6'> <a href='https://github.com/justjjasper' title='View my code on Github' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-8 h-8 inline"><path fill="currentColor" d={githubIcon}/></svg>
                </a></li>
              <li className='inline hover:text-gray-600 px-6'> <a href='https://www.instagram.com/onlywithjasper/' title='Follow me on Instagram' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 inline"><path fill="currentColor"
              d= {igIcon}/></svg>
                </a></li>
            </ul>

          </nav>
        </div>

      </div>
    </section>
  )
}