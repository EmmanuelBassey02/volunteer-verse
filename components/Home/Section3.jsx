import React from 'react'

const Section3 = () => {
  return (
    <>
        <section className='h-fit md:pt-[100px] text-center pt-[40px] md:pb-[70px] pb-[30px] md:px-[4vw] px-[3vw] bg-black' style={{
          backgroundImage: "url(/secthreebg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0, 0, 0, 0.65)"
        }}>

          <h1 className='text-gray-300 md:text-[45px] text-[24px]  font-bold md:mb-[35px] mb-[25px]'>Who Can Benefit from <span className='text-[#e65af8]'>VolunteerVerse?</span></h1>
            <div className='grid lg:grid-cols-2 grid-col-1 gap-8 p-2  justify-center'>
               <div className="md:pt-[15px] pt-[10px] bg-transparent md:w-[460px]  w-full text-left md:h-[200px] h-fit m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[30px] text-[20px] text-white md:mb-[15px] mb-[10px]'>Volunteers</h1>
                   <p className='text-neutral-300'>Are you looking for a meaningful way to give back? Whether you're interested in local opportunities or global causes, VolunteerVerse connects you with organizations that need your skills and passion. </p>
               </div>

               <div className="md:pt-[15px] pt-[10px] bg-transparent md:w-[460px]  w-full text-left md:h-[200px] h-fit m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[30px] text-[20px] text-white md:mb-[15px] mb-[10px]'>Non-Profits</h1>
                   <p className='text-neutral-300'>Non-profits rely on volunteers to fuel their mission. With VolunteerVerse, non-profits gain access to a pool of motivated, verified volunteers while leveraging blockchain to ensure accurate tracking of volunteer hours.</p>
                    
               </div>

            </div>
        </section>

         <section className='md:px-[4vw] px-[3vw] bg-black pt-[30px] pb-[40px] mt-[-40px]'>
             <div className="bg-black md:pt-[15px] pt-[10px] bg-transparent md:w-[460px] w-full  text-left md:h-[200px] h-fit m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
               <h1 className='font-bold md:text-[30px] text-[20px] text-white md:mb-[15px] mb-[10px]'>Social Impact Organisations</h1>
               <p className='text-neutral-300'>Organizations driving positive change can benefit from the transparency and accountability of blockchain. You’ll be able to find volunteers committed to your cause and track their contributions with confidence.</p>
            </div>
         </section>
       
    </>
  )
}

export default Section3