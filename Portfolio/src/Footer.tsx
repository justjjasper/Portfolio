import { upArrow } from '../images/icons';
import { useLocation } from 'react-router-dom'
import './Footer.css'

export default function Footer() {

  const menuItem = [
    { path: '/about', label: 'about' },
    // { path: '/experience', label: 'experience' },
    { path: '/projects', label: 'projects' },
    { path: '/contact', label: 'contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <section className= 'text-[#8E8E8E] flex items-center justify-around bg-[#F4F4F4] h-24'>

      <div className='fakeBackGroundButton bg-[#F4F4F4] flex self-start h-[70px] w-32 absolute -mt-16 rounded-t-full'></div>

      <div className='topScrollButtonBg inset-shadow h-16 w-32 bg-[#F4F4F4] rounded-t-full flex self-start absolute -mt-16 justify-center'
      onClick={scrollToTop}>
        <div className= 'flex self-end'>
          {upArrow}
        </div>
      </div>

      <div className='w-9/12 flex justify-center lg:justify-between'>


        <div className='@JasperBucad hover:text-black'>
          <a href= '/'> © 2023 Jasper Bucad</a>
        </div>

        <nav className= 'FooterMenu hidden lg:block'>
          <ul className='flex justify-around w-80'>
          {menuItem.map((item, index) => (
              <li key={index}>
                <a className='hover:text-gray-600' href= {item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}