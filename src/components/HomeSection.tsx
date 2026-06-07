import avatar from '../assets/image.jpg'

export default function HomeSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600
                 overflow-hidden px-8"
        >
            {/* decorative rings */}
            <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full border border-white/5" />

            {/* eyebrow */}
            <p className="text-white/50 text-[11px] tracking-[4px] uppercase mb-6 text-center">
                Báo cáo cuối kì &nbsp;·&nbsp; UET-VNU &nbsp;·&nbsp; 2025-2026
            </p>

            {/* main title */}
            <h1 className="font-lora text-center leading-none mb-2 select-none">
                <span className="block text-white text-[clamp(72px,12vw,160px)] font-semibold tracking-tight">
                    PORTFOLIO
                </span>
                <span className="block text-blue-300/90 italic text-[clamp(56px,9vw,120px)] font-semibold">
                    CNS&amp;AI
                </span>
            </h1>

            {/* avatar + name row */}
            <div className="mt-10 flex flex-col items-center gap-4">
                <img
                    src={avatar}
                    alt="Vũ Long Khánh"
                    className="w-20 h-20 rounded-full object-cover
                     ring-2 ring-white/20
                     shadow-[0_0_0_6px_rgba(59,130,246,0.18)]"
                />
                <p className="text-white/60 text-xs tracking-[3px] uppercase">
                    Vũ Long Khánh &nbsp;·&nbsp; MSSV 25020223
                </p>
            </div>

            {/* scroll hint */}
            <div className="absolute bottom-8 flex flex-col items-center gap-2 text-white/30">
                <span className="text-[10px] tracking-[2px] uppercase">Scroll</span>
                <div className="w-px h-8 bg-white/20" />
            </div>
        </section>
    )
}