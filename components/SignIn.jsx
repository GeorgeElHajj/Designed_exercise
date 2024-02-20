import Link from "next/link";

export default function SignIn() {
    return (
        <div className=" bg-gg h-auto rounded-bl-3xl w-2/5">
            <nav className="flex flex-row m-12 justify-center">
                <div className="flex flex-row items-center ">
                    <Link href="#" className="text-lg font-bold text-white mr-20">Sign in</Link>
                    <div className="relative">
                        <div className="text-lg bg-white rounded-xl flex items-center border border-gray-300 ml-20">
                            <img src="sign-in.svg" alt="Sign In Icon" className="h-6 w-6 ml-2" />
                            <Link href="#" className="p-2 font-bold">Create Account</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex justify-start ml-16">
                <div className=" bg-white rounded-lg w-16 h-16 flex justify-center items-center transform -rotate-6 mb-6 ">
                    <img src="search1.svg" alt="Sign In Icon" className="h-8 w-8 " />
                </div>
            </div>
            <div className="flex justify-end mr-16">
                <div className=" bg-white rounded-lg w-16 h-16 flex justify-center items-center transform rotate-6 mb-6">
                    <img src="chart.svg" alt="Sign In Icon" className="h-8 w-8" />
                </div>
            </div>
            <div className="flex justify-start ml-14">
                <div className=" bg-white rounded-lg w-16 h-16 flex justify-center items-center transform -rotate-6">
                    <img src="shield.svg" alt="Sign In Icon" className="h-8 w-8 " />
                </div>
            </div>
        </div>
    );
}
