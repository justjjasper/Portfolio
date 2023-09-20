import { useState } from "react";
import { reactNativeIcon, typeScriptIcon, reduxIcon, figmaIcon, nodeJSIcon,expressJSIcon } from "../../images/icons";

export default function Home () {

  const [fitLogHovered, setFitLogHovered] = useState(false);
  const [stringsHovered, setStringsHovered] = useState(false);
  const [systemDesignHovered, setSystemDesignHovered] = useState(false);

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

  return (
    <div className='flex flex-col'>

      <section className= 'landingSection h-[37rem] border-b-2 w-full justify-center flex p-20 text-[#333333]'>
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


      <section className= 'latestWorks shadow-md mb-[1px] bg-[#FAFAFA] text-[#7B7B7B] w-full h-[32rem] items-center flex justify-center flex-col pb-10'>
      <div className='w-9/12 flex justify-between mb-3'>
        <div className=''>───────────────────────</div>
        <div className='font-proxima-semibold tracking-wide'>SOME OF MY LATEST WORKS</div>
        <div className=''>───────────────────────</div>
      </div>

      <div className='w-9/12 flex justify-between'>

        <div className={`latestWork FitLog relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden
        ${fitLogHovered ? 'backdrop-blur-2xl' : ''}`
      }

        onMouseEnter={handleFitLogMouseEnter}
        onMouseLeave={handleFitLogMouseLeave}
        >

          <span className='p-3'>
           <img className='h-[200px] w-[305px] rounded shadow-sm' src='../../images/fitLogHorizontalLogo.png' alt='FitLog+ Image'/>
          </span>
          <p className='pl-3 text-xl text-black'>FitLog+</p>
          <p className='pl-3'>Fitness Mobile Application</p>

          <div
          className={`FitLogDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
          ${fitLogHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}
          >
            <div className='p-7 text-white flex flex-col justify-around h-full'>
              <p className='text-xl font-semibold'>Title</p>
              <p className='font-thin'>Developed a bite-sized fitness mobile application where users can track and log their workout sets.</p>
              <p className='text-l font-semibold'>Technology</p>
              <span className='techIcons flex'>
                {reactNativeIcon}
                {typeScriptIcon}
                {reduxIcon}
                {nodeJSIcon}
                {expressJSIcon}
                {figmaIcon}
              </span>
            </div>

          </div>
        </div>


        <div className='latestWork Strings shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform    hover:shadow-latetstWorksShadow-lg flex flex-col'
        >
          <span className='p-3'>
            <img className='h-[200px] w-[305px] object-cover rounded shadow-sm' src='../../images/fecLandingPage.png' alt='Strings Image'/>
          </span>
          <p className='pl-3 text-xl text-black'>Strings</p>
          <p className='pl-3'>Mock e-Commerce Web Page</p>
        </div>

        <div className='latestWork SystemDesign shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform    hover:shadow-latetstWorksShadow-lg flex flex-col'>
          <span className='p-3'>
            <img className='h-[200px] w-[305px] object-fit rounded shadow-sm' src='../../images/loadBalancer.png' alt='System Design Image'/>
          </span>
          <p className='pl-3 text-xl text-black'>System Design</p>
          <p className='pl-3'>Optimized a Legacy System</p>
        </div>

      </div>
      </section>
    </div>
  )
}