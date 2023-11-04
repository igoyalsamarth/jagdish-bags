'use client'

import Link from 'next/link'
import { useAppDispatch } from '@/redux/store'
import { addQuantity } from '@/redux/cart.slice'
import { HandleColor, HandleType, PanelColor,PanelSize,BagType, BorderColor} from './nonWovenTile'

export default function LaminationTile() {
  const dispatch = useAppDispatch()
  return (
    <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
      <p className='text-sm font-bold text-gray-500 tracking-widest'>
      NON-WOVEN LAMINATION BAGS
      </p>
      <div className='flex flex-col w-full gap-6 items-center'>
        <div className='flex w-full gap-4 md:flex-col-reverse sm:flex-col-reverse'>
          <div className='flex w-3/5 md:w-full sm:w-full'>test min qty: cost:</div>
          <div className='flex justify-center items-center w-2/5 md:w-full sm:w-full'>
          <div className='w-[200px] h-[200px] border border-gray-200'></div>
          </div>
        </div>
        <div className='flex justify-evenly w-full'>
          <Link href='/shop/lamination' className='px-4 py-2 bg-[#01a9e9]/40 hover:bg-[#01a9e9]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]' > CUSTOMIZE </Link>
          <button onClick={() => dispatch(addQuantity({ bagType: BagType.lamination, panelSize: PanelSize.medium, borderSize:6, panelGSM:60, borderGSM: 60, handleType: HandleType.normal, handleColor: HandleColor.orange, panelColor: PanelColor.ivory ,borderColor: BorderColor.orange, amount: 1000 }))} className='px-4 py-2 bg-[#e40089]/40 hover:bg-[#e40089]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]'>
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  )
}
