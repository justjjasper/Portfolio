export default function Home () {
  return (
    <div className='flex flex-col items-center'>

      <section className= 'landingSection border-b-2 w-full justify-center flex p-20'>
        <div className='flex flex-col w-[25ch] self-center'>
          <span>Weekend Warrior</span>
          <span>Athlete that loves physical activities.</span>
        </div>

        <img className='w-96 h-96 object-cover'src='../../images/1.JPG'/>

        <div className='flex flex-col w-[25ch] self-center'>
          <span>&lt;coder&gt;</span>
          <span>Software Developer that writes clean and effcient code.</span>
        </div>
      </section>


      <section className= 'latestWorks shadow-md mb-[1px] bg-[#FAFAFA] w-full h-80 items-center flex justify-center'>
      <div className=''>Latest Works</div>
      </section>
    </div>
  )
}