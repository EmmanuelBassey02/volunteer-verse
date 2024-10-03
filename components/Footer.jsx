import React from 'react'
import Image from 'next/image';
import { FaEnvelope, FaTelegram, FaTwitter, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <>
        <footer className="border-t-[3px] border-neutral-400 bg-black px-[3vw] md:py-[50px] py-[30px] md:px-[4vw]">
          <div className="flex flex-wrap items-start justify-between sm:gap-[24px] gap-4 md:gap-[30px]">
            <div className="">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={140}
                height={140}
                className="h-[60px] w-[60px] md:h-[90px] md:w-[90px] lg:h-[110px] lg:w-[110px]"
              />
            </div>

            <div className="w-[100px]">
              <p className="text-neutral-300 mb-[15px] md:text-base text-sm font-[600] text-brand-darkbrown sm:mb-[30px]">
                VolunteerVerse
              </p>
              <p className="text-neutral-300 mb-[15px] md:text-base text-sm font-[600] text-brand-darkbrown sm:mb-[30px]">
                How It works
              </p>
              <p className="text-neutral-300 mb-[15px] md:text-base text-sm font-[600] text-brand-darkbrown sm:mb-[30px]">
                Features
              </p>
            </div>

            <div className="w-[100px]">
              <p className="text-neutral-300 mb-[15px] md:text-base text-sm font-[600] text-brand-darkbrown sm:mb-[30px]">
                Rewards
              </p>

              <p className="text-neutral-300 mb-[15px] md:text-base text-sm font-[600] text-brand-darkbrown sm:mb-[30px]">
                Mission
              </p>
              <p className="text-neutral-300 md:text-base text-sm font-[600] text-brand-darkbrown">
                Get started
              </p>
            </div>

            <div className="w-[110px] border-2">
              <div className="mb-[10px] flex w-fit items-center justify-center gap-2 text-left sm:mb-[20px]">
                <a href="https://t.me/Volunteerverse">
                <FaTelegram className='text-neutral-300 md:text-2xl text-xl'/>
                </a>

                <p className="text-neutral-300 md:text-base text-sm font-[600] text-brand-darkbrown">
                  Telegram
                </p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <a href="https://x.com/daekas2?t=YbnTy3he0Fw7zO8F9KAktg&s=09">
               <FaTwitter className='text-neutral-300 md:text-2xl text-xl'/>
                </a>
                <p className="text-neutral-300 md:text-base text-sm font-[600] text-brand-darkbrown">
                  <a href="https://x.com/daekas2?t=YbnTy3he0Fw7zO8F9KAktg&s=09">Twitter(X)</a>
                </p>
              </div>
            </div>

            <div className="w-fit">
              <div className="mb-[10px] flex w-fit items-center justify-center gap-2 text-left sm:mb-[20px]">
                <a href="tel:+2349036858423">
                <FaPhone className='text-neutral-300 md:text-2xl text-xl'/>
                </a>
                <p className="text-neutral-300 md:text-base text-sm font-[600] text-brand-darkbrown hover:underline">
                  <a href="tel:+2349036858423">+2349036858423</a>
                </p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <a href="mailto:volunteerverseofficial@gmail.com">
                <FaEnvelope className='text-neutral-300 md:text-2xl text-xl' />
                </a>
                <p className="text-neutral-300 md:text-base text-sm font-[600] text-brand-darkbrown hover:underline md:text-[15px]">
                  <a href="mailto:psyberofficial@gmail.com">volunteerverseofficial@gmail.com</a>
                </p>
              </div>
            </div>

            {/* <div className="mx-auto w-[320px]">
              <p className="mb-[30px] text-sm font-[700] md:text-base">
                Join our mailing list for your weekly dose of wellness and Web3 innovation.
              </p>

              <div className="flex h-[50px] w-[280px] items-center justify-between gap-[10px] rounded-[40px] border-2 border-neutral-500 p-[5px] md:h-[55px] md:w-[318px] md:p-2">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  className="pl-2 outline-none"
                />
                <Link href="">
                  <button className="h-[40px] w-[70px] rounded-[42px] bg-gradient-to-br from-[#efbff6] to-[#731981] px-[6px] py-0 text-[15px] font-semibold text-white hover:bg-[#71177f] md:w-[90px] md:text-[18px]">
                    Join
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
          <p className="text-[13px] text-[#6F6C90] md:text-[15px] mt-[20px]">
            Copyright @ VolunteerVerse | All Rights Reserved
          </p>
    </footer>
    </>
  )
}

export default Footer