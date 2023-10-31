'use client'
import { useAppSelector } from "@/redux/store";
import { LocalCart } from "./nonWovenTile";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartTotal() {

    const items: Array<LocalCart> = useAppSelector((state) => state.cart)

    const [amount, setAmount] = useState<number>(items.reduce((acc,cur) => acc + (cur.bagType === 'Non-Woven'? cur.amount*20 : cur.bagType === 'lamination'? cur.amount*20: 0),0));
    const [text, setText] = useState<string>("");
    const initialText = "I'm%20enquiring%20about%20the%20following%20products:%0D%0A%0D%0A";
    const finalText = "%0D%0A%0D%0A*Thank%20You*";

    useEffect(() => {
        setAmount(items.reduce((acc,cur) => acc + (cur.bagType === 'Non-Woven'? cur.amount*20 : cur.bagType === 'lamination'? cur.amount*20: 0),0))
        setText(initialText + items.map((Items, index) => {return(`Product%20${index+1}:%20*${Items.bagType}%20Bags*%0D%0AQuantity:%20*${Items.amount}*%0D%0ABorder%20Color:%20*${Items.borderColor.toUpperCase()}*%0D%0ABorder%20GSM:%20*${Items.borderGSM}*%0D%0AHandle%20Color:%20*${Items.handleColor.toUpperCase()}*%0D%0AHandle%20Type:%20*${Items.handleType.toUpperCase()}*%0D%0ATotaling:%20*₹${Items.bagType === 'Non-Woven'? Items.amount*20 : 0}*`)}).join('%0D%0A%0D%0A') + `%0D%0A%0D%0ATotal%20Amount:%20*₹${amount}*` + finalText)
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
            <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}/?text=${text}`} className="bg-[#f498d1] font-bold text-sm text-white py-2 px-4 rounded-full hover:bg-[#f67ec8]">PLACE ENQUIRY</Link>
        </div>
    );
}