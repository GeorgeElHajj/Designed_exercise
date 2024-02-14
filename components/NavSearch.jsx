import Link from "next/link";
export default function NavSearch() {
    return (
        <div className="2xl:container mx-auto bg-neutral-100 ">
            <nav className="flex flex-row  m-10 ">
                <Link href="\"><img src="Logo.svg" alt="logo" className="w-14 h-14 mx-20" /></Link>
                <ul className="flex flex-row items-center  p-0 list-none justify-center space-x-20">
                    <li className=" text-xl font-bold"><Link href="#">Home</Link></li>
                    <li className=" text-xl font-bold"><Link href="#">Job</Link></li>
                    <li className=" text-xl font-bold"><Link href="#">About us</Link></li>
                    <li className=" text-xl font-bold"><Link href="#">Contact</Link></li>
                </ul>
            </nav>
            <div className="flex flex-col mt-24 ml-44">
                <h1 className="text-5xl font-bold ">Search, Find, & Apply</h1>
                <p className="mt-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br />
                    quis lacus non orci euismod vestibulum vitae ut ex. Quisque <br />
                    ut arcu at lectus tristique auctor sit amet at turpis.</p>
                <form className="flex flex-row mt-10 bg-white mb-14 rounded-xl ">
                    <div className="relative  py-3 px-4 mb-2 ">
                        <input type="search" placeholder="Job title, or keyword" className="py-2 pl-8 rounded-lg bg-neutral-100 " />
                        <img src="search.svg" alt="Search Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6" />
                    </div>
                    <div className="relative  py-3 px-4 mb-2">
                        <input type="text" placeholder="Location" className="py-2 pl-8  rounded-lg bg-neutral-100 "/>
                        <img src="location.svg" alt="Location Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6" />
                    </div>
                    <button type="submit" className="bg-emerald-300 text-white font-bold py-2 px-4 rounded-lg text-sm h-10 mt-3 mr-6">Search</button>
                </form>



            </div>
        </div>
    );
}