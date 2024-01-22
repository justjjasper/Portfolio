import { useState, lazy } from "react";
import { reactNativeIcon, typeScriptIcon, reduxIcon, figmaIcon, nodeJSIcon,expressJSIcon, awsIcon, psqlIcon, nextSVG} from "../../images/icons";
import { projectImage, fecLandingImage, snowtumImage } from "../../images/images";
const LazyFooter = lazy(() => import('../Footer'));

export default function Projects () {

  // FitLog+
  // Strings
  // System Design
  // RoadTripper
  // Object Tracking?
  const [snowtumHovered, setSnowtumHovered] = useState(false)
  const [fitLogHovered, setFitLogHovered] = useState(false);
  const [stringsHovered, setStringsHovered] = useState(false);
  const [systemDesignHovered, setSystemDesignHovered] = useState(false);
  const [roadTripHovered, setRoadTripHovered] = useState(false);

  const handleSnowtumMouseEnter = () => {
    setSnowtumHovered(true);
  };

  const handleSnowtumMouseLeave = () => {
    setSnowtumHovered(false);
  };

  const handleFitLogMouseEnter = () => {
    setFitLogHovered(true);
  };

  const handleFitLogMouseLeave = () => {
    setFitLogHovered(false);
  };

  const handleStringsMouseEnter = () => {
    setStringsHovered(true);
  };

  const handleStringsMouseLeave = () => {
    setStringsHovered(false);
  };

  const handleSystemDesignMouseEnter = () => {
    setSystemDesignHovered(true);
  };

  const handleSystemDesignMouseLeave = () => {
    setSystemDesignHovered(false);
  };

  const handleRoadTripMouseEnter = () => {
    setRoadTripHovered(true);
  };

  const handleRoadTripMouseLeave = () => {
    setRoadTripHovered(false);
  };

  return (
    <div className='flex flex-col'>
      {/* Projects Intro */}
      <section className='flex shadow-md mb-1 justify-center py-24'>
        <div className='ProjectsIntoContainer flex lg:flex-row flex-col justify-between items-center w-9/12 gap-10'>
          <div className='contentContainer flex flex-col font-proxima text-[#333333] gap-8'>
            <span className='text-8xl font-bold tracking-tighter'>projects.</span>
            <span className='text-[#7B7B7B] text-2xl font-light lg:w-[30ch]'>Checkout some of my latest coding projects.</span>
            <span className='lg:w-[50ch] tracking-wide font-light text-lg'>I have experience in collaborating with other software engineers to create applications and also worked on personal side projects such as UI Design and mobile applications.</span>
          </div>
          <img className='lg:h-6/12 lg:w-6/12 xsm:w-8/12 xsm:h-8/12' src={projectImage} alt='Picture of projects'/>
        </div>
      </section>

      {/* List of Projects */}
      <section className='projects flex shadow-md mb-1 bg-[#FAFAFA] justify-center items-center py-24'>

        <div className='listOfProjectsContainer flex flex-row justify-center items-center gap-8 xsm:w-9/12 w-full flex-wrap'>

          {/* Snowtum Shredders Project */}
          <div className='project snowtumShredders relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
          onMouseEnter={handleSnowtumMouseEnter}
          onMouseLeave={handleSnowtumMouseLeave}>
            <span className='p-3'>
              <img className={`h-[200px] w-[305px] rounded shadow-sm ${snowtumHovered ? 'blur-sm' : ''}`} src={snowtumImage} alt='SnowtumShredders Image'/>
            </span>
            <p className='pl-3 text-xl text-black'>Snowtum Shredders</p>
            <p className='pl-3'>Snowboard e-Commerce Website</p>
              <div className={`SnowtumDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
              ${snowtumHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
                <div className='p-7 text-white flex flex-col justify-around h-full'>
                  <div>
                    <p className='text-xl font-semibold text-red-500'>Snowtum Shredders</p>
                    <p className='font-thin'>A responsive web design e-Commerce website that sells snowgear. Users are able to purchase items through the STRIPE API.
                    </p>
                  </div>
                  <div className='py-2'>
                    <p className='text-l font-semibold text-red-500'>Technology</p>
                    <span className='techIcons flex justify-between font-thin'>
                      Next.js |
                      TypeScript |
                      Django |
                      PostgreSQL |
                      AWS |
                      Stripe API
                    </span>
                  </div>

                  <div className='font-bold relative group xsm:w-48 w-40'>
                    <a
                      href='http://snowtumshredders.com'
                      target='_blank'
                      className='relative z-10 py-2  justify-center text-white transition duration-300 ease-in-out flex items-center'
                      >
                      <div className='relative z-10 flex px-4'>Visit Website</div>
                      <div className='absolute w-full h-8 bg-red-500 rounded-full group-hover:opacity-75 duration-300'></div>
                    </a>
                  </div>
                </div>
              </div>
          </div>

          {/* FitLog+ Project */}
          <div className='project FitLog relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
              onMouseEnter={handleFitLogMouseEnter}
              onMouseLeave={handleFitLogMouseLeave}>
                <span className='p-3'>
                  <img className={`h-[200px] w-[305px] rounded shadow-sm ${fitLogHovered ? 'blur-sm' : ''}`} src='../../images/fitLogHorizontalLogo.png' alt='FitLog+ Image' loading='lazy'/>
                </span>
                <p className='pl-3 text-xl text-black'>FitLog+</p>
                <p className='pl-3'>Fitness Mobile Application</p>

                <div
                className={`FitLogDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
                ${fitLogHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
                  <div className='p-7 text-white flex flex-col justify-around h-full'>
                    <div>
                      <p className='text-xl font-semibold text-red-500'>FitLog+</p>
                      <p className='font-thin'>Developed a bite-sized fitness mobile application where users can track and log their workout sets.
                      </p>
                    </div>

                    <div>
                      <p className='text-l font-semibold text-red-500'>Technology</p>
                      <span className='techIcons flex justify-between font-thin'>
                        React Native |
                        TypeScript |
                        Redux |
                        Node.js |
                        Express.js |
                        Figma
                      </span>
                    </div>

                  <div className='font-bold relative group xsm:w-48 w-52'>
                    <a
                      href='https://www.figma.com/proto/x4fC1slppUfi90Xu3fFvlK/Mobile-Projects?type=design&node-id=1-13&t=at4T8GQ59i5dhzfS-1&scaling=scale-down&page-id=0%3A1'
                      target='_blank'
                      className='relative z-10 py-2  justify-center text-white transition duration-300 ease-in-out flex items-center'
                      >
                      <div className='relative z-10 flex px-4'>Figma Presentation</div>
                      <div className='absolute w-full h-8 bg-red-500 rounded-full group-hover:opacity-75 duration-300'></div>
                    </a>
                  </div>
                </div>
              </div>
          </div>

          {/* Strings Project */}
          <div className='latestWork Strings relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform  hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
            onMouseEnter={handleStringsMouseEnter}
            onMouseLeave={handleStringsMouseLeave}>
            <span className='p-3'>
              <img className={`h-[200px] w-[305px] object-cover rounded shadow-sm ${stringsHovered ? 'blur-sm' : ''}`} src={fecLandingImage} alt='Strings Image' loading='lazy'/>
            </span>
            <p className='pl-3 text-xl text-black'>Strings</p>
            <p className='pl-3'>Mock e-Commerce Web Page</p>

            <div className={`StringsDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
            ${stringsHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
              <div className='p-7 text-white flex flex-col justify-around h-full'>
                <div>
                  <p className='text-xl font-semibold text-red-500'>Strings</p>
                  <p className='font-thin'>Created a mock e-commerce website where users can add reviews, questions and items into cart.
                  </p>
                </div>

                <div>
                  <p className='text-l font-semibold text-red-500'>Technology</p>
                  <span className='techIcons flex justify-between w-10/12 font-thin'>
                    React |
                    Node.js |
                    Express.js |
                    AWS
                  </span>
                </div>

                <div className='font-bold relative group w-40'>
                  <a
                    href='http://ec2-54-227-152-111.compute-1.amazonaws.com:3000/'
                    target='_blank'
                    className='relative z-10 py-2 justify-center text-white transition duration-300 ease-in-out flex items-center'
                    >
                    <div className='relative z-10 flex px-4 whitespace-nowrap'>Visit Website</div>
                    <div className='absolute w-full h-8 bg-red-500 rounded-full group-hover:opacity-75 duration-300'></div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* System Design Project */}
          <div className='latestWork SystemDesign relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
          onMouseEnter={handleSystemDesignMouseEnter}
          onMouseLeave={handleSystemDesignMouseLeave}
          >
            <span className='p-3'>
              <img className={`h-[200px] w-[305px] object-fit rounded shadow-sm ${systemDesignHovered ? 'blur-sm' : ''}`} src='../../images/loadBalancer.png' alt='System Design Image' loading='lazy'/>
            </span>
            <p className='pl-3 text-xl text-black'>System Design</p>
            <p className='pl-3'>Optimized a Legacy System</p>

            <div className={`SystemDesignDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
            ${systemDesignHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
              <div className='p-7 text-white flex flex-col justify-around h-full'>
                <div>
                  <p className='text-xl font-semibold text-red-500'>System Design</p>
                  <p className='font-thin'>Replaced a legacy system/ API  from an E-commerce web application with a PostgreSQL Database.
                  </p>
                </div>

                <div className='py-4'>
                  <p className='text-l font-semibold text-red-500'>Technology</p>
                  <span className='techIcons flex justify-between w-10/12 font-thin'>
                    PostgreSQL |
                    React |
                    Node.js |
                    Express.js
                  </span>
                </div>

                <div className='font-bold relative group w-32'>
                  <a
                    href='https://github.com/PickleRick-SDC/Products'
                    target='_blank'
                    className='relative z-10 justify-center text-white transition duration-300 ease-in-out flex items-center'>
                    <div className='relative z-10 flex px-4'>Github Link</div>
                    <div className='absolute w-full h-8 bg-red-500 rounded-full group-hover:opacity-75 duration-300'></div>
                    </a>
                  </div>
                </div>
              </div>
          </div>

          {/* RoadTrip Project */}
          <div className='latestWork RoadTrip relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
          onMouseEnter={handleRoadTripMouseEnter}
          onMouseLeave={handleRoadTripMouseLeave}
          >
            <span className='p-3'>
              <img className={`h-[200px] w-[305px] object-cover rounded shadow-sm ${roadTripHovered ? 'blur-sm' : ''}`} src='../../images/roadTripSplash-removebg-preview.png' alt='Road Trip Image' loading='lazy'/>
            </span>
            <p className='pl-3 text-xl text-black'>Road Trip</p>
            <p className='pl-3'>Destination Planner Mobile Application.</p>

            <div className={`RoadTripDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
            ${roadTripHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
              <div className='p-7 text-white flex flex-col justify-around h-full'>
                <div>
                  <p className='text-xl font-semibold text-red-500'>Road Trip</p>
                  <p className='font-thin'>Built a mobile iOS application that allows users to plan stops and other point of interests for their road trip
                  </p>
                </div>

                <div className='py-4'>
                  <p className='text-l font-semibold text-red-500'>Technology</p>
                  <span className='techIcons flex justify-between w-10/12 font-thin'>
                    React Native |
                    PostgreSQL |
                    TypeScript |
                    Node.js |
                    Express.js
                  </span>
                </div>

                <div className='font-bold relative group w-32'>
                  <a
                    href='https://github.com/naruto-blue-ocean'
                    target='_blank'
                    className='relative justify-center z-10 text-white transition duration-300 ease-in-out flex items-center'>
                    <div className='relative z-10 flex px-4'>Github Link</div>
                    <div className='absolute w-full h-8 bg-red-500 rounded-full group-hover:opacity-75 duration-300'></div>
                    </a>
                  </div>
                </div>
              </div>
          </div>

        </div>
      </section>
      <LazyFooter/>
    </div>
  )
}