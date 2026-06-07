const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Conclusion', href: '#conclusion' },
]

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5
                       bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600">
            <span className="text-white/70 text-xs tracking-[3px] uppercase font-light">
                CNS&AI — 2026
            </span>
            <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-white/70 text-xs tracking-[2px] uppercase font-light
                       hover:text-white transition-colors duration-200"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}