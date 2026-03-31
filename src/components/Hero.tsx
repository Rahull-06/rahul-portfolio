"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
    { val: "2+", label: "Projects Deployed" },
    { val: "150+", label: "LeetCode Solved" },
    { val: "14+", label: "Technologies" },
    { val: "6.90", label: "CGPA / 10.0" },
];

const marqueeItems = [
    "React.js", "Node.js", "MongoDB", "Java", "TypeScript",
    "JWT · OAuth2", "REST APIs", "DSA · 150+ Problems",
    "Next.js", "Tailwind CSS", "Git · GitHub", "Vercel · Render",
];

export default function Hero() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        let mx = 0, my = 0, rx = 0, ry = 0;
        const onMove = (e: MouseEvent) => {
            mx = e.clientX; my = e.clientY;
            if (cursorRef.current) {
                cursorRef.current.style.left = mx + "px";
                cursorRef.current.style.top = my + "px";
            }
        };
        document.addEventListener("mousemove", onMove);
        const animate = () => {
            rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
            if (ringRef.current) {
                ringRef.current.style.left = rx + "px";
                ringRef.current.style.top = ry + "px";
            }
            requestAnimationFrame(animate);
        };
        animate();
        return () => document.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <>
            {/* Custom cursor — hidden on touch */}
            <div
                ref={cursorRef}
                className="hidden md:block fixed w-2 h-2 bg-lime rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(200,241,53,0.5)] mix-blend-difference"
            />
            <div
                ref={ringRef}
                className="hidden md:block fixed w-8 h-8 border border-lime/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Hero — stacks on mobile, 2-col on desktop */}
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
                {/* LEFT */}
                <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 pt-28 md:pt-36 pb-12 md:pb-16 relative z-10">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-6 md:mb-8 animate-fadeUp" style={{ animationDelay: "0.1s" }}>
                        <div className="w-7 h-px bg-lime" />
                        <span className="font-mono text-lime text-[0.68rem] tracking-[0.18em] uppercase">
                            Portfolio · 2026
                        </span>
                    </div>

                    {/* Name */}
                    <h1
                        className="font-serif text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-black leading-[0.92] tracking-[-2px] md:tracking-[-4px] animate-fadeUp"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Rahul
                        <em className="block text-lime not-italic">Rathod.</em>
                    </h1>

                    {/* Tagline */}
                    <p
                        className="font-serif text-lg md:text-2xl font-bold mt-5 mb-2 leading-tight animate-fadeUp"
                        style={{ animationDelay: "0.32s" }}
                    >
                        Building Scalable Systems,{" "}
                        <span className="text-lime italic">Not Just Apps.</span>
                    </p>

                    {/* Role */}
                    <div
                        className="flex items-center gap-3 mb-5 animate-fadeUp"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="w-2 h-2 bg-orange rounded-full animate-blink flex-shrink-0" />
                        <span className="font-mono text-gray2 text-[0.65rem] md:text-xs tracking-widest">
                            Full Stack Developer &nbsp;|&nbsp; Java &nbsp;•&nbsp; DSA &nbsp;•&nbsp; MERN
                        </span>
                    </div>

                    {/* Desc */}
                    <p
                        className="text-gray2 text-sm leading-loose max-w-md mb-8 md:mb-10 font-light animate-fadeUp"
                        style={{ animationDelay: "0.48s" }}
                    >
                        I build{" "}
                        <strong className="text-white font-medium">production-ready applications</strong>{" "}
                        with real-world impact — from AI-powered platforms to real-time security systems.
                        Clean code. Scalable architecture. Shipped.
                    </p>

                    {/* CTA */}
                    <div
                        className="flex gap-3 flex-wrap animate-fadeUp"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <a
                            href="#projects"
                            className="font-mono text-xs tracking-widest uppercase px-6 md:px-8 py-3 bg-lime text-ink font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(200,241,53,0.4)]"
                        >
                            View Projects →
                        </a>
                        <a
                            href="#contact"
                            className="font-mono text-xs tracking-widest uppercase px-6 md:px-8 py-3 border border-border2 text-gray2 transition-all duration-300 hover:border-purple hover:text-purple hover:scale-[1.03]"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>
                </div>

                {/* RIGHT — photo: below text on mobile, side-by-side on desktop */}
                <div className="relative h-64 sm:h-80 md:h-auto overflow-hidden">
                    <Image
                        src="/rahul_formal.jpg"
                        alt="Rahul Rathod"
                        fill
                        className="object-cover object-top grayscale-[10%] contrast-[1.05]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                    {/* Corner accents — only on md+ */}
                    <div className="hidden md:block absolute top-10 left-10 right-10 bottom-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-lime" />
                        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-lime" />
                        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-lime" />
                        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-lime" />
                    </div>
                </div>
            </div>

            {/* Stats bar — 2-col on mobile, 4-col on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="px-5 md:px-8 py-4 md:py-5 border-r border-b md:border-b-0 border-border last:border-r-0 even:border-r-0 md:even:border-r md:last:border-r-0 bg-ink/90 backdrop-blur-md hover:bg-ink2 transition-colors duration-300"
                    >
                        <span className="font-serif text-[1.6rem] md:text-[2rem] font-black text-lime leading-none block">
                            {s.val}
                        </span>
                        <span className="font-mono text-[0.55rem] md:text-[0.58rem] text-gray uppercase tracking-widest mt-1 block">
                            {s.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Marquee */}
            <div className="border-t border-b border-border overflow-hidden py-3 bg-ink2">
                <div className="flex animate-marquee w-max">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <div
                            key={i}
                            className="font-mono text-[0.65rem] text-gray uppercase tracking-[0.15em] whitespace-nowrap px-10 flex items-center gap-5 after:content-['◆'] after:text-lime after:text-[0.4rem]"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}