import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy-900 flex items-center overflow-hidden"
    >
      {/* Hero image — full width, behind all layers */}
      <div className="absolute inset-0">
        <Image
          src="/images/office-hero-v2.jpg"
          alt="税理士事務所オフィス"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,23,51,0.75) 0%, rgba(15,23,51,0.35) 100%)",
          }}
        />
      </div>

      {/* Diagonal grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #ffffff 0px,
            #ffffff 1px,
            transparent 1px,
            transparent 50px
          )`,
        }}
      />

      {/* Top gold border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />

      {/* Left gold gradient line */}
      <div
        className="absolute left-0 top-0 w-1 h-full"
        style={{
          background:
            "linear-gradient(to bottom, #c9a84c 0%, rgba(201,168,76,0.2) 60%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 pt-40 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">
              Trust &amp; Expertise
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            経営とお金の悩みを、
            <br />
            <span className="text-gold-400">安心して相談できる<br />税理士へ</span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            個人・法人を問わず、はじめての方もお気軽にどうぞ。
            <br className="hidden sm:block" />
            専門用語を使わず、わかりやすく丁寧にご対応します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-white font-semibold px-8 py-4 rounded transition-all duration-200 text-sm"
            >
              まずは無料相談する
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
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/25 hover:border-gold-400 text-white/80 hover:text-gold-400 font-semibold px-8 py-4 rounded transition-all duration-200 text-sm"
            >
              サービスを見る
            </a>
          </div>

          <div className="mt-4">
            <a
              href="#faq"
              className="text-gold-400 hover:text-gold-300 text-sm transition-colors"
            >
              オンライン相談も可能です →
            </a>
          </div>

          <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-white/10">
            {[
              { value: "15年+", label: "業界経験" },
              { value: "500社+", label: "顧問先数" },
              { value: "98%", label: "顧問継続率" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gold-400">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-gold-500/10 hidden lg:block"
        style={{ marginRight: "-240px" }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-gold-500/15 hidden lg:block"
        style={{ marginRight: "-80px" }}
      />
    </section>
  );
}
