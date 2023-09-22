import { linkedInIcon, githubIcon, igIcon, loadingSVG } from "../../images/icons";
import { FormEvent, useRef, useState } from "react";
import axios from 'axios';

export default function Contact () {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [errorStatus, setErrorStatus] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let name = nameRef.current?.value;
    let email = emailRef.current?.value;
    let message = messageRef.current?.value;

    const emailRegex = /\S+@\S+\.\S+/;

    if (!name || !email || !message) {
      setLoading(false);
      setSuccessStatus(false);
      setErrorStatus(true);
    } else if (!emailRegex.test(email)) {
      setLoading(false);
      setSuccessStatus(false);
      setErrorStatus(true)
    } else {
      setErrorStatus(false);
      setSuccessStatus(false);
      setLoading(true);

      nameRef.current!.value = '';
      emailRef.current!.value = '';
      messageRef.current!.value = '';

      const payload = {
        name,
        email,
        message,
      };

      try {
        const response = await axios.post('http://127.0.0.1:3000/contact', payload);
        setLoading(false);
        setErrorStatus(false);
        setSuccessStatus(true);
      } catch(err) {
        setLoading(false)
        console.error('Error in posting contact message from client side', err)
      }
    }

  };

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

      <section className='flex h-[37rem] shadow-md mb-[1px] bg-[#FAFAFA] justify-center items-center font-light'>
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
              className='flex items-center justify-center h-12 w-36 bg-[#333333] rounded self-end hover:opacity-70 text-lg tracking-wide text-white mb-5'>
              Send email
            </button>
          </form>

          {successStatus ? (
            <div className='flex border-[1.5px] justify-center items-center h-14 bg-[#EEF9DF] border-[#C4E494] text-[#4E8148]'>
              Your message was sent successfully. Thanks.
            </div>
          ) : null}

          {errorStatus ? (
            <div className='flex border-[1.5px] justify-center items-center h-14 bg-[#F6EFEF] border-[#E7BDBC] text-[#B0362F]'>
              Validation errors occurred. Please confirm the fields and submit it again.
            </div>
          ) : null}

          { loading ? (
          <span className='flex justify-center'>
            {loadingSVG}
          </span>
          ) : null }

        </div>
      </section>
    </div>
  )
}