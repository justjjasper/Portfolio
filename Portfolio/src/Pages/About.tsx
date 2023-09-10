import { useState, useEffect, useRef } from 'react';


export default function About () {
  const [aboutInView, setAboutInView] = useState<boolean>(false);
  const [chart, setChart] = useState<boolean>(false);
  const [naruto, setNaruto] = useState<boolean>(false);

  const aboutRef = useRef(null);
  const chartRef = useRef(null);
  const narutoRef = useRef(null);

  interface Map {
    [key: string]: number
  };

  const map:Map = {};

  const track = (target: Element) => {
    map[target.id] = 1
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting, target } = entry;
        switch (target) {
          case aboutRef.current:
            setAboutInView(isIntersecting);
            track(target)
            console.log(map)
            break;
          case chartRef.current:
            setChart(isIntersecting);
            track(target)
            break;
          case narutoRef.current:
            setNaruto(isIntersecting);
            track(target)
            break;
          default:
            break;
        }
      });
    });
    //@ts-ignore
    observer.observe(aboutRef.current);
    //@ts-ignore
    observer.observe(chartRef.current);
    //@ts-ignore
    observer.observe(narutoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`flex-col flex relative items-center`}>

      <div className='about shadow-md mb-1'>
        <div ref={aboutRef} id='about' className='about. border-b-[1.5px] font-proxima text-[#333333] flex justify-between my-[5.5rem] mx-[12rem]'>
          <span className={`text transition-transform duration-[1000ms] ease-in-out ${aboutInView ? '' : "-translate-x-full"} ${aboutInView ? '' : 'right-96'} self-center`}>
            <h1 className={`text-8xl relative font-bold mb-6`}>about.</h1>
            <div className='text-2xl w-[29ch] mb-6 font-light'>I'm a Software Developer based in Los Angeles, California.</div>
            <div className='text-lg w-[45ch] font-light'>I'm a tech enthusiast with a keen eye for design and create intricate websites.  When I'm not coding, you can find me doing activities that gets my heart racing!</div>
          </span>
            <img className={`relative transition-transform duration-[1000ms] ease-in-out ${aboutInView ? '' : "translate-x-full"} w-5/12 h-5/12 object-cover mr-10`} src='../../images/1.JPG'/>
        </div>
      </div>

      <div ref={chartRef} id='chart' className='bg-[#FAFAFA] shadow-sm mt-0.5 w-full flex justify-center font-light py-8
        px-10 border-b-[1.5px]'>
          <div className='text-xl self-center flex flex-col text-gray-600'>
            <span className='text-3xl text-black pb-4'>Part Weekend Warrior</span>
            <span className='py-2'>Runner</span>
            <span className='py-2'>Snowboarder</span>
            <span className='py-2'>Weightlifter</span>
            <span className='py-2'>Professional Eater</span>
           </div>
          <div className={`w-[45%] object-contain h-6/12 pr-16 transition-transform duration-[3000ms] ease-in-out ${chart ? '' : "opacity-50"}`}>
            <img src='../../images/pieChart.png'/>
          </div>
          <div className='text-xl self-center flex flex-col text-gray-600'>
            <span className='text-3xl text-black pb-4'>Part Coder</span>
            <span className='py-2'>Front End Developer</span>
            <span className='py-2'>React</span>
            <span className='py-2'>HTML / CSS</span>
            <span className='py-2'>Squashing Bugs</span>
          </div>
      </div>

      <div className='randomFacts flex justify-center font-light py-2 w-full border-b-[1.5px]'>
        <div ref={narutoRef} id='naruto' className={`h-4/12 w-4/12 transition-transform duration-[1000ms] ease-in-out ${naruto ? '' : "-translate-x-full"}`}>
          <img src='../../images/epicNaruto.png'/>
        </div>

        <div className='text-xl flex flex-col text-gray-600 self-center'>
          <span className='text-3xl text-black pb-4'>Random Facts</span>
          <span className='py-2'>I've ran 6 Marathons</span>
          <span className='py-2'>My favorite anime is Naruto</span>
          <span className='py-2 w-[25ch]'>I was born with a hole in my heart but it closed miracously</span>
          <span className='py-2 w-[25ch]'>My squat, bench, & deadlift collective total is 1000lbs</span>
          <span className='py-2'>I have a maltipoo named Mango</span>
        </div>
      </div>

      <div className='mySkills  shadow-md mb-[1px] bg-[#FAFAFA] flex flex-col h-80 w-full items-center px-80'>
        <div className='flex self-end'>
          <span>My Skills</span>
        </div>

        <div className='flex items-end relative'>
          {/* <div className='z-10 absolute border-2 border-black w-24 h-24'>

          </div> */}
          <div className="h-10 w-20 mx-2 bg-blue-500"></div>
          <div className="h-20 w-20 mx-2 bg-green-500"></div>
          <div className="h-5 w-20 mx-2 bg-red-500"></div>
          <div className="h-5 w-20 mx-2 bg-yellow-500"></div>
          <div className="h-5 w-20 mx-2 bg-pink-500"></div>
        </div>
      </div>

    </div>
  )
}

// Chart = Front End, Back End, React, Snowboarding, Running
// Fair, Good, Excellent, Professional