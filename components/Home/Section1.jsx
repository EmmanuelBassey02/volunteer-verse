import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Section1 = () => {
  return (
    <>
        <section className='h-fit md:pt-[100px] pt-[40px] md:px-[4vw] px-[3vw] bg-gradient-to-tr from-[#1b0f3f]  via-black to-[#3f0216] text-center'>
           <div className="h-fit w-full p-2">
              <div className="mb-4 text-center">
                <h1 className="mb-[18px] font-roboto w-fit m-auto p-2 text-neutral-300 md:text-[50px] text-[30px] bg-gradient-to-r from-[#952195] via-[#ECBFBF] to-[#4009e2] bg-clip-text text-transparent font-bold  md:text-4xl md:leading-[48px] lg:text-[72px]">
                  VolunteerVerse
                </h1>

                <p className="md:mb-8 mb-4 w-full text-neutral-300 font-roboto md:text-[22px] text-[18px] font-[600] max-w-[690px] m-auto sm:w-full ">
                   VolunteerVerse is an online platform for volunteers and freelancers to sell their services in the online market.
                </p>

                <p className="w-full text-pink-300 font-roboto md:text-[18px] text-[15px] font-[300] max-w-[690px] m-auto sm:w-full ">
                 ~ Connect, Contribute, and Create Impact with VolunteerVerse ~
                </p>


                <br />

                {/* <Link href="/">
                  <button className="p-[3px] h-fit bg-gradient-to-r from-[#952195] via-[#ECBFBF] to-[#4009e2] rounded-[30px]">
                    <div className="bg-black p-4 text-white rounded-[30px] px-[10px] text-[14px] font-bold sm:text-[18px] md:h-[60px] h-[40px] md:w-[180px] w-fit">
                      Get Started
                    </div>
                  </button>
                </Link>  */}

               <Link href="/">
                  <button className="transition-all border-[#825df0] hover:bg-[#271461] hover:border-none border-2 h-[45px] ms-4 rounded-[32px] px-[10px] text-[14px] font-semibold text-white  sm:text-[16px] md:h-[60px] md:w-[180px] w-[110px] md:rounded-[42px] md:px-4 md:text-[20px]">
                    Get Started
                  </button>
                </Link>
           
                <Link href="/">
                  <button className="transition-all border-neutral-300 border-2 hover:bg-[#151515] h-[45px] ms-4 rounded-[32px] px-[10px] text-[14px] font-semibold text-white  sm:text-[16px] md:h-[60px] md:w-[180px] w-[110px] md:rounded-[42px] md:px-4 md:text-[20px]">
                    Explore
                  </button>
                </Link>
              </div>

                <Image
                  src="/bg.png"
                  alt="background image"
                  width={891}
                  height={280}
                  quality={100}
                  className="w-fit m-auto"
                />
           </div><br /><br />



           <div className='sm:p-6 p-4 max-w-5xl w-fit m-auto rounded-[34px] md:border-l-[8px] border-[#fff6] border-[1px] border-l-[6px]'>
             <h1 className='font-mono  text-neutral-300 md:text-[24px] sm:text-[24px] text-[20px] text-left'>
               A decentralized platform connecting volunteers and freelancers with organizations in need, utilizing blockchain for transparency and security.
             </h1>
          </div><br />
      </section>
    </>
  )
}

export default Section1