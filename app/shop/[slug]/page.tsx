'use client'
import CarryBagSVG from "@/components/carryBagSVG";
import { BagType, BorderColor, HandleColor, HandleType, LocalCart, PanelColor, PanelSize } from "@/components/nonWovenTile";
import { addQuantity } from "@/redux/cart.slice";
import { useAppDispatch } from "@/redux/store";
import { Slider } from "@mui/material";
import { useState } from "react";

const borderMarks = [
    {
        value: 4,
        label: '4"',
    },
    {
        value: 4.5,
        label: '4.5"',
    },
    {
        value: 5.25,
        label: '5.25"',
    },
    {
        value: 6,
        label: '6"',
    },
    {
        value: 6.5,
        label: '6.5"',
    },
    {
        value: 8,
        label: '8"',
    },
    {
        value: 9.5,
        label: '9.5"',
    },
];

function valuetext(value: number) {
    return `${value}GSM`;
}

export default function Page({ params }: { params: { slug: string } }) {

    const [bag, setBag] = useState<LocalCart>({ "bagType": params.slug === 'non-woven' ? BagType['nonWoven'] : params.slug === 'lamination' ? BagType['lamination'] : BagType['canvas'], panelSize: PanelSize.medium, borderSize: 6, panelGSM: 40, borderGSM: 40, handleType: HandleType.normal, handleColor: HandleColor.orange, panelColor: PanelColor.ivory, borderColor: BorderColor.orange, amount: 1000 });
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-center min-h-[calc(100vh-74px)]">
            <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 2xl:w-[1170px] xl:w-[962px] lg:w-[738px] md:w-[451px] sm:w-[95%] py-10 gap-10 h-fit'>
                <div className="flex flex-col col-span-8 lg:col-span-12 md:col-span-6 sm:col-span-6 gap-4">
                    <section className='flex flex-col w-full bg-[#fefffe] rounded-xl p-4 gap-4'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>PANEL SIZE <span className="text-sm font-light lowercase">(w"xh")</span></p>
                        <div className="flex flex-wrap items-center w-full justify-evenly gap-6">
                            <button className={`w-[100px] border border-gray-200 rounded-full py-2  font-bold text-sm text-gray-600 hover:shadow-lg hover:drop-shadow-lg duration-500 ${bag.panelSize==='9"x12"'? 'shadow-lg drop-shadow-lg':''}`} onClick={() => setBag({ ...bag, panelSize: PanelSize.xSmall })}>X.SMALL<br/><p className="font-bold text-[12px] text-gray-400">{PanelSize.xSmall}</p></button>
                            <button className={`w-[100px] border border-gray-200 rounded-full py-2  font-bold text-sm text-gray-600 hover:shadow-lg hover:drop-shadow-lg duration-500 ${bag.panelSize==='10.5"x14"'? 'shadow-lg drop-shadow-lg':''}`} onClick={() => setBag({ ...bag, panelSize: PanelSize.small })}>SMALL<br/><p className="font-bold text-[12px] text-gray-400">{PanelSize.small}</p></button>
                            <button className={`w-[100px] border border-gray-200 rounded-full py-2  font-bold text-sm text-gray-600 hover:shadow-lg hover:drop-shadow-lg duration-500 ${bag.panelSize==='12.5"x16"'? 'shadow-lg drop-shadow-lg':''}`} onClick={() => setBag({ ...bag, panelSize: PanelSize.medium })}>MEDIUM<br/><p className="font-bold text-[12px] text-gray-400">{PanelSize.medium}</p></button>
                            <button className={`w-[100px] border border-gray-200 rounded-full py-2  font-bold text-sm text-gray-600 hover:shadow-lg hover:drop-shadow-lg duration-500 ${bag.panelSize==='15.5"x18"'? 'shadow-lg drop-shadow-lg':''}`} onClick={() => setBag({ ...bag, panelSize: PanelSize.large })}>LARGE<br/><p className="font-bold text-[12px] text-gray-400">{PanelSize.large}</p></button>
                        </div>
                    </section>
                    <section className='flex flex-col  w-full bg-[#fefffe] rounded-xl p-4 gap-8'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BORDER SIZE</p>
                        <div className="flex w-full px-4">
                        <Slider defaultValue={4.5} getAriaValueText={valuetext} marks={borderMarks} step={null} min={4} max={9.5} valueLabelDisplay="on" onChange={(e: Event, newValue: number | number[]) => { if (typeof newValue === 'number') { setBag({ ...bag, borderSize: newValue }) } }} />
                        </div>
                    </section>
                    <section className='flex flex-col  w-full bg-[#fefffe] rounded-xl p-4 gap-8'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>PANEL GSM</p>
                        <Slider defaultValue={60} getAriaValueText={valuetext} step={10} min={40} max={120} valueLabelDisplay="on" onChange={(e: Event, newValue: number | number[]) => { if (typeof newValue === 'number') { if (params.slug === 'non-woven' || params.slug === 'canvas') { setBag({ ...bag, panelGSM: newValue, borderGSM: newValue }) } else { setBag({ ...bag, panelGSM: newValue }) } } }} />
                    </section>
                    {params.slug === 'lamination' &&
                        <section className='flex flex-col  w-full bg-[#fefffe] rounded-xl p-4 gap-8'>
                            <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BORDER GSM (lamination)</p>
                            <Slider defaultValue={60} getAriaValueText={valuetext} step={10} min={40} max={120} valueLabelDisplay="on" onChange={(e: Event, newValue: number | number[]) => { if (typeof newValue === 'number') { setBag({ ...bag, borderGSM: newValue }) } }} />
                        </section>
                    }
                    <section className='flex flex-col w-full bg-[#fefffe] rounded-xl p-4 gap-4'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>HANDLE OF CHOICE</p>
                        <div className="flex w-full justify-evenly">
                            <div className="flex flex-col items-center gap-2">
                                <button className={`w-[100px] h-[100px] border border-gray-200 rounded-lg hover:shadow-lg hover:drop-shadow-lg duration-500 ${bag.handleType==='normal'?'shadow-lg drop-shadow-lg':''}`} onClick={() => setBag({ ...bag, handleType: HandleType.normal })}></button>
                                <p className="font-bold text-xs text-gray-400 tracking-widest uppercase">{HandleType.normal}</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className={`w-[100px] h-[100px] border border-gray-200 rounded-lg hover:shadow-lg hover:drop-shadow-lg duration-500 ${bag.handleType==='heavy'?'shadow-lg drop-shadow-lg':''}`} onClick={() => setBag({ ...bag, handleType: HandleType.heavy })}></button>
                                <p className="font-bold text-xs text-gray-400 tracking-widest uppercase">{HandleType.heavy}</p>
                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col  w-full bg-[#fefffe] rounded-xl p-4 gap-4'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>HANDLE COLOR</p>
                        <div className="flex flex-wrap gap-6 justify-evenly">
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.ivory })} className={`bg-[#FFFFF0] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFFF0] border-[0.1px] border-black duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.handleColor === 'ivory'? 'shadow-[#FFFFF0] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.ivory}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.orange })} className={`bg-[#FFA500] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFA500] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.handleColor === 'orange'? 'shadow-[#FFA500] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.orange}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.white })} className={`bg-[#FFFFFF] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFFFF] border-[0.1px] border-black duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.handleColor === 'white'? 'shadow-[#FFFFFF] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.white}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.blue })} className={`bg-[#0000ff] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#0000ff] duration-200  text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.handleColor === 'blue'? 'shadow-[#0000ff] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.blue}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.green })} className={`bg-[#00ff00] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#00ff00] duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.handleColor === 'green'? 'shadow-[#00ff00] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.green}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.red })} className={`bg-[#FF0000] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FF0000] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.handleColor === 'red'? 'shadow-[#FF0000] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.red}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.pink })} className={`bg-[#FFC0CB] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFC0CB] duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.handleColor === 'pink'? 'shadow-[#FFC0CB] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.pink}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.black })} className={`bg-[#000000] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#000000] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.handleColor === 'black'? 'shadow-[#000000] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.black}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.yellow })} className={`bg-[#FFFF00] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFF00] duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.handleColor === 'yellow'? 'shadow-[#FFFF00] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.yellow}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.beige })} className={`bg-[#a0816c] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#a0816c] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.handleColor === 'beige'? 'shadow-[#a0816c] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.beige}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.violet })} className={`bg-[#7F00FF] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#7F00FF] duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.handleColor === 'violet'? 'shadow-[#7F00FF] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.violet}</button>
                            <button onClick={() => setBag({ ...bag, handleColor: HandleColor.grey })} className={`bg-[#808080] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#808080] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.handleColor === 'grey'? 'shadow-[#808080] shadow-lg drop-shadow-lg' : ''}`}>{HandleColor.grey}</button>
                        </div>
                    </section>
                    <section className='flex flex-col w-full bg-[#fefffe] rounded-xl p-4 gap-4'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>PANEL COLOR</p>
                        <div className="flex flex-wrap gap-6 justify-evenly">
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.ivory })} className={`bg-[#FFFFF0] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFFF0] duration-200 border-[0.1px] border-black text-xs items-center justify-center text-center font-bold uppercase ${bag.panelColor === 'ivory'? 'shadow-[#FFFFF0] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.ivory}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.orange })} className={`bg-[#FFA500] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFA500] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.panelColor === 'orange'? 'shadow-[#FFA500] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.orange}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.white })} className={`bg-[#FFFFFF] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFFFF] duration-200 border-[0.1px] border-black text-xs items-center justify-center text-center font-bold uppercase ${bag.panelColor === 'white'? 'shadow-[#FFFFFF] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.white}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.blue })} className={`bg-[#0000ff] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#0000ff] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.panelColor === 'blue'? 'shadow-[#0000ff] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.blue}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.green })} className={`bg-[#00ff00] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#00ff00] duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.panelColor === 'green'? 'shadow-[#00ff00] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.green}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.red })} className={`bg-[#FF0000] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FF0000] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.panelColor === 'red'? 'shadow-[#FF0000] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.red}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.pink })} className={`bg-[#FFC0CB] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFC0CB] duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.panelColor === 'pink'? 'shadow-[#FFC0CB] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.pink}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.black })} className={`bg-[#000000] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#000000] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.panelColor === 'black'? 'shadow-[#000000] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.black}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.yellow })} className={`bg-[#FFFF00] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFF00] duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.panelColor === 'yellow'? 'shadow-[#FFFF00] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.yellow}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.beige })} className={`bg-[#a0816c] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#a0816c] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.panelColor === 'beige'? 'shadow-[#a0816c] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.beige}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.violet })} className={`bg-[#7F00FF] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#7F00FF] duration-200 text-xs items-center justify-center text-center font-bold uppercase ${bag.panelColor === 'violet'? 'shadow-[#7F00FF] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.violet}</button>
                            <button onClick={() => setBag({ ...bag, panelColor: PanelColor.grey })} className={`bg-[#808080] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#808080] duration-200 text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.panelColor === 'grey'? 'shadow-[#808080] shadow-lg drop-shadow-lg' : ''}`}>{PanelColor.grey}</button>
                        </div>
                    </section>
                    <section className='flex flex-col w-full bg-[#fefffe] rounded-xl p-4 gap-4'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BORDER COLOUR</p>
                        <div className="flex flex-wrap gap-6 justify-evenly">
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.ivory })} className={`bg-[#FFFFF0] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFFF0] duration-200 border-[0.1px] border-black text-xs items-center justify-center text-center font-bold uppercase ${bag.borderColor === 'ivory'? 'shadow-[#FFFFF0] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.ivory}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.orange })} className={`bg-[#FFA500] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFA500] duration-200  text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.borderColor === 'orange'? 'shadow-[#FFA500] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.orange}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.white })} className={`bg-[#FFFFFF] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFFFF] duration-200 border-[0.1px] border-black text-xs items-center justify-center text-center font-bold uppercase ${bag.borderColor === 'white'? 'shadow-[#FFFFFF] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.white}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.blue })} className={`bg-[#0000ff] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#0000ff] duration-200  text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.borderColor === 'blue'? 'shadow-[#0000ff] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.blue}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.green })} className={`bg-[#00ff00] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#00ff00] duration-200  text-xs items-center justify-center text-center font-bold uppercase ${bag.borderColor === 'green'? 'shadow-[#00ff00] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.green}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.red })} className={`bg-[#FF0000] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FF0000] duration-200  text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.borderColor === 'red'? 'shadow-[#FF0000] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.red}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.pink })} className={`bg-[#FFC0CB] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFC0CB] duration-200  text-xs items-center justify-center text-center font-bold uppercase ${bag.borderColor === 'pink'? 'shadow-[#FFC0CB] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.pink}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.black })} className={`bg-[#000000] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#000000] duration-200  text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.borderColor === 'black'? 'shadow-[#000000] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.black}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.yellow })} className={`bg-[#FFFF00] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#FFFF00] duration-200  text-xs items-center justify-center text-center font-bold uppercase ${bag.borderColor === 'yellow'? 'shadow-[#FFFF00] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.yellow}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.beige })} className={`bg-[#a0816c] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#a0816c] duration-200  text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.borderColor === 'beige'? 'shadow-[#a0816c] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.beige}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.violet })} className={`bg-[#7F00FF] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#7F00FF] duration-200  text-xs items-center justify-center text-center font-bold uppercase ${bag.borderColor === 'violet'? 'shadow-[#7F00FF] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.violet}</button>
                            <button onClick={() => setBag({ ...bag, borderColor: BorderColor.grey })} className={`bg-[#808080] w-[90px] h-[30px] rounded-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-[#808080] duration-200  text-xs items-center justify-center text-center font-bold uppercase text-white ${bag.borderColor === 'grey'? 'shadow-[#808080] shadow-lg drop-shadow-lg' : ''}`}>{BorderColor.grey}</button>

                        </div>
                    </section>
                </div>
                <div className="flex flex-col col-span-4 lg:col-span-12 md:col-span-6 sm:col-span-6 bg-[#fefffe] h-fit p-4 rounded-xl sticky top-[42px] gap-4">
                    <section className='flex flex-col'>
                        <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BAG PREVIEW</p>
                        {<div><p>{bag.bagType}, {bag.borderColor}, {bag.borderGSM}, {bag.handleColor}, {bag.handleType}, {bag.panelSize}, {bag.panelGSM}, {bag.borderGSM}</p></div>}
                        <CarryBagSVG params={bag} />
                    </section>
                    <section className='flex justify-center'>
                        <button onClick={() => dispatch(addQuantity(bag))} className=" w-fit px-4 py-2 bg-[#01a9e9]/40 hover:bg-[#01a9e9]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]">ADD TO CART</button>
                    </section>
                </div>
            </div>
        </div>
    );
}