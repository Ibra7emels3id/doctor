import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";
import MainContainer from "./_components/MainContainer";


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
