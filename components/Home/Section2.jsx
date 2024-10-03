import React from 'react'

const Section2 = () => {
  return (
    <>
        <section className='h-fit md:pt-[100px] pt-[40px] md:pb-[70px] pb-[30px] md:px-[4vw] px-[3vw] bg-gradient-to-b from-[#1b0f3f]  to-black text-center'>
            <h1 className='text-gray-50 md:text-[45px] text-[24px]  font-bold md:mb-[35px] mb-[25px] font-roboto'>What Makes VolunteerVerse <span className='text-[#f57ff5]'>Unique ?</span></h1>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-2  justify-center'>
               <div className="md:pt-[15px] pt-[10px] bg-transparent border-[#fff4] md:w-[320px] w-full text-left md:h-[210px] m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[26px] text-[20px] text-white md:mb-4 mb-3 leading-[32px]'>Blockchain-based  Verification</h1>
                   <p className='text-neutral-300 md:text-[15px] text-sm'>Volunteer hours and contributions are securely verified on the blockchain, ensuring that your efforts are permanently recorded and recognized. </p>
               </div>

               <div className="md:pt-[15px] pt-[10px] bg-transparent border-[#fff4] md:w-[320px] w-full text-left md:h-[210px] m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[26px] text-[20px] text-white md:mb-4 mb-3'>AI-driven  Matching</h1>
                   <p className='text-neutral-300 md:text-[15px] text-sm'>Our intelligent algorithm helps match volunteers with opportunities that align with their skills, interests, and location, ensuring that you find the most rewarding projects.</p>
               </div>

                <div className="md:pt-[15px] pt-[10px] bg-transparent border-[#fff4] md:w-[320px] w-full  text-left md:h-[210px] m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[26px] text-[20px] text-white md:mb-4 mb-3 leading-[32px]'>Real-time Impact  Tracking</h1>
                   <p className='text-neutral-300 md:text-[15px] text-sm'>Visualize your personal and collective impact through real-time tracking. See how your contributions add up to make a difference globally, ensuring full transparency.</p>
                </div>

                {/* <div className="md:pt-[15px] pt-[10px] bg-transparent border-[#fff4] md:w-[320px]  w-full text-left md:h-[210px] m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[26px] text-[20px] text-white md:mb-4 mb-3 leading-[32px]'> Decentralized Governance</h1>
                   <p className='text-neutral-300 md:text-[15px] text-sm'>VolunteerVerse is community-driven, giving the power to its users. Volunteers and organizations have a voice in decision-making through decentralized governance protocols.</p>
                </div> */}

                <div className="md:pt-[15px] pt-[10px] bg-transparent border-[#fff4] md:w-[320px]  w-full text-left md:h-[210px] m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[26px] text-[20px] text-white md:mb-4 mb-3 leading-[32px]'> Authenticity Solutions</h1>
                   <p className='text-neutral-300 md:text-[15px] text-sm'>Earn NFT certifications for every completed contract or job, providing verified recognition of your contributions and enhancing your professional credibility in the volunteering and freelancing community.</p>
                </div>

                <div className="md:pt-[15px] pt-[10px] bg-transparent border-[#fff4] md:w-[320px]  w-full text-left md:h-[210px] m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[26px] text-[20px] text-white md:mb-4 mb-3 leading-[32px]'> Seamless OnChain Transactions</h1>
                   <p className='text-neutral-300 md:text-[15px] text-sm'>Experience seamless transactions with our integrated Solana wallet, eliminating the hassle of lengthy wallet addresses. Enjoy secure, straightforward payments that make your volunteering easier.</p>
                </div>

                <div className="md:pt-[15px] pt-[10px] bg-transparent border-[#fff4] md:w-[320px]  w-full text-left md:h-[210px] m-auto  md:p-[20px] p-[12px] md:px-[15px] px-[10px] rounded-[16px] border-[1px]">
                   <h1 className='font-bold md:text-[26px] text-[20px] text-white md:mb-4 mb-3 leading-[32px]'> Secure Donation Process</h1>
                   <p className='text-neutral-300 md:text-[15px] text-sm'>VolunteerVerse is community-driven, giving the power to its users. Volunteers and organizations have a voice in decision-making through decentralized governance protocols.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Section2
