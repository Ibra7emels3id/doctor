import Link from "next/link";

const Page = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 md:p-6">
                <div className="text-center">
                    <div className="flex bg-green-700 h-24 w-24 rounded-full m-auto items-center justify-center">
                        <svg  loading='lazy' xmlns="http://www.w3.org/2000/svg" className="w-16 fill-current text-blue" viewBox="0 0 512 512">
                            <ellipse cx="256" cy="256" rx="256" ry="255.832" className="fill-current text-green-700" />
                            <path d="M235.472 392.08L114.432 297.784l34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z" className="fill-current text-white" />
                        </svg>
                    </div>
                    <h1 className="text-3xl my-3 font-bold">Payment successful</h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl md:mx-auto dark:text-gray-400">
                        Your order has been confirmed and is being processed. You will receive an email confirmation shortly.
                    </p>
                </div>
                <div className="w-full max-w-sm">
                    <div className="flex gap-3 p-3 text-center">
                        <Link href="/" className="w-full bg-yellow h-10 flex text-blue border-blue border bg-white hover:bg-blue hover:text-white transition-all duration-200 py-3 justify-center" style={{ height: "inherit" }} prefetch={false}>
                            Home
                        </Link>
                        <Link href="/orders" className="w-full h-10 py-3 text-white border-blue border bg-blue hover:bg-white hover:text-blue transition-all duration-200 flex bg-green-600  justify-center" style={{ height: "inherit" }} prefetch={false}>
                            Order
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;