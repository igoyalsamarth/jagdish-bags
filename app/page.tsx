import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-74px)]">
    <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 2xl:w-[1170px] xl:w-[962px] lg:w-[738px] md:w-[451px] sm:w-[95%] py-10 gap-10'>
        <section className='flex col-span-12 sm:col-span-6 md:col-span-6 w-full items-center justify-center text-center bg-[#01a9e9]/40 rounded-2xl py-6 px-4'>
          <p className='text-8xl font-semibold sm:text-5xl text-white md:text-6xl lg:text-7xl'>WE MAKE <br />
            EARTH PRETTIER <br />AND <br />PLASTICS DISAPPEAR.<br />
            WHATS YOUR SUPERPOWER ?
          </p>
        </section>
        <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full rounded-2xl bg-[#fefffe] p-6 justify-between gap-12'>
          <p className='text-sm font-bold text-gray-500 tracking-widest'>SPOTLIGHT</p>
          <div className='flex w-full items-center justify-between 2xl:px-10 xl:px-10 sm:flex-col lg:flex-col md:flex-col lg:gap-10'>
            <div className='flex flex-col whitespace-nowrap gap-2'>
              <p className='text-sm font-semibold text-gray-600'>1. Exreme Resuability</p>
              <p className='text-sm font-semibold text-gray-400'>2. Reduced Pollution</p>
              <p className='text-sm font-semibold text-gray-200'>3. Swag Points</p>
            </div>
            <div className='flex items-center justify-center w-full gap-4 sm:flex-col md:flex-col'>
              <div className='flex bg-[#01a9e9]/20 w-[250px] h-[450px] rounded-lg mt-[50px]'>

              </div>
              <div className='flex flex-col bg-[#01a9e9]/40 w-[250px] h-[450px] rounded-lg mb-[50px] items-center justify-between px-4 py-2'>
                <p className='text-4xl font-semibold text-black'>NON-WOVEN</p>
                <p className='text-sm italic leading-4 text-gray-600 font-light'>no threads, no weaves, less cost, less carbon, more useability</p>
                <div className='flex w-[200px] aspect-square rounded-full border-8 border-[#fefffe]'>
                </div>
                <p className=' italic text-sm text-gray-600'>Best Quality <span className='font-bold'>lamination cloth</span> to help you please your customers without having to worry about <span className='font-bold'>carbon control...</span></p>

              </div>
            </div>
            <div className='flex flex-col gap-16 w-[100px] justify-center items-start sm:items-center md:items-center lg:items-center sm:gap-10 md:gap-10 lg:gap-10'>
            <p className='text-sm font-bold text-gray-600 leading-4 sm:text-center md:text-center lg:text-center'>four colour print on a lamination cloth</p>
            <div className='flex 2xl:flex-col xl:flex-col gap-4 justify-center items-center'>

              <div className='flex aspect-square w-[80px] border border-gray-300 rounded-xl'>
                
              </div>
              <div className='flex aspect-square w-[80px] border border-gray-300 rounded-xl'>

              </div>
              <div className='flex aspect-square w-[80px] border border-gray-300 rounded-xl'>

              </div>
              </div>
              <p className='text-xs leading-3 sm:text-center md:text-center lg:text-center text-gray-600'>checkout the shop to check more options</p>
            </div>
          </div>
          <div className='flex justify-between items-center 2xl:px-14 xl:px-14 sm:flex-col-reverse sm:gap-6'>
          <Link href='/contact' className='py-2 px-4 rounded-full text-xs font-bold tracking-wider bg-[#01a9e9]/40 text-[#fefffe] hover:bg-[#01a9e9]/60'>CONTACT</Link>
          <div className='flex gap-6'>
            <div className='flex w-[20px] aspect-square rounded-full bg-[#01a9e9]'>
            </div>
            <div className='flex w-[20px] aspect-square rounded-full bg-[#e40089]'>
            </div>
            <div className='flex w-[20px] aspect-square rounded-full bg-[#f7ea00]'>
            </div>
            <div className='flex w-[20px] aspect-square rounded-full bg-black'>
            </div>
          </div>
            <Link href='/shop' className='py-2 px-4 rounded-full text-xs font-bold tracking-wider bg-[#01a9e9]/40 text-[#fefffe] hover:bg-[#01a9e9]/60'>SHOP</Link>
          </div>
        </section>
        <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full rounded-2xl p-6 bg-[#fefffe] gap-6'>
          <p className='text-sm font-bold text-gray-500 tracking-widest'>OUR CLIENTS</p>
          <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 gap-6'>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 aspect-square'>
              <Image src='/mp_masale.jpg' alt='' width={200} height={200}/>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 aspect-square'>
              <Image src='/mp_dry.jpg' alt='' width={200} height={200}/>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 aspect-square'>
              <Image src='/hlrl.jpg' alt='' width={200} height={200}/>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 aspect-square'>
              <Image src='/govind.jpg' alt='' width={200} height={200}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
