import NonWovenTile from "@/components/nonWovenTile";

export default async function Page() {
    return (
        <div className="flex justify-center">
            <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 2xl:w-[1170px] xl:w-[962px] lg:w-[738px] md:w-[451px] sm:w-[95%] py-10 gap-10'>
                <NonWovenTile />
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