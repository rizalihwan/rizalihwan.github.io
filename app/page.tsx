import { Doodle1, Doodle2 } from "@/components/doodle";
import Image from "next/image";
import Link from "next/link";
import Canvas from "@/components/canvas";

export default function Home() {
    return (
        <section
            id="main-content"
            className="relative flex min-h-[80vh] items-center justify-center px-6 pb-10 md:px-10 md:pb-0"
        >
            <Canvas />

            <div className="relative z-10 flex max-w-5xl flex-col items-center justify-center gap-10 md:flex-row md:items-center md:justify-between">
                {/* PROFILE IMAGE */}
                <div className="relative">
                    <div className="hidden dark:block">
                        <Image
                            alt="Rizal Ihwan"
                            src="/default/profile.webp"
                            priority
                            width={320}
                            height={320}
                            className="rounded-full object-cover p-2 shadow-2xl transition duration-300 hover:scale-[1.02] md:size-[320px]"
                        />

                        <div className="absolute inset-x-0 bottom-0 stroke-[#ffd55a]/60">
                            <Doodle1 />
                        </div>
                    </div>

                    <div className="dark:hidden">
                        <Image
                            alt="Rizal Ihwan"
                            src="/default/profile.webp"
                            priority
                            width={320}
                            height={320}
                            className="rounded-full object-cover p-2 shadow-2xl transition duration-300 hover:scale-[1.02] md:size-[320px]"
                        />

                        <div className="absolute inset-x-0 bottom-0 stroke-[#9b9b9b]/60">
                            <Doodle1 />
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flex max-w-xl flex-col items-center space-y-5 text-center md:items-start md:text-left">
                    <h1 className="font-doodle text-3xl leading-tight text-zinc-900 dark:text-white md:text-5xl">
                        Bonjour!
                        <br />
                        It&apos;s me,
                        <span className="relative">
                            {" "}
                            rizal.
                            <div className="absolute -left-2 top-5 hidden w-[6.5rem] stroke-[#ffd55a]/60 dark:block md:top-7 md:w-[8rem]">
                                <Doodle2 />
                            </div>
                            <div className="absolute -left-2 top-5 w-[6.5rem] stroke-[#9b9b9b]/60 dark:hidden md:top-7 md:w-[8rem]">
                                <Doodle2 />
                            </div>
                        </span>{" "}
                        😎
                    </h1>

                    <p className="text-base leading-8 text-gray-700 dark:text-gray-300 md:text-lg">
                        A DevOps & Backend Engineer focused on building scalable
                        infrastructure, automation pipelines, and reliable
                        production systems.
                    </p>

                    <p className="text-base leading-8 text-gray-700 dark:text-gray-300 md:text-lg">
                        Passionate about Kubernetes, cloud-native technologies,
                        observability, system reliability, and modern software
                        engineering.
                    </p>

                    <p className="text-base leading-8 text-gray-700 dark:text-gray-300 md:text-lg">
                        Checkout my{" "}
                        <Link
                            className="relative z-20 font-semibold underline underline-offset-4 transition hover:opacity-80"
                            href="/projects"
                        >
                            past works
                        </Link>
                        , or learn more{" "}
                        <Link
                            href="/about"
                            className="relative z-20 font-semibold underline underline-offset-4 transition hover:opacity-80"
                        >
                            about me
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
