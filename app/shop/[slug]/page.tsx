export default async function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="flex justify-center">
            <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 2xl:w-[1170px] xl:w-[962px] lg:w-[738px] md:w-[451px] sm:w-[95%] py-10 gap-10'>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>CUSTOMIZE YOUR {params.slug.replace('-', ' ')} BAG</p>
                </section>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>HANDLE OF CHOICE</p>
                </section>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>HANDLE COLOR</p>
                </section>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>DESIGN</p>
                </section>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BORDER COLOUR</p>
                </section>
                <section className='flex flex-col col-span-12 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6'>
                    <p className='text-sm font-bold text-gray-500 tracking-widest uppercase'>BORDER DESIGN <span className=" font-light">(if any)</span></p>
                </section>
                <section className='flex col-span-12 sm:col-span-6 md:col-span-6 justify-center'>
                    <button className=" w-fit px-4 py-2 bg-[#01a9e9]/40 hover:bg-[#01a9e9]/60 rounded-full text-xs font-bold tracking-widest text-[#fefffe]">ADD TO CART</button>
                </section>
            </div>
        </div>
    );
}