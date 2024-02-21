import NavSearch from "@/components/NavSearch";
import SignIn from "@/components/SignIn";

export default function Home() {
    return (
        <div className="parent ">
        <div className="flex md:flex-row flex-col bg-neutral-100 2xl:container mx-auto">
            <NavSearch />
            <SignIn />
        </div>
        </div>
    );
}