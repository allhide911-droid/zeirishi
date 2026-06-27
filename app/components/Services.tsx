import Image from "next/image";

const services = [
  {
    title: "確定申告・節税のご相談",
    description:
      "個人・フリーランスの確定申告を丁寧にサポート。各種控除の適用や節税対策のご提案も行います。",
  },
  {
    title: "法人税務・決算のご相談",
    description:
      "法人税・消費税の申告から決算書作成、税務戦略の立案まで。中小企業から上場企業まで幅広く対応します。",
  },
  {
    title: "記帳代行・経理のご相談",
    description:
      "日々の経理処理から月次・年次決算書の作成まで。正確な会計データで経営判断をしっかりサポートします。",
  },
  {
    title: "相続税・贈与税のご相談",
    description:
      "相続税の申告・試算から遺産分割のアドバイスまで。大切な財産の引き継ぎを専門家が全力でサポートします。",
  },
  {
    title: "税務調査の立会い・対応",
    description:
      "税務署からの調査に際して、事前準備から当日の立会い・交渉まで経験豊富な税理士が全力でサポートします。",
  },
  {
    title: "資金繰り・経営のお悩み相談",
    description:
      "税務・会計の視点から財務分析、資金繰り改善、経営戦略の立案をご提案。数字で裏付けられた経営をサポートします。",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-600 text-xs font-medium tracking-[0.2em] uppercase">
              Services
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            サービス一覧
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            幅広い税務・会計サービスで、お客様のビジネスと生活をしっかりとサポートします。
          </p>
        </div>
      </div>

      {/* Services banner — intrinsic ratio */}
      <div className="w-full mb-10">
        <Image
          src="/images/services-banner.jpg"
          alt="サービスイメージ"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 border border-gray-100 rounded-lg hover:border-gold-300 hover:shadow-lg hover:shadow-navy-800/5 transition-all duration-300"
            >
              <div className="h-1 bg-gold-500 -mx-8 -mt-8 mb-6 rounded-t-lg" />
              <h3 className="text-base font-bold text-navy-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-navy-700 hover:text-gold-600 text-sm font-medium transition-colors"
          >
            サービスについてご相談はこちら
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
