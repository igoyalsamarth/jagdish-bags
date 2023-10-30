//I'm%20inquiring%20about%20the%20apartment%20listing
'use client'
import { useAppSelector } from "@/redux/store";
import { LocalCart } from "./nonWovenTile";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartTotal() {

    const items: Array<LocalCart> = useAppSelector((state) => state.cart)

    const [enquiry, setEnquiry] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [text, setText] = useState<string>("I'm%20enquiring%20about%20the%20following%20products:%0D%0A");

    useEffect(() => {
        setAmount(items.reduce((acc,cur) => acc + (cur.bagType === 'Non-Woven'? cur.amount*20 : cur.bagType === 'lamination'? cur.amount*20: 0),0))
    }, [items]);
    
    if (!items.length) {
        return (
            <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <p className='text-sm font-bold text-gray-400'>Your cart is Empty</p>
                </div>
                <hr className="h-2 bg-[#f5f7f7] rounded-full" />
                <div className="flex justify-between">
                    <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>TOTAL</p>
                    <p className=" text-xl font-bold text-gray-700">₹ 0</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 items-center justify-center w-full">
            {items.map((Items: LocalCart, index: number) => {
                return (
                    <div className="flex justify-between items-center w-full" key={index}>
                        <p className='text-sm font-semibold text-gray-400'>{Items.bagType} Bags <br /> <span className="text-xs font-light">x {Items.amount}</span></p>
                        <p className="text-sm font-bold text-gray-500 text-center">₹ {Items.amount * 20}</p>
                    </div>
                );
            })}
            <hr className="h-2 bg-[#f5f7f7] rounded-full w-full" />
            <div className="flex justify-between w-full">
                <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>TOTAL</p>
                <p className=" text-xl font-bold text-gray-700">₹ {amount}</p>
            </div>
            <p className="text-[10px] font-bold text-red-400 leading-none text-justify">DISCLAIMER: FOR LEGAL PURPOSES, THE ABOVE AMOUNT EXCLUDES ANY TAXES WHATSOEVER, HENCE, THIS IS NEITHER THE FINAL COST NOR THE RECIPT OF THE ORDER</p>
            <button onClick={() => setEnquiry(true)} className="bg-[#f498d1] font-bold text-sm text-white py-2 px-4 rounded-full hover:bg-[#f67ec8]">PLACE ENQUIRY</button>
            {enquiry &&
                <form className="flex flex-col gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-gray-500">+91</p>
                        <input placeholder="WhatsApp Number" onChange={e => setPhone(e.target.value)} className=" bg-[#f5f7f7] p-2 rounded-sm text-gray-500 text-sm font-bold placeholder:font-normal" autoFocus></input>
                    </div>
                    <Link href={`https://wa.me/91${phone}/?text=test`} className="bg-[#f498d1] font-bold text-sm text-white py-2 px-4 rounded-full hover:bg-[#f67ec8]">SEND ENQUIRY</Link>
                </form>
            }
        </div>
    );
}