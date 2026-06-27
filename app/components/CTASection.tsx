import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-40 overflow-hidden">
      <Image
        src="/images/services-banner.jpg"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center 20%" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(15, 23, 51, 0.65)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gold-500" />
          <span className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">
            Free Consultation
          </span>
          <div className="h-px w-12 bg-gold-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          まずはお気軽に
          <br />
          <span className="text-gold-400">ご相談ください</span>
        </h2>
        <p className="text-gold-400 text-sm mb-6">小さなお悩みでも大丈夫です</p>
        <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
          初回相談は60分間無料です。税務・会計に関するお悩みを、
          経験豊富な税理士が丁寧にお聞きします。
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-white font-semibold px-10 py-4 rounded transition-all duration-200 text-sm"
        >
          まずはお気軽にご相談ください
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 ml-2 flex-shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <p className="mt-5 text-white/50 text-xs">
          オンライン相談対応 ／ 初回60分無料 ／ 無理な営業一切なし
        </p>
      </div>
    </section>
  );
}
