const testimonials = [
  {
    comment:
      "確定申告の時期になると毎年不安でしたが、田中先生に依頼してから本当に楽になりました。節税対策まで丁寧に提案していただき、昨年より大幅に税負担が軽くなりました。",
    name: "山田 健一",
    role: "フリーランスデザイナー",
  },
  {
    comment:
      "法人設立のタイミングからご相談しています。税務だけでなく資金繰りや経営全般のアドバイスもいただけるので、頼れるパートナーとして欠かせない存在です。",
    name: "鈴木 美咲",
    role: "株式会社サクラ 代表取締役",
  },
  {
    comment:
      "相続の手続きで途方に暮れていたところ、知人に紹介してもらいました。複雑な案件でしたが、最後まで丁寧に対応していただき、家族一同とても感謝しています。",
    name: "佐藤 正雄",
    role: "会社員（相続手続きご依頼）",
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 text-gold-500"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.449 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-600 text-xs font-medium tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            お客様の声
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            ご依頼いただいたお客様より、温かいお言葉をいただいています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg border border-gray-100 p-8 shadow-sm flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-8">
                「{t.comment}」
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 text-sm font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-navy-800 font-bold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
