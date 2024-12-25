import type { Metadata } from "next";
import { IconArrow, IconCode } from "@/components/icons";
import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Img } from "@/components/mdx-components";
const day = require("dayjs");

export const metadata: Metadata = {
    title: "Projects",
    description: "Some collection of my past works.",
};

export default async function Blog() {
    const filteredProject = projects.sort();
    return (
        <section id="projects-content">
            <h1 className="mt-4 pt-3 text-4xl md:mt-11 md:text-6xl">
                Projects
            </h1>
            <p className="mt-2">Some collection of my past works.</p>
            {filteredProject.length > 0 ? (
                <div className="space-y-6 py-4">
                    {filteredProject.map((project, i) => (
                        <div
                            className="flex flex-col rounded-md border-2 border-dashed border-gray-200 dark:border-gray-800 md:flex-row"
                            key={i}
                        >
                            <Image
                                className="rounded"
                                width="600"
                                height="300"
                                src={project.image}
                                alt={project.title}
                                placeholder="blur"
                                style={{ objectFit: "cover", objectPosition: "left" }}
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqwcAAVEA58giG6IAAAAASUVORK5CYII="
                            />
                            <div className="flex max-w-md flex-col justify-between p-4 md:p-6">
                                <div>
                                    <h1
                                        className={`${project.font} line-clamp-2`}
                                    >
                                        {project.title}
                                    </h1>
                                    <p className="py-2 font-della text-xs text-gray-700 dark:text-gray-300 md:text-sm">
                                        {"[ " +
                                            project.createdFor +
                                            " - " +
                                            "As " +
                                            project.asPosition +
                                            " ]"}
                                    </p>
                                    <p className="text-sm md:text-base">
                                        {project.description}
                                    </p>
                                    <div className="flex space-x-2 pt-3">
                                        {project.technology?.map(
                                            (tech, idx) => (
                                                <div
                                                    className={`${
                                                        tech.color ||
                                                        "bg-gray-300 dark:bg-gray-700"
                                                    } rounded-sm px-1 py-0.5 text-[11px] font-semibold uppercase md:text-xs`}
                                                    key={idx}
                                                >
                                                    {tech.url ? (
                                                        <Link
                                                            target="_blank"
                                                            href={tech.url}
                                                        >
                                                            {tech.name}
                                                        </Link>
                                                    ) : (
                                                        tech.name
                                                    )}
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <p className="lmy-2 mt-10 truncate">
                                        <Link
                                            href={project.projectUrl}
                                            legacyBehavior
                                        >
                                            <a
                                                target="_blank"
                                                style={{
                                                    textDecoration: "underline",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {project.projectButton}
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                                <div className="mt-4 flex space-x-4 font-bold md:text-lg">
                                    {project.source && (
                                        <>
                                            <Link
                                                target="_blank"
                                                className="inline-flex items-center hover:underline"
                                                href={project.source}
                                            ></Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No project.</p>
            )}
        </section>
    );
}
