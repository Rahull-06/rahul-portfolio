import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{ts,tsx}",
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: "#080810",
                ink2: "#0f0f1a",
                card: "#13131f",
                border: "#1e1e2e",
                border2: "#2a2a3d",
                lime: "#C8F135",
                orange: "#FF6B35",
                purple: "#8B5CF6",
                gray: "#5a5a72",
                gray2: "#8E8EA0",
            },
            fontFamily: {
                serif: ["Playfair Display", "Georgia", "serif"],
                sans: ["Epilogue", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                fadeUp: "fadeUp 0.7s ease forwards",
                marquee: "marquee 28s linear infinite",
                blink: "blink 1.4s ease-in-out infinite",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(22px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.2" },
                },
            },
        },
    },
    plugins: [],
};

export default config;