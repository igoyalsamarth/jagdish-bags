import CartItems from "@/components/cartItems";
import CartTotal from "@/components/cartTotal";
export default async function Page() {

    return(
        <div className="flex justify-center min-h-[calc(100vh-74px)]">
            <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 2xl:w-[1170px] xl:w-[962px] lg:w-[738px] md:w-[451px] sm:w-[95%] py-10 gap-10 h-fit'>
                <section className='flex flex-col col-span-8 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6 min-h-[200px]'>
                <p className='text-sm font-bold text-gray-500 tracking-widest'>CART</p>
                <CartItems />
                </section>
                <section className='flex flex-col sticky col-span-4 sm:col-span-6 md:col-span-6 w-full bg-[#fefffe] rounded-xl p-6 gap-6 h-fit top-28'>
                <p className='text-sm font-bold text-gray-500 tracking-widest'>TOTAL</p>
                <CartTotal />
                </section>
            </div>
        </div>
    );
}