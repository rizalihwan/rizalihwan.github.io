import type { Metadata } from "next";
import Blob from "@/components/blob";
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
                    <h1 id="services" className="my-4">
                        <Link href="#services">Experience</Link>
                    </h1>
                    <hr />
                    <div className="pb-3">
                        <h5>
                            <p className="font-bold underline">WORK</p>
                        </h5>
                        <ul>
                            <li>
                                <h6 className="font-bold">
                                    PLN ICON PLUS
                                    <br />
                                    Technical Support & Engineer Data
                                    Reconciliation PLN Mobile
                                    <br />[ October 2022 - Present ]
                                </h6>
                                <p>
                                    - Recon Financial Data and Create Minutes of
                                    Hand Over PLN Marketplace.
                                    <br />
                                    - Recon Financial Data and Create Minutes of
                                    Hand Over PLN Herald Run.
                                    <br />
                                    - Recon Financial Data and Create Minutes of
                                    Hand Over PLN IconCash.
                                    <br />
                                    - Recon Financial Data and Create Minutes of
                                    Hand Over PLN Color Run.
                                    <br />
                                    - Recon Financial Data and Create Minutes of
                                    Hand Over PLN Proliga.
                                    <br />
                                    - Recon Financial Data and Create Minutes of
                                    Hand Over PLN Periklindo.
                                    <br />
                                    - Recon Financial Data and Create Minutes of
                                    Hand Over PLN IconPay Biller Aggregator.
                                    <br />- Recon Financial Data and Create
                                    Minutes of Hand Over PLN Disbursement.{" "}
                                    <br />- Recon Financial Data and Create
                                    Minutes of Hand Over PLN ListriQu. <br />-
                                    Recon Financial Data and Create Minutes of
                                    Hand Over PLN Nidi. <br />- Recon Financial
                                    Data and Create Minutes of Hand Over PLN
                                    Order Bundling. <br />- Recon Financial Data
                                    and Create Minutes of Hand Over PLN Voltrik.{" "}
                                    <br />- Recon Financial Data and Create
                                    Minutes of Hand Over PLN Merchandise. <br />
                                    - Recon Financial Data and Create Minutes of
                                    Hand Over PLN Electric Run. <br />- Recon
                                    Financial Data and Create Minutes of Hand
                                    Over PLN Merchandise. <br />- Recon
                                    Financial Data and Create Minutes of Hand
                                    Over PLN Ardan Senja Syahdu. <br />- Recon
                                    Financial Data and Create Minutes of Hand
                                    Over PLN EcoFest. <br />- Recon Financial
                                    Data and Create Minutes of Hand Over PLN
                                    Smada Teenage Dream. <br />- Recon Financial
                                    Data and Create Minutes of Hand Over PLN
                                    Gelegar Musik Perambanan.
                                    <br />- Recon Financial Data and Create
                                    Minutes of Hand Over PLN Run Palembang.
                                    <br />- Creating user application usage
                                    instructions for PLN Marketplace.
                                    <br />- Transfer of Knowledge for UMKM &
                                    Official Partner Merchant PLN Marketplace.
                                    <br />- Fixed an issue where users
                                    experienced problems with the PLN
                                    Marketplace Application.
                                    <br />- Become a PLN Marketplace Admin for
                                    UMKM & Official Partner Merchant PLN.
                                    <br />- Creating SQL Query for
                                    reconciliation, identification, sales
                                    report, fixing data & others.
                                    <br />- Carry out payment flagging on
                                    payment failure data.
                                    <br />- Monitoring servers with Grafana and
                                    others to service all PLN Mobile products.
                                </p>
                                <h6 className="font-bold">
                                    Backend Developer
                                    <br />[ August 2021 - October 2022 ]
                                </h6>
                                <p>
                                    - Creating API, Bug Fixing & Enhancement for
                                    PLN Mobile Core API.
                                    <br />- Creating API, Bug Fixing &
                                    Enhancement for PLN Marketplace Back Office
                                    Tools API.
                                    <br />- Creating API, Bug Fixing &
                                    Enhancement for PLN Marketplace Mobile API.
                                    <br />- Creating API, Bug Fixing &
                                    Enhancement for PLN Insurance API.
                                </p>
                            </li>
                            <li>
                                <h6 className="font-bold">
                                    MINISTRY OF FOREIGN AFFAIRS OF THE REPUBLIC
                                    OF INDONESIA
                                    <br />
                                    Fullstack Developer
                                    <br />[ Juny 2021 - March 2022 ]
                                </h6>
                                <p>
                                    Creating LMS (Learning Management System)
                                    Called CETO (Centre for Education and Online
                                    Training) Application to facilitate the
                                    learning system at the Ministry of Foreign
                                    Affairs (Ministry of Foreign Affairs of the
                                    Republic of Indonesia).
                                </p>
                            </li>
                            <li>
                                <h6 className="font-bold">
                                    KREASI ASIA
                                    <br />
                                    Backend Developer & Quality Assurance
                                    Engineer
                                    <br />[ February 2021 - February 2022 ]
                                </h6>
                                <p>
                                    - Creating TNI AD Financial Application
                                    (Accounting) Website created to facilitate
                                    transactions around accounting and record
                                    reports based on modules such as Profit and
                                    Loss, Balance Sheet, General Journal etc.
                                    <br /> - Creating eKPR TWPAD Application
                                    this website was created to make it easier
                                    for TNI AD personnel to buy houses.
                                </p>
                            </li>
                            <li>
                                <h6 className="font-bold">
                                    LASKAR TEKNOLOGI MULIA(CYBERLABS)
                                    <br />
                                    Internship
                                    <br />[ October 2020 - December 2020 ]
                                </h6>
                                <p>
                                    - Creating Tropisianimal Company Profile
                                    Application using the Laravel framework.
                                    <br />- Creating Articles on Blogger.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <h5>
                        <p className="font-bold underline">EDUCATION</p>
                    </h5>
                    <ul>
                        <li>
                            <h6 className="font-bold">
                                UNIVERSITAS BINANIAGA INDONESIA
                                <br />
                                Sistem Informasi
                            </h6>
                            <p>
                                I started studying at this university in the
                                information systems study program.
                            </p>
                        </li>
                        <li>
                            <h6 className="font-bold">
                                SMK WIKRAMA BOGOR
                                <br />
                                Rekayasa Perangkat Lunak
                                <br />[ 2018 - 2021 ]
                            </h6>
                            <p>
                                Learning the basics of Programming, UI/UX,
                                Database, GIT & Data Analysis. Starting with the
                                Algorithm, Flowchart, then programming languages
                                like PHP, Javascript, Vb.Net Java, C, C#,
                                Flutter, CodeIgniter, Laravel & Lumen. Continued
                                by learning Tools such as Github/Gitlab & Design
                                using Figma/Adobe XD and others.
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
}
