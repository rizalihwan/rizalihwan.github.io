import {
    Mansalva,
    Nunito,
    Gloria_Hallelujah,
} from "next/font/google";

export const doodle = Mansalva({
    subsets: ["latin"],
    variable: "--font-doodle",
    weight: "400",
    display: "swap",
});

export const sans = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
    display: "swap",
});

export const footer = Gloria_Hallelujah({
    subsets: ["latin"],
    variable: "--font-footer",
    weight: "400",
    display: "swap",
});
