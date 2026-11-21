import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Experiences",
    description: "Some of my experiences.",
};

export default function Experience() {
    return (
        <section id="experience-content" className="mb-6 max-w-3xl">
            <div className="prose max-w-full dark:prose-dark">
                <section>
                    <h1 id="experience" className="my-6">
                        <Link href="#experience">Experience</Link>
                    </h1>

                    <div className="pb-8">
                        <h5 className="font-bold underline">WORK</h5>
                        <ul>
                            <li>
                                <article>
                                    <h5 className="text-lg font-bold">
                                        PLN ICON PLUS
                                    </h5>

                                    <h6 className="text-base font-bold">
                                        DevOps Engineer
                                        <br />[ March 2026 - Present ]
                                    </h6>

                                    <p className="mt-2 leading-7">
                                        <b>
                                            Stacks: Kubernetes, Docker, Argo CD,
                                            BIG-IP F5, HAProxy, DataDog,
                                            MetalLB, Istio, Grafana, Prometheus,
                                            GitLab CI/CD, Ansible, Semaphore,
                                            JumpServer, Loki, Mimir,
                                            VictoriaLogs, Redis, MongoDB,
                                            Ubuntu, CentOS, Golang, PHP,
                                            Flutter, Java, Tempo, KESL, EDR
                                            Fidelis.
                                        </b>
                                    </p>

                                    <ul className="ml-5 mt-3 list-disc">
                                        <li>
                                            Conduct research and development for
                                            infrastructure, deployment
                                            automation, and system reliability
                                            improvements.
                                        </li>

                                        <li>
                                            Maintain and manage 10+ Kubernetes
                                            clusters serving production and
                                            staging environments.
                                        </li>

                                        <li>
                                            Handle large-scale production
                                            deployments using Blue-Green
                                            deployment strategies to minimize
                                            downtime and service disruption.
                                        </li>

                                        <li>
                                            Manage and configure load balancing
                                            infrastructure using BIG-IP F5.
                                        </li>

                                        <li>
                                            Maintain PLN Mobile and Icon Plus
                                            applications deployed on
                                            Kubernetes-based container
                                            orchestration platforms.
                                        </li>

                                        <li>
                                            Develop and maintain CI/CD
                                            automation pipelines using GitLab
                                            Runner and Argo CD.
                                        </li>

                                        <li>
                                            Secure infrastructure assets and
                                            operational auditing processes using
                                            PAM JumpServer.
                                        </li>

                                        <li>
                                            Manage Kubernetes secrets and
                                            configuration security using
                                            HashiCorp Vault and External Secrets
                                            Operator.
                                        </li>

                                        <li>
                                            Monitor infrastructure,
                                            applications, and observability
                                            platforms using Grafana, Prometheus,
                                            Loki, Tempo, and DataDog.
                                        </li>

                                        <li>
                                            Perform Linux server administration
                                            and maintenance on Ubuntu and CentOS
                                            environments.
                                        </li>

                                        <li>
                                            Implement infrastructure hardening
                                            and security best practices based on
                                            CIS Benchmark standards.
                                        </li>

                                        <li>
                                            Support troubleshooting, performance
                                            optimization, and system reliability
                                            improvements across multiple
                                            services and environments.
                                        </li>
                                    </ul>

                                    <h6 className="mt-5 text-base font-bold">
                                        Database Administrator, Data
                                        Reconciliation Engineer & Technical
                                        Support
                                        <br />[ October 2022 - February 2026 ]
                                    </h6>

                                    <ul className="ml-5 mt-3 list-disc">
                                        <li>
                                            Supported data reconciliation and
                                            validation processes to maintain
                                            data integrity.
                                        </li>

                                        <li>
                                            Worked with SQL and database systems
                                            to ensure high-quality data output.
                                        </li>

                                        <li>
                                            Identified and resolved
                                            discrepancies in data flows while
                                            maintaining accuracy and compliance.
                                        </li>

                                        <li>
                                            Participated in the development of
                                            the PLN Network Integrator product
                                            (Data Gateway) by supporting UAT and
                                            SIT processes.
                                        </li>

                                        <li>
                                            Created user guides and application
                                            usage instructions for PLN
                                            Marketplace.
                                        </li>

                                        <li>
                                            Conducted knowledge transfer
                                            sessions for UMKM and Official
                                            Partner Merchants of PLN
                                            Marketplace.
                                        </li>

                                        <li>
                                            Resolved application issues
                                            experienced by PLN Marketplace
                                            users.
                                        </li>

                                        <li>
                                            Served as PLN Marketplace
                                            Administrator for UMKM and Official
                                            Partner Merchants.
                                        </li>

                                        <li>
                                            Created SQL queries for
                                            reconciliation, reporting, data
                                            identification, and issue fixing
                                            purposes.
                                        </li>

                                        <li>
                                            Performed payment flagging analysis
                                            on failed transaction data.
                                        </li>

                                        <li>
                                            Monitored servers and services using
                                            Grafana and other monitoring tools
                                            to support PLN Mobile products.
                                        </li>
                                    </ul>

                                    <h6 className="mt-5 text-base font-bold">
                                        Backend Developer
                                        <br />[ August 2021 - October 2022 ]
                                    </h6>

                                    <ul className="ml-5 mt-3 list-disc">
                                        <li>
                                            Developed APIs, bug fixes, and
                                            feature enhancements for PLN Mobile
                                            Core API services.
                                        </li>

                                        <li>
                                            Developed APIs, bug fixes, and
                                            feature enhancements for PLN
                                            Marketplace Back Office Tools API.
                                        </li>

                                        <li>
                                            Developed APIs, bug fixes, and
                                            feature enhancements for PLN
                                            Marketplace Mobile API.
                                        </li>

                                        <li>
                                            Developed APIs, bug fixes, and
                                            feature enhancements for PLN
                                            Insurance API services.
                                        </li>
                                    </ul>
                                </article>
                            </li>

                            <li className="mt-8">
                                <article>
                                    <h5 className="text-lg font-bold">
                                        MINISTRY OF FOREIGN AFFAIRS OF THE
                                        REPUBLIC OF INDONESIA
                                    </h5>

                                    <h6 className="text-base font-bold">
                                        Fullstack Developer
                                        <br />[ June 2021 - March 2022 ]
                                    </h6>

                                    <ul className="ml-5 mt-3 list-disc">
                                        <li>
                                            Developed an LMS (Learning
                                            Management System) application
                                            called CETO (Centre for Education
                                            and Online Training) to support
                                            digital learning processes within
                                            the Ministry of Foreign Affairs.
                                        </li>

                                        <li>
                                            Contributed to both frontend and
                                            backend development processes for
                                            internal government training
                                            systems.
                                        </li>
                                    </ul>
                                </article>
                            </li>

                            <li className="mt-8">
                                <article>
                                    <h5 className="text-lg font-bold">
                                        KREASI ASIA
                                    </h5>

                                    <h6 className="text-base font-bold">
                                        Backend Developer & Quality Assurance
                                        Engineer
                                        <br />[ February 2021 - February 2022 ]
                                    </h6>

                                    <ul className="ml-5 mt-3 list-disc">
                                        <li>
                                            Developed a TNI AD Financial
                                            Application (Accounting System) to
                                            support accounting transactions,
                                            financial reports, profit and loss
                                            reports, balance sheets, and general
                                            journal processes.
                                        </li>

                                        <li>
                                            Developed the eKPR TWPAD application
                                            to facilitate house purchasing
                                            processes for TNI AD personnel.
                                        </li>

                                        <li>
                                            Performed quality assurance testing
                                            and validation to ensure application
                                            stability and functionality.
                                        </li>
                                    </ul>
                                </article>
                            </li>

                            <li className="mt-8">
                                <article>
                                    <h5 className="text-lg font-bold">
                                        LASKAR TEKNOLOGI MULIA (CYBERLABS)
                                    </h5>

                                    <h6 className="text-base font-bold">
                                        Internship
                                        <br />[ October 2020 - December 2020 ]
                                    </h6>

                                    <ul className="ml-5 mt-3 list-disc">
                                        <li>
                                            Developed the Tropisianimal company
                                            profile application using the
                                            Laravel framework.
                                        </li>

                                        <li>
                                            Created and managed blog article
                                            content using Blogger.
                                        </li>
                                    </ul>
                                </article>
                            </li>
                        </ul>
                    </div>

                    <div className="pb-3">
                        <h5 className="font-bold underline">EDUCATION</h5>

                        <ul>
                            <li>
                                <article>
                                    <h5 className="text-lg font-bold">
                                        UNIVERSITAS BINANIAGA INDONESIA
                                    </h5>

                                    <h6 className="text-base font-bold">
                                        Information Systems
                                    </h6>

                                    <p className="mt-2 leading-7">
                                        Studied Information Systems with a focus
                                        on software development, database
                                        management, system analysis, and
                                        information technology implementation.
                                    </p>
                                </article>
                            </li>

                            <li className="mt-8">
                                <article>
                                    <h5 className="text-lg font-bold">
                                        SMK WIKRAMA BOGOR
                                    </h5>

                                    <h6 className="text-base font-bold">
                                        Software Engineering
                                        <br />[ 2018 - 2021 ]
                                    </h6>

                                    <ul className="ml-5 mt-3 list-disc">
                                        <li>
                                            Learned programming fundamentals,
                                            algorithms, flowcharts, UI/UX
                                            design, database systems, version
                                            control, and data analysis.
                                        </li>

                                        <li>
                                            Developed applications using
                                            programming languages such as PHP,
                                            JavaScript, VB.NET, Java, C, C++,
                                            C#, and Flutter.
                                        </li>

                                        <li>
                                            Worked with frameworks and
                                            technologies including Laravel,
                                            Lumen, and CodeIgniter.
                                        </li>

                                        <li>
                                            Utilized version control and
                                            collaboration tools such as GitHub
                                            and GitLab.
                                        </li>

                                        <li>
                                            Designed user interfaces and
                                            prototypes using Figma and Adobe XD.
                                        </li>
                                    </ul>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    );
}
