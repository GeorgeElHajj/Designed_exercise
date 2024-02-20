import Link from "next/link";

export default function NavSearch() {
    return (
        <div className=" bg-gr w-3/5 ">
            <nav className="flex flex-row m-10  justify-normal mx-auto">
                <Link href="/"><img src="Logo.svg" alt="logo" className="w-14 h-14 mr-32" /></Link>
                <ul className="flex flex-row items-center p-0 list-none justify-center space-x-20">
                    <li className="text-xl font-bold"><Link href="#">Home</Link></li>
                    <li className="text-xl font-bold"><Link href="#">Job</Link></li>
                    <li className="text-xl font-bold"><Link href="#">About us</Link></li>
                    <li className="text-xl font-bold"><Link href="#">Contact</Link></li>
                </ul>
            </nav>

            <div className=" mt-24 ml-8">
                <h1 className="text-5xl font-bold">Search, Find, & Apply</h1>
                <p className="mt-8 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br />
                    quis lacus non orci euismod vestibulum vitae ut ex. Quisque <br />
                    ut arcu at lectus tristique auctor sit amet at turpis.
                </p>
                <form className="flex flex-row mt-10 bg-white mb-14 rounded-xl justify-between items-center mr-20 py-3 px-4 relative">
                    <div>
                        <input type="search" placeholder="Job title, or keyword" className="py-2 pl-8 rounded-lg bg-gr text-black" />
                        <img src="search.svg" alt="Search Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6" />
                    </div>
                    <div>
                        <input type="text" placeholder="Location" className="py-2 pl-8 rounded-lg bg-gr text-black" />
                        <img src="location.svg" alt="Location Icon" className="absolute  top-1/2 transform -translate-y-1/2 h-6 w-6" />
                    </div>
                    <button type="submit" className="bg-gg text-white font-bold py-2 px-4 rounded-lg text-sm">Search</button>
                </form>

            </div>
        </div>
    );
}
