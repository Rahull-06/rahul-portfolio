"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const metrics = [
    { val: "150+", label: "DSA Problems", sub: "Arrays, DP, Graphs, Bit Manipulation" },
    { val: "2", label: "Live Projects", sub: "Deployed on Vercel & Render" },
    { val: "3+", label: "Years Coding", sub: "Java → Full Stack" },
    { val: "10+", label: "Repositories", sub: "Public on GitHub" },
];

export default function About() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
            { threshold: 0.08 }
        );
        ref.current
            ?.querySelectorAll(".reveal, .reveal-l")
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={ref} className="px-16 py-28">
            <div className="max-w-[1240px] mx-auto">
                <div className="font-mono text-lime text-[0.65rem] tracking-[0.22em] uppercase flex items-center gap-3 mb-4">
                    <span className="block w-5 h-px bg-lime" />
                    About
                </div>
                <div className="h-px bg-gradient-to-r from-lime to-transparent opacity-25 mb-16" />

                <div className="grid grid-cols-[380px_1fr] gap-20 items-start">
                    {/* Photo */}
                    <div className="reveal-l relative">
                        <div className="relative overflow-hidden">
                            <Image
                                src="/rahul_formal.jpg"
                                alt="Rahul Rathod"
                                width={380}
                                height={507}
                                className="w-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-ink/95 to-transparent flex justify-between items-end">
                                <span className="font-serif text-base font-bold">Rahul Rathod</span>
                                <span className="font-mono text-[0.6rem] text-gray tracking-widest">
                                    Hyderabad · 2026
                                </span>
                            </div>
                        </div>
                        <div className="absolute top-5 left-5 right-[-1.2rem] bottom-[-1.2rem] border border-border2 -z-10" />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="font-serif text-[3.5rem] font-black leading-[1.05] tracking-[-2px] reveal">
                            The Dev Behind
                            <br />
                            the <em className="text-lime">Code.</em>
                        </h2>
                        <p className="text-gray2 text-sm leading-[1.9] font-light mt-6 mb-8 reveal d1">
                            I&apos;m a{" "}
                            <strong className="text-white font-medium">
                                Computer Science Engineering student
                            </strong>{" "}
                            at St. Martin&apos;s Engineering College, Hyderabad — graduating 2026. My
                            foundation is{" "}
                            <strong className="text-white font-medium">Java + DSA</strong>, and I
                            build production-grade apps on the MERN stack.
                            <br />
                            <br />I don&apos;t just write code — I ship systems. From an AI-powered
                            job tracker with RBAC auth to a real-time web firewall scoring HTTP
                            threats, every project solves a real problem.
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-px border border-border reveal d2">
                            {metrics.map((m, i) => (
                                <div
                                    key={i}
                                    className="p-6 bg-ink2 border-r border-b border-border last:border-b-0 even:border-r-0 hover:bg-card transition-all duration-300 hover:scale-[1.01]"
                                >
                                    <span className="font-serif text-[2rem] font-black text-lime leading-none block">
                                        {m.val}
                                    </span>
                                    <span className="font-mono text-[0.6rem] text-gray uppercase tracking-widest mt-1 block">
                                        {m.label}
                                    </span>
                                    <span className="text-[0.73rem] text-gray2 mt-1 block">{m.sub}</span>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="mt-4 p-5 border border-border flex justify-between items-center gap-4 flex-wrap hover:border-lime transition-colors duration-300 reveal d3">
                            <div>
                                <div className="text-sm font-semibold text-white">
                                    B.Tech — Computer Science Engineering
                                </div>
                                <div className="font-mono text-[0.65rem] text-gray mt-1 tracking-wide">
                                    St. Martin&apos;s Engineering College, Hyderabad
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-serif text-xl font-black text-lime">6.90 / 10</div>
                                <span className="font-mono text-[0.6rem] text-gray block mt-0.5">
                                    2022 — 2026
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}