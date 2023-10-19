import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className='flex flex-col w-full justify-center items-center' id='about'>
      <div className='flex sticky bg-[#fefffe] w-full justify-center items-center p-6 top-0'>
        <div className='flex bg-[#34D1E0]/10 rounded-lg p-1'>
          <Link href='/#about' className='px-5 py-3 hover:bg-[#34D1E0]/50 tracking-widest text-sm rounded font-bold' scroll={false}>ABOUT</Link>
          <Link href='/#process' className='px-5 py-3 hover:bg-[#34D1E0]/50 tracking-widest text-sm rounded font-bold' scroll={false}>PROCESS</Link>
          <Link href='/#clients' className='px-5 py-3 hover:bg-[#34D1E0]/50 tracking-widest text-sm rounded font-bold' scroll={false}>CLIENTS</Link>
        </div>
      </div>
      <div className='grid grid-cols-12 w-[1200px] py-10 gap-10'>
        <section className='flex col-span-12 w-full items-center justify-center text-center bg-[#34D1E0] rounded-2xl py-6 px-8'>
          <p className='text-8xl font-semibold'>WE MAKE <br />
            EARTH PRETTIER <br />AND <br />PLASTICS DISAPPEAR.<br />
            WHATS YOUR SUPERPOWER?
          </p>
        </section>
        <section className='flex flex-col col-span-12 w-full rounded-2xl h-[800px] bg-[#fefffe] p-6 justify-between' id='process'>
          <p className='text-sm font-bold text-gray-500'>THE PROCESS</p>
          <div className='flex w-full items-center justify-between'>
            <div className='flex'>
              test
            </div>
            <div className='flex items-center justify-center w-full gap-4'>
              <div className='flex bg-[#e1e0e0] w-[300px] h-[550px] rounded-lg mt-[50px]'>

              </div>
              <div className='flex bg-[#f4f4f5] w-[300px] h-[550px] rounded-lg mb-[50px]'>

              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex'>
                test
              </div>
              <div className='flex'>
                test
              </div>
              <div className='flex'>
                test
              </div>
            </div>
          </div>
          <div>
            <p>test</p>
          </div>
        </section>
        <section className='flex flex-col col-span-12 w-full rounded-2xl p-6 bg-[#fefffe] gap-6' id='clients'>
          <p className='text-sm font-bold text-gray-500'>OUR CLIENTS</p>
          <div className='grid grid-cols-12 gap-6'>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 gap-2 aspect-square'>
              <Image src='/vercel.svg' alt='' width={200} height={200} />
              <p>Munshi Panna Masale</p>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 gap-2'>
              <Image src='/vercel.svg' alt='' width={200} height={200} />
              <p>Munshi Panna Dry Fruits</p>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 gap-2'>
              <Image src='/vercel.svg' alt='' width={200} height={200} />
              <p>Govind Pansari</p>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 gap-2'>
              <Image src='/vercel.svg' alt='' width={200} height={200} />
              <p>Munshi Panna</p>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 gap-2 aspect-square'>
              <Image src='/vercel.svg' alt='' width={200} height={200} />
              <p>Munshi Panna Masale</p>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 gap-2'>
              <Image src='/vercel.svg' alt='' width={200} height={200} />
              <p>Munshi Panna Dry Fruits</p>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 gap-2'>
              <Image src='/vercel.svg' alt='' width={200} height={200} />
              <p>Govind Pansari</p>
            </div>
            <div className='flex col-span-3 flex-col justify-center items-center border border-gray-400 rounded-lg p-4 gap-2'>
              <Image src='/vercel.svg' alt='' width={200} height={200} />
              <p>Munshi Panna</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
