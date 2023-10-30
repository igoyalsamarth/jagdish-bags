'use client'

import Link from 'next/link'
import { useAppDispatch } from '@/redux/store'
import { addQuantity, addToCart } from '@/redux/cart.slice'

enum BagType{
  nonWoven = 'Non-Woven',
  lamination = "lamination",
  canvas = "canvas"
}

enum HandleType {
  light = 'light',
  normal = 'normal',
  heavy = 'heavy'
}

enum HandleColor {
  biege = 'biege',
  green = 'green',
  red = 'red',
  blue = 'blue'
}

export interface LocalCart {
  bagType: BagType;
  handleType: HandleType; 
  handleColor: HandleColor;
  borderGSM: number;
  borderColor: HandleColor;
  amount: number;
}

export default function NonWovenTile() {
  const dispatch = useAppDispatch()
  return (
    <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
      <p className='text-sm font-bold text-gray-500 tracking-widest'>
        NON-WOVEN BAGS
      </p>
      <div className='flex w-full gap-4'>
        <div className='flex w-2/3'>test min qty: cost:</div>
        <div className='flex flex-col w-1/3 items-center gap-4'>
          test-2
          <div className='flex gap-2'>
            <Link
              href='/shop/non-woven'
              className='px-4 py-2 bg-[#01a9e9]/40 hover:bg-[#01a9e9]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]'
            >
              CUSTOMIZE
            </Link>
            <button
              onClick={() =>
                dispatch(
                  addQuantity({
                    bagType: BagType.nonWoven,
                    handleType: HandleType.normal,
                    handleColor: HandleColor.biege,
                    borderGSM: 90,
                    borderColor: HandleColor.green,
                    amount:1000
                  })
                )
              }
              className='px-4 py-2 bg-[#e40089]/40 hover:bg-[#e40089]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]'
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
