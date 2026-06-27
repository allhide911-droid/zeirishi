const testimonials = [
  {
    comment:
      "資金繰りで悩んでいた時期に相談したのがきっかけです。専門用語なしで丁寧に説明していただき、今では経営の心強いパートナーです。",
    name: "山田 健太郎",
    role: "製造業 代表取締役",
    detail: "製造業 / 年商3億円 / 資金繰り改善",
  },
  {
    comment:
      "確定申告のたびにドキドキしていましたが、初回から安心感が全然違いました。節税対策も一緒に考えてくれて、毎年お願いしています。",
    name: "佐藤 美咲",
    role: "フリーランス",
    detail: "フリーランス / 個人事業主 / 確定申告・節税",
  },
  {
    comment:
      "親の相続で突然の相談でしたが、嫌な顔ひとつせず丁寧に対応いただきました。おかげで家族全員が納得できる形で解決できました。",
    name: "鈴木 誠",
    role: "IT企業 代表取締役",
    detail: "IT企業 / 年商1億円 / 相続税申告",
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
              <div className="pt-5 border-t border-gray-100">
                <div className="text-navy-800 font-bold text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                <div className="text-gray-400 text-xs mt-0.5">{t.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
