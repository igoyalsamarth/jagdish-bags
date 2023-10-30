'use client'
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { LocalCart } from "./nonWovenTile";
import { addQuantity, minusQuantity, deleteFromCart } from "@/redux/cart.slice";

export default function CartItems() {
    const items: Array<LocalCart> = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch();
    if (!items.length) {
        return (<p className='text-sm font-bold text-gray-400'>Your cart is Empty</p>);
    } else {
        return (
            <>
                {
                    items.map((Items:LocalCart, index: number) => {
                        return (
                            <div className="flex rounded-lg border border-gray-300 p-4 gap-10 relative" key={index}>
                                <div className="flex w-[200px] h-[200px] border border-gray-100">Image</div>
                                <div className="flex flex-col gap-4 justify-between">
                                    <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>{Items.bagType} BAGS</p>
                                    <div className="flex flex-col gap-2">
                                        <p className='text-sm font-bold text-gray-400 tracking-widest'>Border Color: <span className="uppercase text-gray-500">{Items.borderColor}</span></p>
                                        <p className='text-sm font-bold text-gray-400 tracking-widest'>Border GSM: <span className="uppercase text-gray-500">{Items.borderGSM}</span></p>
                                        <p className='text-sm font-bold text-gray-400 tracking-widest'>Handle Color: <span className="uppercase text-gray-500">{Items.handleColor}</span></p>
                                        <p className='text-sm font-bold text-gray-400 tracking-widest'>Handle Type: <span className="uppercase text-gray-500">{Items.handleType}</span></p>

                                    </div>
                                    <div className="flex gap-6 items-center">
                                        <button onClick={() => dispatch(addQuantity({"bagType":Items.bagType, "borderColor":Items.borderColor,"borderGSM":Items.borderGSM,"handleColor":Items.handleColor,"handleType":Items.handleType,"amount":Items.amount}))} className="text-xl bg-[#01a9e9]/40 text-[#fefffe] hover:bg-[#01a9e9]/60 font-bold border border-gray-200 rounded-full w-[30px] h-[30px]">+</button>
                                        <p className='font-bold text-gray-500 uppercase tabular-nums'>{Items.amount}</p>
                                        {
                                        Items.bagType === 'Non-Woven' ? (Items.amount > 1000 && <button onClick={() => dispatch(minusQuantity({"bagType":Items.bagType, "borderColor":Items.borderColor,"borderGSM":Items.borderGSM,"handleColor":Items.handleColor,"handleType":Items.handleType,"amount":Items.amount}))} className="text-xl bg-[#01a9e9]/40 text-[#fefffe] hover:bg-[#01a9e9]/60 font-bold border border-gray-200 rounded-full w-[30px] h-[30px]">-</button>):
                                        Items.bagType === 'lamination' ? (Items.amount > 500 && <button onClick={() => dispatch(minusQuantity({"bagType":Items.bagType, "borderColor":Items.borderColor,"borderGSM":Items.borderGSM,"handleColor":Items.handleColor,"handleType":Items.handleType,"amount":Items.amount}))} className="text-xl bg-[#01a9e9]/40 text-[#fefffe] hover:bg-[#01a9e9]/60 font-bold border border-gray-200 rounded-full w-[30px] h-[30px]">-</button>):
                                        Items.bagType === 'canvas' ? (Items.amount > 500 && <button onClick={() => dispatch(minusQuantity({"bagType":Items.bagType, "borderColor":Items.borderColor,"borderGSM":Items.borderGSM,"handleColor":Items.handleColor,"handleType":Items.handleType,"amount":Items.amount}))} className="text-xl bg-[#01a9e9]/40 text-[#fefffe] hover:bg-[#01a9e9]/60 font-bold border border-gray-200 rounded-full w-[30px] h-[30px]">-</button>):''}
                                    </div>
                                </div>
                                <button onClick={() => dispatch(deleteFromCart({"bagType":Items.bagType, "borderColor":Items.borderColor,"borderGSM":Items.borderGSM,"handleColor":Items.handleColor,"handleType":Items.handleType,"amount":Items.amount}))} className="absolute right-2 top-2 bg-[#f498d1] rounded-full aspect-square p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="18px" height="18px"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M10,2l-1,1h-5v2h1v15c0,0.52222 0.19133,1.05461 0.56836,1.43164c0.37703,0.37703 0.90942,0.56836 1.43164,0.56836h10c0.52222,0 1.05461,-0.19133 1.43164,-0.56836c0.37703,-0.37703 0.56836,-0.90942 0.56836,-1.43164v-15h1v-2h-5l-1,-1zM7,5h10v15h-10zM9,7v11h2v-11zM13,7v11h2v-11z"></path></g></g></svg>
                                </button>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}