import { linkedInIcon, githubIcon, igIcon } from "../../images/icons";
import { FormEvent, useRef } from "react";

export default function Contact () {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if email is confirmed, reset fields and show success
    // if not, keep fields and show error
    console.log(nameRef.current?.value, emailRef.current?.value, messageRef.current?.value )
  }
  return (
    <div className='flex flex-col'>
      <section className='flex h-[37rem] shadow-md mb-1 items-center justify-center'>
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

      <section className='flex h-[32rem] shadow-md mb-[1px] bg-[#FAFAFA] justify-center items-center font-light'>
        <div className='flex flex-col w-9/12'>
          <p className='text-4xl tracking-wider text-[#333333] mb-6'>Send me an email</p>
            <form
              className='flex flex-col'
              onSubmit={handleSubmit}>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col w-6/12 '>
                  <div className='flex flex-col mb-5'>
                    <label className='text-[#333333]' htmlFor='nameInput'>Name</label>
                    <input
                      ref={nameRef}
                      className='border-[1px] border-gray-600 shadow-inner rounded h-10 p-2'
                      type='text'
                      id='nameInput'
                      name='nameInput'/>
                  </div>

                  <div className='flex flex-col mb-5'>
                    <label className='text-[#333333]' htmlFor='emailInput'>Email</label>
                    <input
                      ref= {emailRef}
                      className='border-[1px] border-gray-600 shadow-inner rounded h-10 p-2'
                      type='text'
                      id='emailInput'
                      name='emailInput'/>
                  </div>
                </div>

                <div className='flex flex-col w-5/12 mb-5'>
                  <label className='text-[#333333]' htmlFor ='messageInput'>Message</label>
                  <textarea
                    ref= {messageRef}
                    className='border-[1px] border-gray-600 shadow-inner rounded h-full p-2'
                    id='messageInput'
                    name='messageInput'/>
                </div>
              </div>
            <button
              type='submit'
              className='flex items-center justify-center h-12 w-36 bg-[#333333] rounded self-end hover:opacity-70 text-lg tracking-wide text-white'>
              Send email
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}