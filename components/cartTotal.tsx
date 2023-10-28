'use client'
import { useAppSelector } from "@/redux/store";
import { LocalCart } from "./nonWovenTile";

export default function CartTotal() {

    const items: Array<LocalCart> = useAppSelector((state) => state.cart)

    if (!items.length) {
        return(
        <div className="flex flex-col gap-6">
        <div className="flex justify-between">
            <p className='text-sm font-bold text-gray-400'>Your cart is Empty</p>
        </div>
        <hr className="h-2 bg-[#f5f7f7] rounded-full"/>
        <div className="flex justify-between">
            <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>TOTAL</p>
            <p className=" text-xl font-bold text-gray-700">₹ 0</p>
        </div>
    </div>
        )
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between">
                <p className='text-sm font-semibold text-gray-400'>Non-Woven Bags</p>
                <p className="text-sm font-bold text-gray-500">₹ 500</p>
            </div>
            <hr className="h-2 bg-[#f5f7f7] rounded-full"/>
            <div className="flex justify-between">
                <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>TOTAL</p>
                <p className=" text-xl font-bold text-gray-700">₹ 500</p>
            </div>
        </div>
    );
}