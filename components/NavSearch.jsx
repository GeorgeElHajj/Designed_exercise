"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavSearch() {
    const [burgerBtn, setBurgerBtn] = useState(false);

    function handleClick() {
        setBurgerBtn(bgBtn => !bgBtn);
    }

    return (
        <div className="bg-gr md:w-3/5 w-full px-5 xl:px-20">
            <nav className="flex flex-row md:m-10 m-8 md:mx-auto justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <img src="Logo.svg" alt="logo" className="w-14 h-14 xl:mr-24 mr-12" />
                    </Link>
                    <ul className={!burgerBtn ? "hidden md:flex md:flex-row items-center p-0 list-none justify-center xl:space-x-20 space-x-10" :
                        "flex flex-col rounded-lg shadow-xl mt-4 absolute top-20 left-0 z-10 w-full justify-center items-center bg-gr"}>
                        <li className="xl:text-xl py-2 text-lg font-bold"><Link href="#">Home</Link></li>
                        <li className="xl:text-xl py-2 text-lg font-bold"><Link href="#">Job</Link></li>
                        <li className="xl:text-xl py-2 text-lg font-bold"><Link href="#">About us</Link></li>
                        <li className="xl:text-xl py-2 text-lg font-bold"><Link href="#">Contact</Link></li>
                    </ul>

                </div>
                <button className="block md:hidden text-black z-20 text-xl" onClick={handleClick}>
                    {burgerBtn ? <img src="close.svg" className="h-10 w-10" /> : <img src="burger.svg" className="h-10 w-10" />}
                </button>
            </nav>
            <div className="xl:mt-24 mt-12 ">
                 
                <h1 className="xl:text-5xl text-3xl font-bold">Search, Find, & Apply</h1>
                <p className="xl:mt-8 mt-6 xl:text-lg text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br />
                    quis lacus non orci euismod vestibulum vitae ut ex. Quisque <br />
                    ut arcu at lectus tristique auctor sit amet at turpis.
                </p>
                <form className="flex flex-row xl:mt-10 mt-8 bg-white xl:mb-14 mb-8 rounded-xl justify-between items-center xl:py-3 py-1 xl:px-4 px-2 relative">
                    <div>
                        <input type="search" placeholder="Job title, or keyword" className="py-2 pl-8 rounded-lg bg-gr bg-cover text-black xl:text-base text-xs xl:w-auto w-40" />
                        <img src="search.svg" alt="Search Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6" />
                    </div>
                    <div>
                        <input type="text" placeholder="Location" className="py-2 pl-8 rounded-lg bg-gr bg-cover text-black xl:text-base text-xs xl:w-auto w-32" />
                        <img src="location.svg" alt="Location Icon" className="absolute top-1/2 transform -translate-y-1/2 h-6 w-6" />
                    </div>
                    <button type="submit" className="bg-gg text-white font-bold xl:py-2 py-1 xl:px-4 px-3 rounded-lg xl:text-sm text-xs">Search</button>
                </form>
            </div>

        </div>
    );
}
