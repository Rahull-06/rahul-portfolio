"use client";
import { useEffect, useRef } from "react";

const cards = [
    { icon: "🧠", val: "150+", label: "DSA Problems Solved", sub: "Arrays, Strings, Linked Lists, DP, Recursion, Bit Manipulation" },
    { icon: "📦", val: "10+", label: "GitHub Repositories", sub: "Projects, experiments, and open-source work" },
    { icon: "🚀", val: "2", label: "Production Projects", sub: "Fully deployed with live URLs on Vercel + Render" },
    { icon: "⚡", val: "5+", label: "Patterns Mastered", sub: "Two Pointers, Sliding Window, Prefix Sum, Binary Search, Kadane's" },
];

export default function ProofOfWork() {
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
        <section id="pow" ref={ref} className="px-16 py-28 bg-ink2 border-t border-b border-border">
            <div className="max-w-[1240px] mx-auto">
                <div className="font-mono text-lime text-[0.65rem] tracking-[0.22em] uppercase flex items-center gap-3 mb-4">
                    <span className="block w-5 h-px bg-lime" /> Proof of Work
                </div>
                <div className="h-px bg-gradient-to-r from-lime to-transparent opacity-25 mb-12" />

                <h2 className="font-serif text-[3.5rem] font-black leading-[1.05] tracking-[-2px] reveal mb-10">
                    Numbers Don&apos;t <br /><em className="text-lime">Lie.</em>
                </h2>

                <div className="grid grid-cols-4 gap-px border border-border bg-border reveal d1">
                    {cards.map((c) => (
                        <div
                            key={c.label}
                            className="bg-ink2 p-9 flex flex-col gap-2 transition-all duration-300 hover:bg-card hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                        >
                            <span className="text-2xl">{c.icon}</span>
                            <div className="font-serif text-[2.4rem] font-black text-lime leading-none">{c.val}</div>
                            <div className="font-mono text-[0.62rem] text-gray uppercase tracking-widest">{c.label}</div>
                            <div className="text-[0.73rem] text-gray2 leading-relaxed mt-1">{c.sub}</div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-3 justify-center mt-10 reveal d2 flex-wrap">
                    {[
                        { label: "↗ GitHub Profile", href: "https://github.com/Rahull-06", primary: true },
                        { label: "↗ LeetCode Profile", href: "https://leetcode.com/u/rahull-06/" },
                    ].map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-mono text-[0.68rem] px-6 py-3 border uppercase tracking-widest transition-all duration-300 hover:scale-[1.04] ${l.primary
                                    ? "border-lime/40 text-lime bg-lime/8 hover:bg-lime hover:text-ink hover:shadow-[0_0_16px_rgba(200,241,53,0.4)]"
                                    : "border-border2 text-gray2 hover:border-lime hover:text-lime"
                                }`}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}