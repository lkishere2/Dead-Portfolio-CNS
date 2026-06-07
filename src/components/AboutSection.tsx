import avatar from '../assets/image.jpg'

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen bg-white flex items-center px-8 py-24"
        >
            <div className="mx-auto max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* avatar */}
                <div className="flex justify-center">
                    <img
                        src={avatar}
                        alt="Vũ Long Khánh"
                        className="w-64 h-64 rounded-2xl object-cover shadow-xl ring-4 ring-blue-100"
                    />
                </div>

                {/* text */}
                <div>
                    <p className="text-blue-500 text-[11px] tracking-[3px] uppercase font-semibold mb-3">
                        About
                    </p>
                    <h2 className="font-lora text-4xl font-semibold text-blue-950 leading-tight mb-6">
                        Vũ Long Khánh
                    </h2>

                    <div className="space-y-3 text-sm text-slate-500 leading-relaxed mb-8">
                        <p>Sinh viên ngành <strong className="text-blue-900">Công nghệ thông tin</strong>, lớp IT5, Trường Đại học Công nghệ — Đại học Quốc gia Hà Nội.</p>
                        <p>Portfolio này ghi lại hành trình 7 tuần học môn <strong className="text-blue-900">Công Nghệ Số &amp; Ứng Dụng AI</strong> — từ thao tác tệp tin cơ bản đến việc dùng AI phân tích cấu trúc protein trong nghiên cứu khoa học.</p>
                        <p>Mục tiêu không chỉ là hoàn thành bài tập, mà là thực sự hiểu cách AI thay đổi cách chúng ta làm việc, học tập và sáng tạo.</p>
                    </div>

                    {/* info chips */}
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { label: 'MSSV', value: '25020223' },
                            { label: 'Lớp', value: 'IT5' },
                            { label: 'Trường', value: 'UET — VNU' },
                            { label: 'Năm học', value: '2025–2026' },
                        ].map((item) => (
                            <div key={item.label} className="bg-blue-50 rounded-xl px-4 py-3">
                                <p className="text-[10px] tracking-[2px] uppercase text-blue-400 mb-1">{item.label}</p>
                                <p className="text-sm font-semibold text-blue-900">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}