import Link from "next/link";
export default async function Page() {
    return (
        <div className="flex justify-center">
            <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 2xl:w-[1170px] xl:w-[962px] lg:w-[738px] md:w-[451px] sm:w-[95%] py-10 gap-10'>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest'>NON-WOVEN BAGS</p>
                    <div className="flex w-full gap-4">
                        <div className="flex w-2/3">
                            test
                            min qty:
                            cost:
                        </div>
                        <div className="flex flex-col w-1/3 items-center gap-4">
                            test-2
                            <div className="flex gap-2">
                            <Link href='/shop/non-woven' className="px-4 py-2 bg-[#01a9e9]/40 hover:bg-[#01a9e9]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]">CUSTOMIZE</Link>
                            <button className="px-4 py-2 bg-[#e40089]/40 hover:bg-[#e40089]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest'>LAMINATION BAGS</p>
                    <div className="flex w-full gap-4">
                        <div className="flex w-2/3">
                            test
                        </div>
                        <div className="flex 1/3">
                            test-2
                        </div>
                    </div>
                </section>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest'>CANVAS BAGS</p>
                    <div className="flex w-full gap-4">
                        <div className="flex w-2/3">
                            test
                        </div>
                        <div className="flex 1/3">
                            test-2
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}