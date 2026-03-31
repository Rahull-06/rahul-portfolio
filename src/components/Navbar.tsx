"use client";
import { useEffect, useState } from "react";

const links = ["about", "skills", "projects", "pow", "contact"];

export default function Navbar() {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = document.querySelectorAll("section[id]");
            let cur = "";
            sections.forEach((s) => {
                if (window.scrollY >= (s as HTMLElement).offsetTop - 130) cur = s.id;
            });
            setActive(cur);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-ink/80 border-b border-border" : ""
                }`}
        >
            <ProgressBar />

            <span className="font-mono text-lime text-xs tracking-widest uppercase">
        // rr.dev
            </span>

            <ul className="flex gap-10 list-none">
                {links.map((id) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className={`font-mono text-[0.68rem] tracking-widest uppercase transition-colors duration-300 relative pb-1 group ${active === id ? "text-lime" : "text-gray2 hover:text-lime"
                                }`}
                        >
                            {id === "pow" ? "Proof" : id.charAt(0).toUpperCase() + id.slice(1)}
                            <span
                                className={`absolute bottom-0 left-0 h-px bg-lime transition-all duration-300 ${active === id ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </a>
                    </li>
                ))}
            </ul>

            <a
                href="/Rahul_Rathod_Resume.pdf"
                download
                className="font-mono text-[0.68rem] tracking-widest uppercase px-4 py-2 border border-lime text-lime transition-all duration-300 hover:bg-lime hover:text-ink hover:scale-105 hover:shadow-[0_0_18px_rgba(200,241,53,0.4)]"
            >
                View Resume →
            </a>
        </nav>
    );
}

function ProgressBar() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement;
            setWidth((window.scrollY / (h.scrollHeight - h.clientHeight)) * 100);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div
            className="fixed top-0 left-0 h-[2px] bg-lime z-[999] shadow-[0_0_8px_rgba(200,241,53,0.5)] transition-[width] duration-100"
            style={{ width: `${width}%` }}
        />
    );
}