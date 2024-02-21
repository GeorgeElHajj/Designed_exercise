import Link from "next/link";

export default function SignIn() {
    return (
        <div className=" bg-gg h-auto md:rounded-bl-3xl md:w-2/5 w-full">
            <nav className=" hidden md:flex flex-row m-12  justify-center">
                <div className="flex flex-row items-center ">
                    <Link href="#" className="text-lg  font-bold text-white xl:mr-20 mr-16">Sign in</Link>
                    <div className="relative">
                        <div className="xl:text-lg text-sm bg-white rounded-xl border flex items-center  border-gray-300 xl:ml-20 ml-16">
                            <img src="sign-in.svg" alt="Sign In Icon" className="xl:h-6 h-4 xl:w-6 w-4 ml-2" />
                            <Link href="#" className="xl:p-2 p-4 font-bold xl:text-xl text-sm">Create Account</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex justify-start xl:ml-16 ml-10 mt-4">
                <div className=" bg-white rounded-lg xl:w-16 w-12 xl:h-16 h-12 flex justify-center items-center transform -rotate-6 mb-6 ">
                    <img src="search1.svg" alt="Sign In Icon" className="xl:h-8 h-6 xl:w-8 w-6" />
                </div>
            </div>
            <div className="flex justify-end mr-16">
                <div className=" bg-white rounded-lg xl:w-16 w-12 xl:h-16 h-12 flex justify-center items-center transform rotate-6 mb-6">
                    <img src="chart.svg" alt="Sign In Icon" className="xl:h-8 h-6 xl:w-8 w-6" />
                </div>
            </div>
            <div className="flex justify-start ml-14 ">
                <div className=" bg-white rounded-lg xl:w-16 w-12 xl:h-16 h-12 flex justify-center items-center transform -rotate-6 xl:mb-0 mb-6">
                    <img src="shield.svg" alt="Sign In Icon" className="xl:h-8 h-6 xl:w-8 w-6" />
                </div>
            </div>
        </div>
    );
}
