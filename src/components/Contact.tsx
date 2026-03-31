"use client";
import { useEffect, useRef } from "react";

const contactLinks = [
    { icon: "✉", platform: "Email", value: "rahullrathod06@gmail.com", href: "mailto:rahullrathod06@gmail.com" },
    { icon: "GH", platform: "GitHub", value: "github.com/Rahull-06", href: "https://github.com/Rahull-06" },
    { icon: "in", platform: "LinkedIn", value: "linkedin.com/in/rahullrathod06", href: "https://www.linkedin.com/in/rahullrathod06" },
    { icon: "LC", platform: "LeetCode", value: "leetcode.com/rahull-06", href: "https://leetcode.com/u/rahull-06/" },
];

export default function Contact() {
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
        <section id="contact" ref={ref} className="px-16 py-28 border-t border-border">
            <div className="max-w-[1240px] mx-auto">
                <div className="font-mono text-lime text-[0.65rem] tracking-[0.22em] uppercase flex items-center gap-3 mb-4">
                    <span className="block w-5 h-px bg-lime" /> Contact
                </div>
                <div className="h-px bg-gradient-to-r from-lime to-transparent opacity-25 mb-16" />

                <div className="grid grid-cols-2 gap-24 items-start">
                    {/* Left */}
                    <div className="reveal-l">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-lime/35 bg-lime/8 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-lime animate-blink flex-shrink-0" />
                            <span className="font-mono text-lime text-[0.65rem] uppercase tracking-widest">
                                Currently open for SDE roles &amp; internships
                            </span>
                        </div>

                        <h2 className="font-serif text-[4rem] font-black leading-[1.0] tracking-[-2.5px] mb-6">
                            Let&apos;s Build
                            <br />
                            <em className="text-lime">Together.</em>
                        </h2>

                        <div className="font-mono text-[0.75rem] text-gray2 leading-loose border-l-2 border-lime px-5 py-3 bg-lime/8 mb-8">
                            &ldquo;Looking to contribute to scalable backend systems and
                            AI-driven applications. I bring strong fundamentals, shipped
                            projects, and the drive to solve hard problems.&rdquo;
                        </div>

                        {/* Currently Seeking */}
                        <div className="border border-border bg-ink2 p-6 mb-8 reveal d1">
                            <div className="font-mono text-[0.65rem] text-lime uppercase tracking-widest mb-4">
                                Currently Seeking
                            </div>
                            <ul className="space-y-2">
                                {[
                                    "Software Development Engineer (SDE) roles",
                                    "Backend / Full Stack opportunities",
                                    "Internships in scalable systems & AI",
                                ].map((item) => (
                                    <li key={item} className="text-sm text-gray2 font-light pl-5 relative">
                                        <span className="absolute left-0 text-lime">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-mono text-[0.72rem] text-white mt-4">
                                → <span className="text-lime">I&apos;m ready to contribute from Day 1.</span>
                            </p>
                        </div>

                        {/* ✅ FIXED: properly formed <a> tag */}
                        <a
                            href="mailto:rahullrathod06@gmail.com"
                            className="inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-widest px-9 py-3.5 bg-lime text-ink font-medium transition-all duration-300 hover:bg-orange hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,107,53,0.35)] reveal d2"
                        >
                            ✉ Drop a Message
                        </a>
                    </div>

                    {/* Right — contact links */}
                    {/* ✅ FIXED: properly formed <a> tags inside map */}
                    <div className="flex flex-col gap-px border border-border reveal d1">
                        {contactLinks.map((l) => (
                            <a
                                key={l.platform}
                                href={l.href}
                                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 px-6 py-5 border-b border-border last:border-b-0 text-white transition-all duration-300 hover:bg-ink2 hover:translate-x-1 group relative"
                            >
                                <div className="w-11 h-11 border border-border2 flex items-center justify-center font-mono text-gray2 text-sm flex-shrink-0 transition-all duration-300 group-hover:border-lime group-hover:text-lime">
                                    {l.icon}
                                </div>
                                <div>
                                    <div className="font-mono text-[0.58rem] text-gray uppercase tracking-widest mb-0.5">
                                        {l.platform}
                                    </div>
                                    <div className="text-sm font-medium">{l.value}</div>
                                </div>
                                <span className="absolute right-6 font-mono text-gray text-sm transition-all duration-300 group-hover:right-4 group-hover:text-lime">
                                    →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}