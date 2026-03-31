export default function Footer() {
    return (
        <footer className="px-4 sm:px-8 md:px-16 py-5 md:py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="font-mono text-[0.62rem] text-gray tracking-widest text-center sm:text-left">
                © 2026 <span className="text-lime">Rahul Rathod</span> · Designed &amp; built by hand
            </div>
            <div className="font-mono text-[0.62rem] text-gray flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-lime animate-blink" />
                Open to work · Hyderabad, India
            </div>
        </footer>
    );
}