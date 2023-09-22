import { linkedInIcon, githubIcon, igIcon } from "../../images/icons";

export default function Contact () {
  return (
    <div className='flex flex-col'>
      <section className='flex h-[37rem] shadow-md mb-[1px] items-center justify-center'>
        <div className='content font-proxima text-[#333333] flex flex-col h-[20rem] justify-around'>
          <p className='text-8xl relative font-bold tracking-tighter'>contact.</p>
          <p className='text-[#7B7B7B] text-2xl font-light w-[27ch]'>Get in touch with me via social media or email.</p>

          <div className='flex relative right-5'>
            <a href='https://www.linkedin.com/in/jasper-bucad' target='_blank' title='Connect with me on Linkedin'
            className='flex flex-row items-center hover:opacity-70 pr-2'>
              <div className='flex h-12 w-12 bg-[#347CB9] justify-center items-center rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7"><path fill="white"
                d={linkedInIcon}/></svg>
              </div>
              <p className='pl-3 text-lg text-[#347CB9] font-bold tracking-wide'>LinkedIn</p>
            </a>

            <a href='https://www.instagram.com/onlywithjasper/' target='_blank' title='Follow me on Instagram'
            className='flex flex-row items-center hover:opacity-70 px-2'>
              <div className='flex h-12 w-12 bg-[#DB3074] justify-center items-center rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8"><path fill="white"
                d={igIcon}/></svg>
              </div>
              <p className='pl-3 text-lg text-[#DB3074] font-bold tracking-wide'>Instagram</p>
            </a>

            <a href='https://github.com/justjjasper' target='_blank' title='View my code on Github'
            className='flex flex-row items-center hover:opacity-70 px-2'>
              <div className='flex h-12 w-12 bg-[#25292E] justify-center items-center rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8"><path fill="white"
                d={githubIcon}/></svg>
              </div>
              <p className='pl-3 text-lg text-[#25292E] font-bold tracking-wide'>Github</p>
            </a>
          </div>


        </div>


          <img className='w-4/12 h-4/12 object-cover' src='../../images/1.JPG' alt='Self Image'/>

      </section>
    </div>
  )
}