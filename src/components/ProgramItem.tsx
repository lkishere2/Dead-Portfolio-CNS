import { useState } from 'react'

interface ProgramItemProps {
    week: string
    title: string
    description: string
    file: string
    type: 'pdf' | 'docx'
}

export default function ProgramItem({
    week,
    title,
    description,
    file,
    type,
}: ProgramItemProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="flex flex-col items-center group">
                {/* dot */}
                <div
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0
                     shadow-md shadow-blue-200 ring-4 ring-blue-50 cursor-pointer
                     group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-200 z-10"
                    onClick={() => setOpen(true)}
                >
                    <span className="text-white text-xs font-semibold">{week}</span>
                </div>

                {/* card */}
                <div
                    className="mt-6 bg-white rounded-2xl border border-blue-100 p-4 shadow-sm w-full cursor-pointer
                     group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-200"
                    onClick={() => setOpen(true)}
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] tracking-[2px] uppercase text-blue-400 font-semibold">
                            Tuần {week}
                        </span>
                        <span className="text-[10px] bg-blue-50 text-blue-400 border border-blue-100 rounded-full px-2 py-0.5 font-mono">
                            .{type}
                        </span>
                    </div>
                    <h3 className="font-lora text-sm font-semibold text-blue-950 leading-snug mb-2">
                        {title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-3">
                        {description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-500">
                        Xem báo cáo
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* modal */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/60 backdrop-blur-sm p-6"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col overflow-hidden"
                        style={{ height: '85vh' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* modal header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white flex-shrink-0">
                            <div>
                                <p className="text-[10px] tracking-[2px] uppercase text-blue-200 mb-0.5">Tuần {week}</p>
                                <p className="font-lora font-semibold text-base">{title}</p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors text-white text-lg leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* modal body */}
                        <div className="flex-1 overflow-hidden">
                            {type === 'pdf' ? (
                                <iframe
                                    src={file}
                                    className="w-full h-full border-0"
                                    title={title}
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-400">
                                    <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p className="text-sm">File Word không xem trực tiếp được.</p>
                                    <a
                                        href={file}
                                        download
                                        className="px-5 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
                                    >
                                        Tải xuống .docx
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}