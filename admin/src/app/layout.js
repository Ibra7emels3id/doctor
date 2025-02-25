import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProviderContext } from "@/context/context";
import { Toaster } from "sonner";

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${outfit.subsets} ${geistMono.variable} antialiased`}
            >
                <AuthProviderContext>
                    {children}
                    <Toaster />
                </AuthProviderContext>
            </body>
        </html>
    );
}
