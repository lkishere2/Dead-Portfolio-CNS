import React from 'react'

interface CardProps {
    label: string
    title: string
    children: React.ReactNode
}

function ConclusionCard({ label, title, children }: CardProps) {
    return (
        <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm
                    hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
            <p className="text-[10px] tracking-[2px] uppercase text-blue-400 font-semibold mb-1">{label}</p>
            <h3 className="font-lora text-base font-semibold text-blue-950 mb-3">{title}</h3>
            <div className="text-xs text-slate-500 leading-relaxed space-y-2 flex-1">{children}</div>
        </div>
    )
}

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block bg-blue-50 text-blue-600 text-[11px] font-medium
                     rounded-full px-3 py-1 border border-blue-100 mr-1.5 mb-1.5">
            {children}
        </span>
    )
}

export default function ConclusionSection() {
    return (
        <section id="conclusion" className="bg-white px-8 py-20">
            <div className="mx-auto max-w-6xl">

                {/* heading */}
                <p className="text-blue-500 text-[11px] tracking-[3px] uppercase font-semibold mb-2">
                    Conclusion
                </p>
                <h2 className="font-lora text-4xl font-semibold text-blue-950 leading-tight mb-3">
                    Nhìn lại hành trình
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-12 max-w-xl">
                    Tổng kết những gì đã học được, những khoảnh khắc đáng nhớ và bài học rút ra sau 7 tuần.
                </p>

                {/* horizontal grid — 5 cards */}
                <div className="grid grid-cols-5 gap-4">

                    <ConclusionCard label="I" title="Mục tiêu">
                        <p>Hệ thống hóa hành trình học tập và chứng minh năng lực thực tế qua từng bài thực hành.</p>
                        <div className="mt-2">
                            <Tag>📁 Tệp tin</Tag>
                            <Tag>🔍 Học thuật</Tag>
                            <Tag>✍️ Prompt</Tag>
                            <Tag>🎨 Sáng tạo</Tag>
                            <Tag>⚖️ Đạo đức</Tag>
                            <Tag>🔬 Nghiên cứu</Tag>
                        </div>
                    </ConclusionCard>

                    <ConclusionCard label="II" title="Trải nghiệm">
                        <p>Dự án "Green Thread" là khoảnh khắc đáng nhớ nhất — lần đầu phối hợp Gemini, Midjourney và Canva trong một luồng hoàn chỉnh.</p>
                        <p>Tuần 7, khi AlphaFold hiện cấu trúc 3D của p53, mới thực sự thấy AI không chỉ là chatbot.</p>
                    </ConclusionCard>

                    <ConclusionCard label="III" title="Kỹ năng">
                        <p className="text-blue-600 font-semibold mb-1">Công cụ</p>
                        <Tag>Gemini</Tag><Tag>Midjourney</Tag><Tag>Canva AI</Tag>
                        <Tag>Consensus</Tag><Tag>AlphaFold</Tag><Tag>PDB</Tag>
                        <p className="text-blue-600 font-semibold mt-2 mb-1">Tư duy</p>
                        <Tag>Boolean Search</Tag><Tag>Kiểm chứng AI</Tag>
                        <Tag>Trích dẫn</Tag><Tag>Phản biện</Tag>
                    </ConclusionCard>

                    <ConclusionCard label="IV" title="Tâm đắc">
                        <blockquote className="border-l-2 border-blue-300 pl-3 italic text-blue-800 text-[11px] mb-3">
                            "AI không thay thế con người, nhưng người biết dùng AI sẽ tối ưu hóa sức lao động vượt trội."
                        </blockquote>
                        <p>Quy trình <strong className="text-blue-700">3B</strong>: <strong>Biết</strong> giới hạn · <strong>Bàn</strong> để mở góc nhìn · <strong>Biên</strong> tập lại bằng tư duy cá nhân.</p>
                    </ConclusionCard>

                    <ConclusionCard label="V" title="Thách thức">
                        <ul className="space-y-2">
                            <li>⚠️ <strong className="text-slate-600">Hallucination</strong> — AI đưa số liệu sai rất thuyết phục.</li>
                            <li>🌐 <strong className="text-slate-600">Paywall</strong> — IEEE, ACM giới hạn truy cập.</li>
                            <li>⚖️ <strong className="text-slate-600">Đạo đức</strong> — ranh giới hỗ trợ hay gian lận?</li>
                            <li>🧬 <strong className="text-slate-600">Liên ngành</strong> — sinh học phân tử trong khi background là CNTT.</li>
                        </ul>
                    </ConclusionCard>

                </div>
            </div>
        </section>
    )
}