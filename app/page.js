import NavSearch from "@/components/NavSearch";
import SignIn from "@/components/SignIn";

export default function Home() {
    return (
        <div className="flex flex-row bg-neutral-100 2xl:container mx-auto 2xl:min-w-full">
            <NavSearch />
            <SignIn />
        </div>
    );
}