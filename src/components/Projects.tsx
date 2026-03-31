"use client";
import { useEffect, useRef } from "react";

type Project = {
    num: string;
    badges: { text: string; live?: boolean }[];
    title: string;
    desc: string;
    bullets: string[];
    impact: { val: string; label: string }[];
    chips: string[];
    links: { label: string; href: string; primary?: boolean }[];
};

const projects: Project[] = [
    {
        num: "01",
        badges: [{ text: "● Live", live: true }, { text: "MERN Stack" }, { text: "AI Insights" }],
        title: "AI-Powered Job Application Tracker",
        desc: "Full-stack MERN web app to track, manage, and optimize job searches — powered by AI insights and enterprise-grade auth.",
        bullets: [
            "Built full-stack MERN app with <strong>JWT + OAuth2</strong> authentication and RBAC-protected REST APIs",
            "Improved job tracking efficiency by <strong>~40%</strong> through optimized MongoDB schemas and API response handling",
            "Designed scalable role-based admin dashboard handling multiple user roles",
            "Integrated AI insight engine to surface patterns and improve job search strategy",
        ],
        impact: [
            { val: "~40%", label: "Efficiency gain" },
            { val: "RBAC", label: "Multi-role access" },
            { val: "AI", label: "Insight engine" },
        ],
        chips: ["React (Vite)", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "OAuth2", "Vercel", "Render"],
        links: [
            { label: "Live Demo", href: "https://job-tracker-project1.vercel.app/", primary: true },
            { label: "GitHub", href: "https://github.com/Rahull-06/Job-Tracker-Project" },
        ],
    },
    {
        num: "02",
        badges: [{ text: "Java" }, { text: "Security" }, { text: "Real-time" }],
        title: "SmartWAF — AI-Powered Web Application Firewall",
        desc: "A Java-based WAF detecting and blocking SQLi & XSS attacks in real time, with a live threat monitoring dashboard.",
        bullets: [
            "Developed real-time WAF detecting <strong>SQLi + XSS</strong> via rule-based HTTP request pattern analysis",
            "Implemented AI risk scoring engine <strong>(0–100)</strong> classifying requests as Safe, Suspicious, or High Risk",
            "Designed cybersecurity monitoring dashboard with live attack stats and attacker IP tracking",
            "Applied weighted scoring logic: SELECT +30, DROP +40, &lt;script&gt; +40, OR 1=1 +50",
        ],
        impact: [
            { val: "0–100", label: "Risk score/req" },
            { val: "Real-time", label: "SQLi + XSS detect" },
            { val: "Live", label: "Threat dashboard" },
        ],
        chips: ["Java", "HTML", "CSS", "JavaScript", "Chart.js"],
        links: [
            { label: "GitHub", href: "https://github.com/Rahull-06/smart-waf" },
        ],
    },
];

export default function Projects() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
            { threshold: 0.06 }
        );
        ref.current?.querySelectorAll(".reveal,.reveal-l").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={ref} className="px-4 sm:px-8 md:px-16 py-16 md:py-28">
            <div className="max-w-[1240px] mx-auto">
                <div className="font-mono text-lime text-[0.65rem] tracking-[0.22em] uppercase flex items-center gap-3 mb-4">
                    <span className="block w-5 h-px bg-lime" /> Projects
                </div>
                <div className="h-px bg-gradient-to-r from-lime to-transparent opacity-25 mb-10 md:mb-16" />

                <div className="flex justify-between items-end gap-6 flex-wrap mb-10 md:mb-14">
                    <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] font-black leading-[1.05] tracking-[-2px] reveal">
                        Things I&apos;ve <br /><em className="text-lime">Shipped.</em>
                    </h2>
                    <p className="text-gray2 text-sm max-w-[240px] leading-loose font-light reveal d1">
                        Two production projects. More in the pipeline.
                    </p>
                </div>

                <div className="flex flex-col gap-px border border-border">
                    {projects.map((p, i) => (
                        <ProjectRow key={p.num} project={p} delay={i * 0.1} />
                    ))}
                    {/* Coming soon */}
                    <div className="px-5 md:px-10 py-6 md:py-8 flex items-center gap-4 border-t border-dashed border-border2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange animate-blink flex-shrink-0" />
                        <span className="font-mono text-[0.66rem] text-gray uppercase tracking-widest">
                            Next project in progress — coming soon
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectRow({ project: p, delay }: { project: Project; delay: number }) {
    return (
        <div
            className="reveal border-b border-border last:border-b-0 transition-colors duration-300 hover:bg-ink2 relative group"
            style={{ transitionDelay: `${delay}s` }}
        >
            {/* Left accent bar on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-lime scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

            {/* Mobile layout: stacked */}
            <div className="flex flex-col md:grid md:grid-cols-[56px_1fr_160px] lg:grid-cols-[70px_1fr_180px]">

                {/* Number — hidden on mobile, shown on md+ */}
                <div className="hidden md:flex p-6 lg:p-8 pt-8 lg:pt-10 border-r border-border items-start justify-center">
                    <span className="font-serif text-base font-bold text-border2">{p.num}</span>
                </div>

                {/* Body */}
                <div className="p-5 md:p-6 lg:p-8">
                    {/* Mobile: show number inline with badges */}
                    <div className="flex items-center gap-3 mb-3 md:hidden">
                        <span className="font-serif text-sm font-bold text-border2">{p.num}</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="flex gap-2 mb-3 flex-wrap">
                        {p.badges.map((b) => (
                            <span
                                key={b.text}
                                className={`font-mono text-[0.58rem] px-2.5 py-0.5 border uppercase tracking-widest ${
                                    b.live
                                        ? "border-lime/45 text-lime bg-lime/8"
                                        : "border-border2 text-gray"
                                }`}
                            >
                                {b.text}
                            </span>
                        ))}
                    </div>

                    <h3 className="font-serif text-lg md:text-2xl font-bold text-white mb-3 leading-tight tracking-tight">
                        {p.title}
                    </h3>
                    <p className="text-gray2 text-sm leading-loose font-light mb-4 md:mb-5">{p.desc}</p>

                    <ul className="space-y-2 mb-5 md:mb-6">
                        {p.bullets.map((b, i) => (
                            <li key={i} className="text-[0.82rem] text-gray2 pl-5 relative leading-relaxed font-light">
                                <span className="absolute left-0 font-mono text-lime text-[0.7rem]">→</span>
                                <span dangerouslySetInnerHTML={{ __html: b.replace(/<strong>/g, '<strong class="text-white font-medium">') }} />
                            </li>
                        ))}
                    </ul>

                    {/* Impact */}
                    <div className="flex gap-0 pt-4 border-t border-border mb-4 md:mb-5 flex-wrap">
                        {p.impact.map((item) => (
                            <div key={item.label} className="flex-1 min-w-[90px] pr-3">
                                <span className="font-serif text-base md:text-lg font-bold text-orange block">{item.val}</span>
                                <span className="font-mono text-[0.55rem] text-gray uppercase tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4 md:mb-0">
                        {p.chips.map((c) => (
                            <span key={c} className="font-mono text-[0.62rem] px-2.5 py-1 bg-card border border-border2 text-gray2">
                                {c}
                            </span>
                        ))}
                    </div>

                    {/* Links on mobile — inline below chips */}
                    <div className="flex gap-2 flex-wrap mt-4 md:hidden">
                        {p.links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-1.5 font-mono text-[0.62rem] px-4 py-2 border uppercase tracking-widest transition-all duration-300 ${
                                    l.primary
                                        ? "border-lime text-lime hover:bg-lime hover:text-ink"
                                        : "border-border2 text-gray2 hover:border-lime hover:text-lime"
                                }`}
                            >
                                {l.primary ? "↗ " : ""}{l.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Actions — desktop only, right column */}
                <div className="hidden md:flex p-5 lg:p-6 border-l border-border flex-col justify-center gap-3">
                    {p.links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 font-mono text-[0.62rem] px-3 py-2.5 border uppercase tracking-widest transition-all duration-300 whitespace-nowrap hover:scale-[1.04] ${
                                l.primary
                                    ? "border-lime text-lime hover:bg-lime hover:text-ink hover:shadow-[0_0_16px_rgba(200,241,53,0.4)]"
                                    : "border-border2 text-gray2 hover:border-lime hover:text-lime"
                            }`}
                        >
                            {l.primary ? "↗ " : ""}
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}