import { useState, useEffect, useRef, lazy } from 'react';
const LazyFooter = lazy(() => import('../Footer'));
import { selfImage, snowtumImage } from '../../images/images'
import { reactNativeIcon, typeScriptIcon, reduxIcon, nodeJSIcon, expressJSIcon, figmaIcon, awsIcon, nextSVG } from '../../images/icons';

export default function About () {
  const [aboutInView, setAboutInView] = useState<boolean>(false);
  const [chart, setChart] = useState<boolean>(false);
  // const [naruto, setNaruto] = useState<boolean>(false);

  const [snowtumHovered, setSnowtumHovered] = useState(false)
  const [fitLogHovered, setFitLogHovered] = useState(false);
  const [lakersHovered, setLakersHovered] = useState(false);

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

  const handleLakersMouseEnter = () => {
    setLakersHovered(true);
  };

  const handleLakersMouseLeave = () => {
    setLakersHovered(false);
  };

  const aboutRef = useRef(null);
  const chartRef = useRef(null);
  // const narutoRef = useRef(null);

  let narutoUnobserve = false

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       const { isIntersecting, target } = entry;
  //       switch (target) {
  //         case aboutRef.current:
  //           setAboutInView(isIntersecting);
  //           // aboutUnobserve = true
  //           //@ts-ignore
  //           // if (aboutUnobserve) observer.unobserve(aboutRef.current)

  //         break;
  //         case chartRef.current:
  //           setChart(isIntersecting);
  //           break;
  //         // case narutoRef.current:
  //         //   setNaruto(isIntersecting);
  //         //   narutoUnobserve = true
  //         // break;
  //         default:
  //         break;
  //       }
  //     });
  //   });

  //   // @ts-ignore

  //   observer.observe(aboutRef.current);
  //   //@ts-ignore
  //   observer.observe(chartRef.current);
  //   //@ts-ignore
  //   // observer.observe(narutoRef.current);


  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [aboutRef.current]);

  return (
    <div className='flex-col flex '>
      {/* About */}
      <section className='flex about shadow-md mb-1 justify-center'>
        <div ref={aboutRef} id='about' className='about lg:border-b-[1.5px] border-b-0 font-proxima text-[#333333] flex lg:flex-row flex-col justify-between xsm:my-[5.5rem] w-9/12 my-16 items-center'>
          <span className='flex flex-col self-center'>
            <h1 className='text-8xl font-bold mb-6'>about.</h1>
            <div className='text-2xl lg:w-[25ch] mb-6 font-light text-[#7B7B7B]'>I'm a Web Developer based in Los Angeles, California.</div>
            <div className='text-lg lg:w-[43ch] font-light tracking-wide'>I'm a tech enthusiast with a keen eye for design and create intricate websites.  When I'm not coding, you can find me doing activities that gets my heart racing!</div>
          </span>

          <img className='relative transition-transform duration-[1000ms] ease-in-out lg:w-5/12 lg:h-5/12 sm:w-9/12 sm:h-9/12 object-contain border-b-[1.5px] lg:border-b-0 xsm:mt-0 mt-7 pr-0 lg:pr-10' src={selfImage} alt='Self Image'/>

        </div>
      </section>

      {/* <section className='randomFacts flex justify-center font-light py-2 w-full border-b-[1.5px]'>
        <div ref={narutoRef} id='naruto' className={`h-4/12 w-4/12 transition-transform duration-[1000ms] ease-in-out ${naruto ? '' : "-translate-x-full"}`}>
          <img src='../../images/epicNaruto.png' loading='lazy'/>
        </div>

        <div className='text-xl flex flex-col text-gray-600 self-center'>
          <span className='text-3xl text-black pb-4'>Random Facts</span>
          <span className='py-2'>I've ran 6 Marathons</span>
          <span className='py-2'>My favorite anime is Naruto</span>
          <span className='py-2 w-[25ch]'>I was born with a hole in my heart but it closed miracously</span>
          <span className='py-2 w-[25ch]'>My squat, bench, & deadlift collective total is 1000lbs</span>
          <span className='py-2'>I have a maltipoo named Mango</span>
        </div>
      </section> */}

      {/* Latest Works */}
      <section className='latestWorks flex py-16 w-full border-b-[1.5px] shadow-md justify-center bg-[#FAFAFA]'>
        <div className='contentContainer flex flex-col items-center border-t-[1.3px] border-gray relative w-9/12'>
          <h3 className='header absolute text-center w-[320px] top-[-0.8rem] bg-[#FAFAFA] text-xl'>SOME OF MY LATEST WORK</h3>
          <div className='projectContainer w-full py-5 flex justify-between md:flex-row flex-col items-center md:gap-0 gap-7'>

            {/* Snowtum Shredders Project */}
            <div className='project snowtumShredders relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform hover:shadow-latetstWorksShadow-lg flex flex-col overflow-hidden'
                onMouseEnter={handleSnowtumMouseEnter}
                onMouseLeave={handleSnowtumMouseLeave}>
                  <span className='p-3'>
                    <img className={`h-[200px] w-[305px] rounded shadow-sm ${snowtumHovered ? 'blur-sm' : ''}`} src={snowtumImage} alt='SnowtumShredders Image'/>
                  </span>
                  <p className='pl-3 text-xl text-black'>Snowtum Shredders</p>
                  <p className='pl-3'>Snowboard e-Commerce Website</p>

                  <div
                  className={`SnowtumDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
                  ${snowtumHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
                    <div className='p-7 text-white flex flex-col justify-around h-full'>
                      <div>
                        <p className='text-xl font-semibold text-red-500'>Snowtum Shredders</p>
                        <p className='font-thin'>A modern look at a responsive web design e-Commerce website that sells snowgear.
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
                        href='https://snowtumshredders.com'
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

            {/* Lakers Project */}
            <div className='latestWork Strings relative shadow-latestWorksShadow-md w-[330px] h-[275px] rounded-md transform transition-transform  hover:shadow-latetstWorksShadow-lg flex md:hidden flex-col overflow-hidden xl:flex'
              onMouseEnter={handleLakersMouseEnter}
              onMouseLeave={handleLakersMouseLeave}>
              <span className='p-3'>
                <img className={`h-[200px] w-[305px] object-cover rounded shadow-sm ${lakersHovered ? 'blur-sm' : ''}`} src="../../images/lakersStatApp.png" alt='Lakers Image' loading='lazy'/>
              </span>
              <p className='pl-3 text-xl text-black'>Lakers Stat App</p>
              <p className='pl-3'>Stat Display Web Application</p>

              <div className={`StringsDesc absolute w-full h-full bg-black-70 transform transition-all duration-300
              ${lakersHovered ? 'hover:translate-x-0' : 'translate-x-full'}`}>
                <div className='p-7 text-white flex flex-col justify-around h-full'>
                  <div>
                    <p className='text-xl font-semibold text-red-500'>Strings</p>
                    <p className='font-thin'>A small web application that displays the top 3 players of a given stat within the Lakers team.
                    </p>
                  </div>

                  <div className='py-2'>
                    <p className='text-l font-semibold text-red-500'>Technology</p>
                    <span className='techIcons flex justify-between w-10/12 font-thin'>
                      Next.js |
                      Tailwind CSS |
                      React.js |
                      Vercel
                    </span>
                  </div>

                  <div className='font-bold relative group w-40'>
                    <a
                      href='https://lakers-stat-lp4t6xo79-jasper-bucads-projects.vercel.app/'
                      target='_blank'
                      className='relative z-10 py-2 justify-center text-white transition duration-300 ease-in-out flex items-center'
                      >
                      <div className='relative z-10 flex px-4 whitespace-no-wrap'>Visit Website</div>
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

                      <div className='py-2'>
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

          </div>
        </div>
      </section>

      {/* Chart */}
      <section ref={chartRef} id='chart' className='flex shadow-sm mt-0.5 w-full justify-center font-light lg:py-8 py-20 px-10 border-b-[1.5px] flex-col lg:flex-row items-center'>
          <div className='text-xl self-center flex flex-col text-gray-600 lg:text-left text-center mb-10 lg:mb-0'>
            <span className='text-3xl text-black pb-4 '>Part Weekend Warrior</span>
            <span className='py-2'>Runner</span>
            <span className='py-2'>Snowboarder</span>
            <span className='py-2'>Weightlifter</span>
            <span className='py-2'>Professional Eater</span>
           </div>
          <div className={`w-[45%] object-contain h-6/12 pr-16 transition-transform duration-[3000ms] ease-in-out ${chart ? '' : "opacity-50"} hidden lg:block`}>
            <img src='../../images/pieChart.png' alt='Pie Chart of Skills' loading='lazy'/>
          </div>
          <div className='text-xl self-center flex flex-col text-gray-600 lg:text-left text-center mb-10 lg:mb-0'>
            <span className='text-3xl text-black pb-4'>Part Coder</span>
            <span className='py-2'>Front End Developer</span>
            <span className='py-2'>React JS / Next.js</span>
            <span className='py-2'>UI Design</span>
            <span className='py-2'>Squashing Bugs</span>
          </div>
          <div className={`md:w-[45%] object-contain md:h-6/12 transition-transform duration-[3000ms] ease-in-out ${chart ? '' : "opacity-50"} block lg:hidden`}>
            <img src='../../images/pieChart.png' loading='lazy'/>
          </div>
      </section>

      {/* MySkills */}
      <section className='mySkills flex shadow-md mb-1 flex-col bg-[#FAFAFA] w-full items-center p-10'>
        <span className='text-3xl mb-6'>My Skills</span>


        <div className= 'skillsContentContainer flex flex-col font-light justify-around w-full mb-10 md:flex-row items-center'>

          <div className='iconContainer flex flex-col xsm:w-96 h-72 w-80 justify-center gap-16'>
            <span className= 'flex flex-row justify-between'>
              <img src='../../images/reactIcon.png' className='h-24 w-30 transition-transform transform-gpu hover:scale-110'
                alt='React Icon' loading='lazy'
              />
              <img src='../../images/tailwindIcon.png' className='h-16 w-24 transition-transform transform-gpu hover:scale-110'
                alt='Tailwind Icon' loading='lazy'/>
              <img src='../../images/htmlAndCSSIcon.png' className='h-24 w-24 transition-transform transform-gpu hover:scale-110'
                alt='Html Icon' loading='lazy'
              />
            </span>
            <span className= 'flex flex-row justify-between'>
              <img src='../../images/nextjsIcon.png' className='h-24 w-24 transition-transform transform-gpu hover:scale-110'
                alt='Nextjs Icon' loading='lazy'
              />
              <img src='../../images/figmaIcon.png'className='h-24 w-16 transition-transform transform-gpu hover:scale-110'
                alt='Figma Icon' loading='lazy'
              />
              <a href='https://www.tiktok.com/@jasperswrld.com/video/7245148001432390954' target='_blank'>
                <img src='../../images/snowboardIcon.png' className='h-24 w-24 transition-transform transform-gpu hover:scale-110'
                  alt='Snowboarding Icon' loading='lazy'
                />
              </a>
            </span>
           </div>

          <div className='skillBars flex flex-col justify-between w-full sm:w-9/12 md:w-5/12 lg:py-0 py-10'>
            <div className='reactSkillBar'>
              <div className='topPortion flex flex-row justify-between' style={{ width: '90%' }}>
                <div>React JS</div>
                <div className='relative left-4'>90%</div>
              </div>

              <div className='bottomPortion'>
                <div className='w-full h-4 bg-[#D9D9D9] rounded-md'>
                  <div className='h-full bg-orange rounded-md' style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <div className='tailwindSkillBar'>
              <div className='topPortion flex flex-row justify-between' style={{ width: '80%' }}>
                <div>Tailwind</div>
                <div className='relative left-4'>80%</div>
              </div>

              <div className='bottomPortion'>
                <div className='w-full h-4 bg-[#D9D9D9] rounded-md'>
                  <div className='h-full bg-orange rounded-md' style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            <div className='htmlSkillBar'>
              <div className='topPortion flex flex-row justify-between' style={{ width: '85%' }}>
                <div>HTML/CSS</div>
                <div className='relative left-4'>85%</div>
              </div>

              <div className='bottomPortion'>
                <div className='w-full h-4 bg-[#D9D9D9] rounded-md'>
                  <div className='h-full bg-orange rounded-md' style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className='nextjsSkillBar'>
            <div className='topPortion flex flex-row justify-between' style={{ width: '85%' }}>
                <div>Next.js</div>
                <div className='relative left-4'>85%</div>
              </div>

              <div className='bottomPortion'>
                <div className='w-full h-4 bg-[#D9D9D9] rounded-md'>
                  <div className='h-full bg-orange rounded-md' style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className='figmaSkillBar'>
              <div className='topPortion flex flex-row justify-between' style={{ width: '80%' }}>
                <div>Figma</div>
                <div className='relative left-4'>80%</div>
              </div>

              <div className='bottomPortion'>
                <div className='w-full h-4 bg-[#D9D9D9] rounded-md'>
                  <div className='h-full bg-orange rounded-md' style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            <div className='snowboardingSkillBar'>
             <div className='topPortion flex flex-row justify-between' style={{ width: '75%' }}>
                <div>Snowboarding</div>
                <div className='relative left-4'>75%</div>
              </div>

              <div className='bottomPortion'>
                <div className='w-full h-4 bg-[#D9D9D9] rounded-md'>
                  <div className='h-full bg-orange rounded-md' style={{ width: '75%' }}></div>
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
