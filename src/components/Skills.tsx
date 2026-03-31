"use client";
import { useEffect, useRef } from "react";

type SkillGroup = { label: string; skills: { name: string; core?: boolean }[] };

const groups: SkillGroup[] = [
    {
        label: "Languages",
        skills: [
            { name: "Java", core: true }, { name: "JavaScript", core: true },
            { name: "TypeScript", core: true }, { name: "HTML5" }, { name: "CSS3" },
        ],
    },
    {
        label: "Frontend",
        skills: [
            { name: "React.js", core: true }, { name: "Next.js" }, { name: "Tailwind CSS" },
        ],
    },
    {
        label: "Backend & Database",
        skills: [
            { name: "Node.js", core: true }, { name: "Express.js", core: true },
            { name: "MongoDB", core: true }, { name: "REST APIs" },
        ],
    },
    {
        label: "Security & Auth",
        skills: [
            { name: "JWT", core: true }, { name: "OAuth2", core: true }, { name: "RBAC" },
        ],
    },
    {
        label: "CS Fundamentals",
        skills: [
            { name: "DSA", core: true }, { name: "OOP" }, { name: "DBMS" },
            { name: "Operating Systems" }, { name: "Computer Networks" },
        ],
    },
    {
        label: "Tools & Platforms",
        skills: [
            { name: "Git", core: true }, { name: "GitHub", core: true },
            { name: "VS Code" }, { name: "Vercel" }, { name: "Render" },
        ],
    },
];

export default function Skills() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
            { threshold: 0.08 }
        );
        ref.current?.querySelectorAll(".reveal,.reveal-l").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="skills"
            ref={ref}
            className="px-4 sm:px-8 md:px-16 py-16 md:py-28 bg-ink2 border-t border-b border-border"
        >
            <div className="max-w-[1240px] mx-auto">
                <div className="font-mono text-lime text-[0.65rem] tracking-[0.22em] uppercase flex items-center gap-3 mb-4">
                    <span className="block w-5 h-px bg-lime" /> Tech Stack
                </div>
                <div className="h-px bg-gradient-to-r from-lime to-transparent opacity-25 mb-10 md:mb-16" />

                {/* Stack on mobile, side-by-side on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-16 lg:gap-20 items-start">
                    <div className="reveal-l">
                        <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] font-black leading-[1.05] tracking-[-2px]">
                            Skills &amp; <br /><em className="text-lime">Tools.</em>
                        </h2>
                        <p className="text-gray2 text-sm leading-loose font-light mt-4">
                            A curated stack I&apos;ve actually used to build and deploy real projects
                            — not just read about.
                        </p>
                    </div>

                    <div className="reveal d1 space-y-6 md:space-y-8">
                        {groups.map((g) => (
                            <div key={g.label}>
                                <div className="font-mono text-[0.62rem] text-gray uppercase tracking-[0.18em] mb-3 flex items-center gap-2">
                                    <span className="block w-2.5 h-px bg-gray" />
                                    {g.label}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {g.skills.map((s) => (
                                        <span
                                            key={s.name}
                                            className={`font-mono text-[0.7rem] px-3 py-1.5 border tracking-wide transition-all duration-250 cursor-default ${
                                                s.core
                                                    ? "border-lime/35 text-lime bg-lime/8 hover:shadow-[0_0_14px_rgba(200,241,53,0.3)]"
                                                    : "border-border2 text-gray2 hover:border-purple hover:text-purple hover:bg-purple/8 hover:-translate-y-0.5"
                                            }`}
                                        >
                                            {s.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}