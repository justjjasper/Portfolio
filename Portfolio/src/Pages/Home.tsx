import { useEffect, useState } from "react";
import { reactNativeIcon, typeScriptIcon, reduxIcon, figmaIcon, nodeJSIcon,expressJSIcon, awsIcon, psqlIcon} from "../../images/icons";

export default function Home () {

  const [fitLogHovered, setFitLogHovered] = useState(false);
  const [stringsHovered, setStringsHovered] = useState(false);
  const [systemDesignHovered, setSystemDesignHovered] = useState(false);
  const [showSection, setShowSection] = useState(false);

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

  useEffect(() => {
    // Use this useEffect to control when to show the section
    // For example, you can use a timer or some other event to trigger it
    const timer = setTimeout(() => {
      setShowSection(true);
    }, 900);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`flex flex-col  ${showSection ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
      <section className='landingSection h-[37rem] flex shadow-md mb-1 w-full justify-center p-20 text-[#333333]'
      >
        <div className='flex flex-col self-center font-proxima relative right-10'>
          <h1 className="pb-4 text-6xl  w-[10ch] font-bold tracking-tight">weekend warrior</h1>
          <span className='w-[25ch] text-[#7B7B7B]'>Athlete that loves physical activities.</span>
        </div>

        <img className='w-96 h-96 object-cover relative right-10'src='../../images/1.JPG'/>

        <div className='flex flex-col w-[25ch] self-center font-proxima'>
          <h1 className='pb-4 text-6xl font-bold tracking-tight'>&lt;coder&gt;</h1>
          <span className='text-[#7B7B7B]'>Software Developer that writes clean and effcient code.</span>
        </div>
      </section>

      <section className= 'latestWorks flex shadow-md mb-[1px] bg-[#FAFAFA] text-[#7B7B7B] w-full h-[32rem] items-center      justify-center flex-col pb-10'>
        <div className='w-9/12 flex justify-between mb-3'>
          <div className=''>───────────────────────</div>
          <div className='font-proxima-semibold tracking-wide'>SOME OF MY LATEST WORKS</div>
          <div className=''>───────────────────────</div>
        </div>

        <div className='w-9/12 flex justify-between'>
          <div className='latestWork FitLog relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
          onMouseEnter={handleFitLogMouseEnter}
          onMouseLeave={handleFitLogMouseLeave}>
            <span className='p-3'>
              <img className={`h-[200px] w-[305px] rounded shadow-sm ${fitLogHovered ? 'blur-sm' : ''}`} src='../../images/fitLogHorizontalLogo.png' alt='FitLog+ Image'/>
            </span>
            <p className='pl-3 text-xl text-black'>FitLog+</p>
            <p className='pl-3'>Fitness Mobile Application</p>

            <div
            className={`FitLogDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
            ${fitLogHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
              <div className='p-7 text-white flex flex-col justify-around h-full'>
                <div>
                  <p className='text-xl font-semibold'>FitLog+</p>
                  <p className='font-thin'>Developed a bite-sized fitness mobile application where users can track and log their workout sets.
                  </p>
                </div>

                <div>
                  <p className='text-l font-semibold'>Technology</p>
                  <span className='techIcons flex justify-between'>
                    {reactNativeIcon}
                    {typeScriptIcon}
                    {reduxIcon}
                    {nodeJSIcon}
                    {expressJSIcon}
                    {figmaIcon}
                  </span>
                </div>

              <div className='font-bold relative group w-[17ch]'>
                <a
                  href='https://www.figma.com/proto/x4fC1slppUfi90Xu3fFvlK/Mobile-Projects?type=design&node-id=1-13&t=at4T8GQ59i5dhzfS-1&scaling=scale-down&page-id=0%3A1'
                  target='_blank'
                  className='relative z-10 py-2  text-white transition duration-300 ease-in-out flex items-center'
                  >
                  <div className='relative z-10 flex px-4'>Figma Presentation</div>
                  <div className='absolute w-8 h-8 bg-red-500 rounded-full group-hover:w-full duration-300'></div>
                </a>
              </div>
            </div>
          </div>
          </div>

          <div className='latestWork Strings relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform  hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
            onMouseEnter={handleStringsMouseEnter}
            onMouseLeave={handleStringsMouseLeave}>
            <span className='p-3'>
              <img className={`h-[200px] w-[305px] object-cover rounded shadow-sm ${stringsHovered ? 'blur-sm' : ''}`} src='../../images/fecLandingPage.png' alt='Strings Image'/>
            </span>
            <p className='pl-3 text-xl text-black'>Strings</p>
            <p className='pl-3'>Mock e-Commerce Web Page</p>

            <div className={`StringsDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
            ${stringsHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
              <div className='p-7 text-white flex flex-col justify-around h-full'>
                <div>
                  <p className='text-xl font-semibold'>Strings</p>
                  <p className='font-thin'>Created a mock e-commerce website where users can add reviews, questions and items into cart.
                  </p>
                </div>

                <div>
                  <p className='text-l font-semibold'>Technology</p>
                  <span className='techIcons flex justify-between w-10/12'>
                    {reactNativeIcon}
                    {nodeJSIcon}
                    {expressJSIcon}
                    {awsIcon}
                  </span>
                </div>

                <div className='font-bold relative group w-[7ch]'>
                  <a
                    href='http://ec2-54-227-152-111.compute-1.amazonaws.com:3000/'
                    target='_blank'
                    className='relative z-10 py-2  text-white transition duration-300 ease-in-out flex items-center'
                    >
                    <div className='relative z-10 flex px-4'>Demo</div>
                    <div className='absolute w-8 h-8 bg-red-500 rounded-full group-hover:w-full duration-300'></div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className='latestWork SystemDesign relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
        onMouseEnter={handleSystemDesignMouseEnter}
        onMouseLeave={handleSystemDesignMouseLeave}
        >
          <span className='p-3'>
            <img className={`h-[200px] w-[305px] object-fit rounded shadow-sm ${systemDesignHovered ? 'blur-sm' : ''}`} src='../../images/loadBalancer.png' alt='System Design Image'/>
          </span>
          <p className='pl-3 text-xl text-black'>System Design</p>
          <p className='pl-3'>Optimized a Legacy System</p>

          <div className={`SystemDesignDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
          ${systemDesignHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
            <div className='p-7 text-white flex flex-col justify-around h-full'>
              <div>
                <p className='text-xl font-semibold'>System Design</p>
                <p className='font-thin'>Replaced a legacy system/ API  from an E-commerce web application with a PostgreSQL Database.
                </p>
              </div>

              <div className='py-4'>
                <p className='text-l font-semibold'>Technology</p>
                <span className='techIcons flex justify-between w-10/12'>
                  {psqlIcon}
                  {reactNativeIcon}
                  {nodeJSIcon}
                  {expressJSIcon}
                </span>
              </div>

              <div className='font-bold relative group w-[12ch]'>
                <a
                  href='https://github.com/PickleRick-SDC/Products'
                  target='_blank'
                  className='relative z-10 text-white transition duration-300 ease-in-out flex items-center'>
                  <div className='relative z-10 flex px-4'>Github Link</div>
                  <div className='absolute w-8 h-8 bg-red-500 rounded-full group-hover:w-full duration-300'></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}