import ProgramItem from './ProgramItem'

const programs = [
    {
        week: '1',
        title: 'Thao tác tệp tin & Thư mục',
        description: 'Làm quen với hệ thống tệp tin Windows, các thao tác cơ bản như tạo, sao chép, di chuyển và xóa tệp.',
        file: '/programs/Week1.docx',
        type: 'docx' as const,
    },
    {
        week: '2',
        title: 'Tìm kiếm & Đánh giá thông tin học thuật',
        description: 'Khai thác IEEE Xplore, ACM Digital Library với Boolean Search. Đánh giá độ tin cậy nguồn tài liệu.',
        file: '/programs/Week2.pdf',
        type: 'pdf' as const,
    },
    {
        week: '3',
        title: 'Kỹ năng viết Prompt hiệu quả',
        description: 'So sánh prompt cơ bản và nâng cao, áp dụng kỹ thuật đóng vai và ngữ cảnh để tối ưu đầu ra LLM.',
        file: '/programs/Week3.docx',
        type: 'docx' as const,
    },
    {
        week: '5',
        title: 'Sáng tạo nội dung số với AI',
        description: 'Dự án "Green Thread" — Gemini viết storytelling, Midjourney tạo ảnh lookbook, Canva hoàn thiện infographic.',
        file: '/programs/Week5.pdf',
        type: 'pdf' as const,
    },
    {
        week: '6',
        title: 'AI có trách nhiệm & Đạo đức',
        description: 'Phân tích ranh giới hỗ trợ và gian lận, xây dựng 6 nguyên tắc cá nhân về sử dụng AI có trách nhiệm.',
        file: '/programs/Week6.pdf',
        type: 'pdf' as const,
    },
    {
        week: '7',
        title: 'AI trong nghiên cứu — Protein p53',
        description: 'Dùng Consensus tổng quan tài liệu, khám phá PDB và AlphaFold DB, phân tích chỉ số pLDDT.',
        file: '/programs/Week7.pdf',
        type: 'pdf' as const,
    },
]

export default function ProgramSection() {
    return (
        <section id="programs" className="bg-blue-50 px-8 py-20">
            <div className="mx-auto max-w-6xl w-full">

                {/* heading */}
                <p className="text-blue-500 text-[11px] tracking-[3px] uppercase font-semibold mb-2">
                    Programs
                </p>
                <h2 className="font-lora text-4xl font-semibold text-blue-950 leading-tight mb-3">
                    7 tuần học tập
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-12 max-w-xl">
                    Mỗi tuần là một chủ đề độc lập, kết nối thành hành trình từ kỹ năng số cơ bản đến ứng dụng AI trong nghiên cứu.
                </p>

                {/* horizontal timeline */}
                <div className="relative">
                    {/* line */}
                    <div className="absolute top-5 left-0 right-0 h-px bg-blue-200 z-0" />

                    {/* nodes */}
                    <div className="relative z-10 grid grid-cols-6 gap-4">
                        {programs.map((program) => (
                            <ProgramItem key={program.week} {...program} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}