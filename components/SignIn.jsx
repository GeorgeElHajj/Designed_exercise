import Link from "next/link";
export default function SignIn() {
    return (
        <div className="bg-gg h-auto rounded-bl-3xl w-2/5">
            <nav className="flex flex-row m-10 justify-center mt-8">
                <ul className="flex flex-row items-center p-0 list-none justify-center space-x-20">
                    <li className="text-lg font-bold text-white"><Link href="#">Sign in</Link></li>
                    <div className="relative py-3 px-4 mb-2">
                        <li className="text-lg bg-white rounded-xl flex items-center border border-gray-300">
                            <img src="sign-in.svg" alt="Sign In Icon" className="h-6 w-6 ml-2" />
                            <Link href="#" className="ml-2 p-2 font-bold">Create Account</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}