import "@/styles/global.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { doodle, sans, footer, della } from "@/styles/fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Providers from "@/components/providers";

export const metadata: Metadata = {
    metadataBase: new URL(`https://rizalihwan.me`),
    icons: {
        icon: "/laravel.ico",
    },
    title: {
        template: "Rizal Ihwan - %s",
        default: "It's me, rizal!",
    },
    description: "My personal portfolio website built with heart and love.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${doodle.variable} ${sans.variable} ${footer.variable} ${della.variable}`}
            suppressHydrationWarning
        >
            <body className="flex h-dvh select-none flex-col">
                <Providers>
                    <Navbar />
                    <SpeedInsights />
                    {children}
                    <Analytics />
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
