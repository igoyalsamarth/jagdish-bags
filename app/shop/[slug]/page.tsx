'use client'
import { BagType, HandleColor, HandleType, LocalCart } from "@/components/nonWovenTile";
import { addQuantity, addToCart } from "@/redux/cart.slice";
import { useAppDispatch } from "@/redux/store";
import { Slider } from "@mui/material";
import { useState } from "react";

function valuetext(value: number) {
    return `${value}GSM`;
}

export default function Page({ params }: { params: { slug: string } }) {

    const [bag, setBag] = useState<LocalCart>({"bagType": params.slug === 'non-woven'? BagType['nonWoven']: params.slug === 'lamination'? BagType['lamination'] : BagType['canvas'],"handleType":HandleType['normal'], handleColor : HandleColor['red'], borderGSM:80, borderColor: HandleColor['red'], amount:1000  });
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-center min-h-[calc(100vh-74px)]">
            <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 2xl:w-[1170px] xl:w-[962px] lg:w-[738px] md:w-[451px] sm:w-[95%] py-10 gap-10 h-fit'>
                <div className="flex flex-col col-span-8 lg:col-span-12 md:col-span-6 sm:col-span-6 gap-4">
                    <section className='flex flex-col w-full bg-[#fefffe] rounded-xl p-4 gap-4'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>HANDLE OF CHOICE</p>
                        <div className="flex w-full justify-evenly">
                            <div className="flex flex-col items-center gap-2">
                                <button className="w-[100px] h-[100px] border border-gray-200 rounded-lg" onClick={() => setBag({...bag,handleType:HandleType['light']})}></button>
                                <p className="font-bold text-xs text-gray-400 tracking-widest uppercase">{HandleType.light}</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="w-[100px] h-[100px] border border-gray-200 rounded-lg" onClick={() => setBag({...bag,handleType:HandleType['normal']})}></button>
                                <p className="font-bold text-xs text-gray-400 tracking-widest uppercase">{HandleType.normal}</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="w-[100px] h-[100px] border border-gray-200 rounded-lg" onClick={() => setBag({...bag,handleType:HandleType['heavy']})}></button>
                                <p className="font-bold text-xs text-gray-400 tracking-widest uppercase">{HandleType.heavy}</p>
                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col  w-full bg-[#fefffe] rounded-xl p-4 gap-4'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>HANDLE COLOR</p>
                        <div className="flex flex-wrap gap-4 justify-evenly">
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col  w-full bg-[#fefffe] rounded-xl p-4 gap-8'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BORDER GSM</p>
                        <Slider defaultValue={80} getAriaValueText={valuetext} step={10} min={40} max={200} valueLabelDisplay="on" onChange={(e:Event, newValue:number | number[]) => {if(typeof newValue === 'number'){setBag({...bag,borderGSM:newValue})}}}/>
                    </section>
                    <section className='flex flex-col w-full bg-[#fefffe] rounded-xl p-4 gap-4'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BORDER COLOUR</p>
                        <div className="flex flex-wrap gap-4 justify-evenly">
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="bg-red-400 w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-red-300 duration-200 border border-red-600"></button>
                                <p className="text-sm font-bold text-gray-500 uppercase">BLUE</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col col-span-4 lg:col-span-12 md:col-span-6 sm:col-span-6 bg-[#fefffe] h-fit p-4 rounded-xl sticky top-0">
                    <section className='flex flex-col'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BAG PREVIEW</p>
                        {<div><p>{bag.bagType}, {bag.borderColor}, {bag.borderGSM}, {bag.handleColor}, {bag.handleType}</p></div>}
                        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 1080 1080"><title>bag-2</title><rect x="376.76" y="440.59" width="488" height="576.57" fill="#ef4444"/><path d="M376.76,442.32l-145.88-71.2L217,364.18l-1.73,569.91a10.49,10.49,0,0,0,6,9.49c-1.58,13.36,149.32,82.83,155.5,73.57" fill='#1cd5ff'/><path d="M217,364.18l156.11,76.37a17.58,17.58,0,0,0,7.74,1.76l483.92-1.72-153-74.81a15.9,15.9,0,0,0-6.94-1.6H217" fill='#6d6e71'/><path d="M776.18,440.59v-182c0-66-68.42-119.5-152.82-119.5s-152.83,53.5-152.83,119.5v182" fill='none' stroke='#f4f5f6' strokeMiterlimit='10' strokeWidth='20px'/><path d="M640.73,363.47v-182c0-66-68.43-119.5-152.83-119.5S335.08,115.5,335.08,181.5v182" fill='none' stroke='#f4f5f6' strokeMiterlimit='10' strokeWidth='20px'/></svg>
                    </section>
                    <section className='flex justify-center'>
                        <button onClick={()=> dispatch(addQuantity(bag))} className=" w-fit px-4 py-2 bg-[#01a9e9]/40 hover:bg-[#01a9e9]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]">ADD TO CART</button>
                    </section>
                </div>
            </div>
        </div>
    );
}