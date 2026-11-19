import type { Metadata } from "next";
import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects",
    description: "Some collection of my past works.",
};

export default async function Projects() {
    const filteredProject = [...projects];

    return (
        <section id="projects-content" className="mx-auto max-w-5xl">
            <h1 className="mt-4 pt-3 text-4xl font-bold md:mt-10 md:text-5xl">
                Projects
            </h1>

            <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300 md:text-base">
                Some collections of projects, products, and systems that I have
                worked on professionally and personally.
            </p>

            {filteredProject.length > 0 ? (
                <div className="space-y-6 py-6">
                    {filteredProject.map((project, i) => (
                        <article
                            key={i}
                            className="
                                overflow-hidden
                                rounded-2xl
                                border
                                border-black/5
                                bg-white/60
                                shadow-xl
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-2xl
                                dark:border-white/10
                                dark:bg-black/20
                                dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)]
                            "
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* IMAGE */}
                                <div className="relative overflow-hidden md:w-[46%]">
                                    <Image
                                        className="h-[220px] w-full object-cover object-top transition duration-300 hover:scale-105 md:h-full"
                                        width={1200}
                                        height={700}
                                        sizes="(min-width: 1024px) 471px, (min-width: 768px) 46vw, 85vw"
                                        src={project.image}
                                        alt={project.title}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqwcAAVEA58giG6IAAAAASUVORK5CYII="
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
                                    <div>
                                        <h2
                                            className={`${project.font} text-xl font-bold leading-tight text-gray-900 dark:text-white md:text-3xl`}
                                        >
                                            {project.title}
                                        </h2>

                                        <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-300 md:text-sm">
                                            {`[ ${project.createdFor} - As ${project.asPosition} ]`}
                                        </p>

                                        <p className="mt-4 text-sm leading-7 text-gray-700 dark:text-gray-200 md:text-base">
                                            {project.description}
                                        </p>

                                        {/* TECHNOLOGIES */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.technology?.map(
                                                (tech, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`
                                                            ${
                                                                tech.color ||
                                                                "bg-gray-200 dark:bg-white/10"
                                                            }
                                                            rounded-md
                                                            px-2.5
                                                            py-1
                                                            text-[10px]
                                                            font-bold
                                                            uppercase
                                                            tracking-wide
                                                            text-white
                                                            shadow-sm
                                                            backdrop-blur-xl
                                                            md:text-xs
                                                        `}
                                                    >
                                                        {tech.url ? (
                                                            <Link
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                href={tech.url}
                                                                className="hover:underline"
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
                                    </div>

                                    {/* ACTIONS */}
                                    <div className="mt-6 flex flex-wrap items-center gap-3">
                                        {project.projectUrl ? (
                                            <Link
                                                href={project.projectUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    inline-flex
                                                    items-center
                                                    rounded-lg
                                                    border
                                                    border-black/10
                                                    bg-black/[0.03]
                                                    px-4
                                                    py-2
                                                    text-sm
                                                    font-semibold
                                                    text-gray-800
                                                    backdrop-blur-xl
                                                    transition-all
                                                    hover:bg-black/[0.06]
                                                    dark:border-white/10
                                                    dark:bg-white/5
                                                    dark:text-white
                                                    dark:hover:bg-white/10
                                                "
                                            >
                                                ▶{" "}
                                                {project.projectButton ||
                                                    "Visit Project"}
                                            </Link>
                                        ) : (
                                            <span
                                                className="
                                                    inline-flex
                                                    cursor-not-allowed
                                                    items-center
                                                    rounded-lg
                                                    border
                                                    border-dashed
                                                    border-black/10
                                                    bg-black/[0.03]
                                                    px-4
                                                    py-2
                                                    text-sm
                                                    font-semibold
                                                    text-gray-500
                                                    backdrop-blur-xl
                                                    dark:border-white/10
                                                    dark:bg-white/[0.03]
                                                    dark:text-gray-400
                                                "
                                            >
                                                Private Company Project
                                            </span>
                                        )}

                                        {project.source && (
                                            <Link
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={project.source}
                                                className="
                                                    text-sm
                                                    font-semibold
                                                    text-gray-800
                                                    underline
                                                    underline-offset-4
                                                    transition
                                                    hover:opacity-80
                                                    dark:text-white
                                                "
                                            >
                                                Source Code
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <p className="mt-6 text-gray-600 dark:text-gray-400">
                    No projects available.
                </p>
            )}
        </section>
    );
}
