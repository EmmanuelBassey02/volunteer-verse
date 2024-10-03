import React from 'react'
import Image from 'next/image'

const Section5 = () => {
  return (
    <>
        <section className='h-fit bg-black pt-[30px]  md:px-[4vw] px-[3vw] grid sm:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
            <div className=''>
              <h1 className='text-[#f4cef9] font-bold font-mono md:text-[40px] text-[26px]'>Ready to join the Volunteer Revolution?</h1><br />
              {/* <button className='border-neutral-300 border-2 h-[45px] ms-4 rounded-[32px]  px-[10px] text-[14px] font-semibold text-white  sm:text-[16px] md:h-[60px] w-fit md:rounded-[42px] md:px-4 md:text-[20px]'>Join as a Volunteer</button> */}
              <button className='border-neutral-300 border-2 h-[45px] mb-[20px] rounded-[32px]  px-[16px] text-[14px] font-semibold text-white  sm:text-[16px] md:h-[60px] w-fit md:rounded-[42px] md:px-6 md:text-[20px]'>Sign up Now</button>
            </div>

              <Image 
                  src="/hands.png"
                  alt="hands"
                  height={500}
                  width={500}
                  className='mt-[-60px]'
              />
        </section>
    </>
  )
}

export default Section5