import Image from "next/image";
import Link from "next/link";

export default async function Header() {
    return (
        <header className="flex w-full bg-[#fefffe] py-6 border-b-2 border-gray-200 justify-center items-center">
            <div className="flex justify-between w-[1200px] items-center">
                <div className="flex gap-14">
                    <Image src='/next.svg' alt="" height={40} width={40} />
                    <div className="flex gap-4">
                        <Link href='' className=" text-lg font-semibold text-gray-500 hover:text-black">Home</Link>
                        <Link href='/shop' className=" text-lg font-semibold text-gray-500 hover:text-black">Shop</Link>
                        <Link href='/contact' className=" text-lg font-semibold text-gray-500 hover:text-black">Contact</Link>
                    </div>
                </div>
                <div className="flex">
                    <p>theme switch and other stuff</p>
                </div>
            </div>
        </header>
    );
}