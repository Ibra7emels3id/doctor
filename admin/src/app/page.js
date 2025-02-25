import Image from "next/image";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex">
                <NavBar />
                <div className='ml-[75px]  mt-[70px] lg:ml-[250px] bg-[#eaefff] w-full min-h-screen'>
                    <MainContainer />
                </div>
            </div>
        </>
    );
}
