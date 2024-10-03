import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Section2b() {
  return (
    <>
        <section className='h-fit bg-black py-[60px] md:px-[4vw] px-[3vw] '>
           <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
              <Image 
                  src="/globe.png"
                  alt="hands"
                  height={500}
                  width={500}
                  className='mt-[-60px]'
               />
             
              <div className=''>
                <p className='text-[#f4cef9] font-bold font-mono md:text-[24px] text-[18px]'>“1.5 billion volunteers worldwide, yet 70% seek meaningful connections due to fragmented platforms, lack of transparency, and limited social impact measurement.”</p><br />
              </div>
           </div>
        </section>
    </>
  )
}

export default Section2b