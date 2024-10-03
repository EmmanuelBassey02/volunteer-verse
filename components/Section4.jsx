import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Section4 = () => {
  return (
    <>
        <section className='h-fit bg-black py-[60px] md:px-[4vw] px-[3vw]'>
           <h1 className='font-bold max-w-3xl w-full m-auto text-center md:text-[50px] text-[26px]  bg-gradient-to-r from-[#952195] via-[#ECBFBF] to-[#4009e2] bg-clip-text text-transparent mb-[50px]'>VolunteerVerse in PARTNERSHIP with SOLFLARE</h1><br />
              VolunteerVerse in PARTNERSHIP with SOLFLARE
           <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
              <Image 
                  src="/solflare.png"
                  alt="hands"
                  height={500}
                  width={500}
                  className='mt-[-60px]'
               />
             
              <div className=''>
                <h1 className='text-white font-bold  md:text-[38px] text-[24px] md:mb-[40px] mb-[18px]'>Your Access Point to Solana</h1>
                <p className='text-[#f4cef9] md:font-bold font-[500]  md:text-[22px] text-[18px]'>Solflare provides a secure way to explore Solana. You can buy, store, and swap tokens and NFTs, as well as access Solana DeFi on both web and mobile platforms.</p><br />
                 <Link href="https://solflare.com/onboard">
                    <button className=' bg-gradient-to-r from-[#831c83] to-[#250489] font-bold  h-[45px] mb-[20px] rounded-[32px] hover:border-[#f956f9] px-[16px] text-[14px] text-white border-[1px]  sm:text-[16px] md:h-[60px] w-fit md:rounded-[42px] md:px-6 md:text-[20px]'>
                      Solflare Wallet
                    </button>
                  </Link>
              </div>
           </div>
        </section>
    </>
  )
}

export default Section4