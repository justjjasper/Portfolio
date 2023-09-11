export default function Home () {
  return (
    <div className='flex flex-col items-center'>

      <section className= 'landingSection border-b-2 w-full justify-center flex p-20 text-[#333333]'>
        <div className='flex flex-col self-center font-proxima relative right-10'>
          <h1 className="pb-4 text-5xl font-bold tracking-tight">weekend warrior</h1>
          <span className='w-[25ch]'>Athlete that loves physical activities.</span>
        </div>

        <img className='w-96 h-96 object-cover relative right-10'src='../../images/1.JPG'/>

        <div className='flex flex-col w-[25ch] self-center font-proxima'>
          <h1 className='pb-4 text-5xl font-bold tracking-tight'>&lt;coder&gt;</h1>
          <span>Software Developer that writes clean and effcient code.</span>
        </div>
      </section>


      <section className= 'latestWorks shadow-md mb-[1px] bg-[#FAFAFA] w-full h-80 items-center flex justify-center'>
      <div className=''>Latest Works</div>
      </section>
    </div>
  )
}