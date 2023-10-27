'use client'

import Link from 'next/link'
import { useAppDispatch } from '@/redux/store'
import { addToCar } from '@/redux/cart.slice'

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
  handleType: HandleType | null
  handleColor: HandleColor | null
  borderGSM: number
  borderColor: HandleColor | null
}

export default function NonWovenTile () {
  const dispatch = useAppDispatch()
/*
  const addToCart = (
    handleType: LocalCart['handleType'],
    handleColor: LocalCart['handleColor'],
    borderGSM: LocalCart['borderGSM'],
    borderColor: LocalCart['handleColor']
  ) => {
    let local_cart: Array<LocalCart> = JSON.parse(
      localStorage.getItem('local_cart') || 'null'
    )
    if (local_cart === null) {
      localStorage.setItem(
        'local_cart',
        JSON.stringify([
          {
            handleType: handleType,
            handleColor: handleColor,
            borderGSM: borderGSM,
            borderColor: borderColor
          }
        ])
      )
    } else {
      localStorage.setItem(
        'local_cart',
        JSON.stringify([
          ...local_cart,
          {
            handleType: handleType,
            handleColor: handleColor,
            borderGSM: borderGSM,
            borderColor: borderColor
          }
        ])
      )
    }
    //console.log(JSON.parse(localStorage.getItem('local_cart') || '{}'))
    dispatch(addToCar(JSON.parse(localStorage.getItem('local_cart') || '{}')))
    dispatch(
      addToCar({
        handleType: handleType,
        handleColor: handleColor,
        borderGSM: borderGSM,
        borderColor: borderColor
      })
    )
  }
  */
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
                  addToCar({
                    handleType: HandleType.normal,
                    handleColor: HandleColor.biege,
                    borderGSM: 90,
                    borderColor: HandleColor.green
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
