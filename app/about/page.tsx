import type { Metadata } from "next";
import Blob from "@/components/blob";
import Link from "next/link";

const socials = [
    {
        name: "Email",
        url: "mailto:rizalihwan94@gmail.com",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rizal-ihwan-sulaiman/",
    },
    {
        name: "Github",
        url: "https://github.com/rizalihwan",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/rizalihwann/",
    },
];

export const metadata: Metadata = {
    title: "About",
    description: "Hello everyone, my name is Rizal.",
};

export default function About() {
    return (
        <section id="about-content" className="mb-6 max-w-3xl">
            <div className="mx-auto mt-2 size-80 md:size-96">
                <Blob />
            </div>
            <div className="prose max-w-full dark:prose-dark">
                <section>
                    <h1 id="about" className="my-4">
                        <Link href="#about">About</Link>
                    </h1>
                    <p>
                        Hello, my name is <b>Rizal Ihwan Sulaiman</b> who is
                        currently struggling in the programming world,
                        especially in the web development section. I am very
                        familiar with <b>Laravel</b> framework and good at
                        operating databases. I really like challenges and always
                        learn new things, and accept application projects based
                        on client requests. Apart from that, I am currently
                        working at a state-owned company as a{" "}
                        <i className="font-bold">
                            Database Administrator, Data Reconciliation Engineer
                            & Technical Support.
                        </i>
                    </p>
                    <p>
                        <i>
                            <b>&#8220;</b>The quality of a person is seen from
                            his commitment to succeed in whatever field he
                            pursues<b>&#8220;</b>.
                        </i>
                    </p>
                    <p>
                        On the other hand, my love for technology and
                        programming led me to delve into the world of full-stack
                        development. I am skilled in back-end technologies such
                        as <b>Laravel</b> and <b>Lumen</b>, as well as front-end
                        technologies like <b>Bootstrap, TailwindCSS</b> and{" "}
                        <b>Next.js</b>.
                    </p>
                    <p>
                        During my time working at the current company I was
                        entrusted to hold more advanced positions, initially a
                        back-end developer now a Database Administrator, Data
                        Reconciliation Engineer & Technical Support.
                    </p>
                    <p>
                        Outside of work thingy, I love playing games and work
                        out.
                    </p>
                </section>
                <section>
                    <h1 id="services" className="my-4">
                        <Link href="#services">Services</Link>
                    </h1>
                    <p>Some of the services that I can create are as below:</p>
                    <ul>
                        <li>
                            <p className="font-bold">Backend Development</p>
                            <p>
                                Creating RestfullAPI using Laravel or Lumen
                                framework.
                            </p>
                        </li>
                        <li>
                            <p className="font-bold">Web Development</p>
                            <p>
                                Serving website development from scratch that is
                                Dynamic or Static, from front view to backend &
                                database integration.
                            </p>
                        </li>
                        <li>
                            <p className="font-bold">
                                Data Reconciliation Engineer
                            </p>
                            <p>
                                Compare financial data and create financial
                                minutes using Microsoft tools such as Microsoft
                                Excel, Word and others. Create SQL queries
                                independently to extract the data needed for
                                reconciliation.
                            </p>
                        </li>{" "}
                        <li>
                            <p className="font-bold">Technical Support</p>
                            <p>
                                Fix existing problems in applications such as
                                payment failures, server problems, data
                                corruption and others to be repaired. Create SQL
                                queries and perform CRUD actions to fix data
                                problems in existing applications.
                            </p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h1 id="contact" className="my-4">
                        <Link href="#contact">Contact</Link>
                    </h1>
                    <p>
                        I&apos;m always excited to connect with everyone so
                        please don&apos;t hesitate to reach out by following my
                        social media below:
                    </p>
                    <ul>
                        {socials.map((data, idx) => (
                            <li key={idx}>
                                <p className="my-2 truncate">
                                    {data.name} -{" "}
                                    <Link
                                        target="_blank"
                                        className="underline"
                                        href={data.url}
                                    >
                                        {data.url.replace("mailto:", "")}
                                    </Link>
                                </p>
                            </li>
                        ))}
                    </ul>
                    <p>
                        If you want to see a lot of the work I&apos;ve made, you
                        can visit{" "}
                        <Link
                            target="_blank"
                            className="underline"
                            href="https://github.com/rizalihwan"
                        >
                            my github
                        </Link>
                        . Cheers🍻
                    </p>
                </section>
            </div>
        </section>
    );
}
