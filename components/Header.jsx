'use client';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  

  return (
    <nav className='bg-black md:px-[4vw] px-[3vw] py-[6px] flex justify-between items-center sticky top-0 border-b-[1px] border-[#6d6c6d_#FF3BFF]'>
      <div className="w-fit items-center p-[4px]">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={1080}
            height={720}
            className="size-12 md:size-16"
          />
        </Link>
      </div>

      {/* <Link href="/">
        <button className="bg-gradient-to-br from-[#FF3BFF] to-[#5C24FF] text-white font-bold rounded-[30px] px-4 md:h-[45px] h-[38px] md:text-base text-[14px] py-2">
          Get started
        </button>
      </Link> */}

      <Link href="https://solflare.com/onboard">
          <button className=' bg-gradient-to-r from-[#831c83] to-[#250489] font-bold  h-[40px] rounded-[32px] hover:border-[#f956f9] px-[16px] text-[14px] text-white border-[1px]  sm:text-[16px] md:h-[54px] w-fit md:rounded-[42px] md:px-6 md:text-[20px]'>
            Solflare Wallet
          </button>
      </Link>
    </nav>
  );
};

export default Header;
