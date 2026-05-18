import type { Metadata } from "next";
import Blob from "@/components/blob";
import Link from "next/link";

const socials = [
    {
        name: "Blog",
        url: "https://rizhalun.blogspot.com/",
    },
    {
        name: "Email",
        url: "mailto:rizalihwan94@gmail.com",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rizal-ihwan-sulaiman/",
    },
    {
        name: "GitHub",
        url: "https://github.com/rizalihwan",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/rizalihwann/",
    },
    {
        name: "Facebook",
        url: "https://web.facebook.com/rizalihwann/",
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
                {/* ABOUT */}
                <section>
                    <h1 id="about" className="my-4">
                        <Link href="#about">About</Link>
                    </h1>

                    <p className="leading-7">
                        I am <b>Rizal Ihwan Sulaiman</b>, a Back-end Developer
                        and DevOps Engineer focused on building reliable,
                        scalable, and efficient applications. I specialize in
                        the <b>Laravel</b> ecosystem and have solid experience
                        in database management, system deployment,
                        infrastructure operations, and software architecture.
                    </p>

                    <p className="leading-7">
                        I am passionate about solving technical challenges,
                        improving system performance, and delivering
                        high-quality solutions based on business and client
                        requirements.
                    </p>

                    <p className="leading-7">
                        In addition to back-end development, I also have
                        experience with modern front-end technologies such as{" "}
                        <b>Bootstrap</b>, <b>Tailwind CSS</b>, and{" "}
                        <b>Next.js</b>.
                    </p>

                    <p className="leading-7">
                        I have also contributed to several open-source projects,
                        including the{" "}
                        <Link
                            className="font-semibold underline"
                            href="https://zuramai.github.io/mazer/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mazer
                        </Link>{" "}
                        Admin Template.
                    </p>

                    <p className="leading-7">
                        Throughout my professional career, I have been entrusted
                        with multiple technical roles including Back-end
                        Developer, Database Administrator, Data Reconciliation
                        Engineer, Technical Support, and DevOps Engineer, which
                        strengthened my expertise in software development,
                        infrastructure management, and system operations.
                    </p>

                    <p className="leading-7">
                        Currently, I work at a state-owned company as a{" "}
                        <span className="font-bold">
                            DevOps | DevSecOps Engineer.
                        </span>
                    </p>

                    <p className="leading-7">
                        Outside of work, I enjoy gaming, working out, and
                        exploring new technologies.
                    </p>
                </section>

                {/* SERVICES */}
                <section className="mt-10">
                    <h1 id="services" className="my-4">
                        <Link href="#services">Services</Link>
                    </h1>

                    <p>
                        Some of the services that I can provide are listed
                        below:
                    </p>

                    <ul className="mt-4">
                        <li>
                            <p className="font-bold">Back-end Development</p>

                            <p className="leading-7">
                                Build scalable and secure RESTful APIs using
                                Laravel, Lumen, and Golang-based services.
                            </p>
                        </li>

                        <li>
                            <p className="font-bold">Web Development</p>

                            <p className="leading-7">
                                Develop dynamic and static websites from
                                frontend implementation to backend services and
                                database integration.
                            </p>
                        </li>

                        <li>
                            <p className="font-bold">DevOps & Infrastructure</p>

                            <p className="leading-7">
                                Manage Kubernetes infrastructure, CI/CD
                                pipelines, container orchestration,
                                observability systems, and deployment automation
                                for scalable applications.
                            </p>
                        </li>

                        <li>
                            <p className="font-bold">
                                Data Reconciliation Engineer
                            </p>

                            <p className="leading-7">
                                Perform financial data reconciliation,
                                validation, reporting, and SQL-based data
                                extraction to ensure data consistency and
                                integrity.
                            </p>
                        </li>

                        <li>
                            <p className="font-bold">Database Administrator</p>

                            <p className="leading-7">
                                Create SQL queries for reporting,
                                troubleshooting, data analysis, and custom
                                business requirements using MySQL and PostgreSQL
                                databases.
                            </p>
                        </li>

                        <li>
                            <p className="font-bold">Technical Support</p>

                            <p className="leading-7">
                                Troubleshoot application, server, and database
                                issues including payment failures, data
                                inconsistencies, and infrastructure-related
                                problems while providing operational support and
                                maintenance.
                            </p>
                        </li>
                    </ul>
                </section>

                {/* SKILLS */}
                <section className="mt-10">
                    <h1 id="skills" className="my-4">
                        <Link href="#skills">Skills</Link>
                    </h1>

                    <p>Some of the technologies and tools that I use:</p>

                    <ul className="mt-4">
                        <li>
                            <p className="font-bold">Back-end Development</p>

                            <p>Golang, Laravel, Lumen, PHP.</p>
                        </li>

                        <li>
                            <p className="font-bold">Front-end Development</p>

                            <p>Next.js, Tailwind CSS, Bootstrap.</p>
                        </li>

                        <li>
                            <p className="font-bold">DevOps & Infrastructure</p>

                            <p>
                                Kubernetes, Docker, Argo CD, GitLab CI/CD,
                                Istio, MetalLB, BIG-IP F5, Ansible, Semaphore,
                                Vault, JumpServer.
                            </p>
                        </li>

                        <li>
                            <p className="font-bold">
                                Monitoring & Observability
                            </p>

                            <p>
                                Grafana, Prometheus, Loki, Tempo, Mimir,
                                DataDog.
                            </p>
                        </li>

                        <li>
                            <p className="font-bold">Database Management</p>

                            <p>MySQL, PostgreSQL, Redis, MongoDB.</p>
                        </li>

                        <li>
                            <p className="font-bold">
                                Operating Systems & Tools
                            </p>

                            <p>
                                Ubuntu, CentOS, Git, GitHub, GitLab, SQL,
                                MobaXterm, Microsoft Office Tools.
                            </p>
                        </li>
                    </ul>
                </section>

                {/* CONTACT */}
                <section className="mt-10">
                    <h1 id="contact" className="my-4">
                        <Link href="#contact">Contact</Link>
                    </h1>

                    <p className="leading-7">
                        I&apos;m always open to discussing technology,
                        collaboration opportunities, or professional networking.
                        Feel free to reach out through the platforms below:
                    </p>

                    <ul className="mt-4">
                        {socials.map((data, idx) => (
                            <li key={idx}>
                                <p className="my-2 truncate">
                                    <span className="font-semibold">
                                        {data.name}
                                    </span>{" "}
                                    -{" "}
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

                    <p className="leading-7">
                        If you would like to explore more of my work and
                        projects, feel free to visit my{" "}
                        <Link
                            target="_blank"
                            className="font-semibold underline"
                            href="https://github.com/rizalihwan"
                        >
                            GitHub
                        </Link>
                        . Cheers 🍻
                    </p>
                </section>
            </div>
        </section>
    );
}
