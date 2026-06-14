import Image from "next/image";

const credentials = [
  "税理士登録番号 第12345号",
  "日本税理士会連合会 会員",
  "中小企業診断士（登録番号 第67890号）",
  "慶應義塾大学 経済学部 卒業",
];

const career = [
  { year: "1999年", event: "慶應義塾大学経済学部 卒業" },
  { year: "1999年", event: "大手税理士法人 入社" },
  { year: "2005年", event: "税理士登録" },
  { year: "2010年", event: "田中税理士事務所 設立" },
];

export default function Profile() {
  return (
    <section id="profile" className="py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">
              Profile
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            代表プロフィール
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Photo column */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-60 h-72 bg-navy-700 rounded-lg overflow-hidden border border-gold-500/20 relative">
                <Image
                  src="/images/profile-tanaka.jpg"
                  alt="田中 一郎"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              {/* Offset border accent */}
              <div className="absolute -bottom-3 -right-3 w-60 h-72 border border-gold-500/15 rounded-lg pointer-events-none" />
            </div>
          </div>

          {/* Info column */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gold-400 text-xs tracking-widest mb-1 uppercase">
                代表税理士
              </p>
              <h3 className="text-3xl font-bold text-white mb-1">田中 一郎</h3>
              <p className="text-white/40 text-sm">Ichiro Tanaka</p>
            </div>

            <ul className="space-y-2.5 mb-8">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/65">{c}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/55 text-sm leading-relaxed mb-10">
              慶應義塾大学経済学部卒業後、大手税理士法人にて10年以上の実務経験を積む。
              2010年に田中税理士事務所を設立し、以来15年以上にわたって個人・法人のお客様を
              支援してきました。「お客様の傍に寄り添い、共に歩む」を信条に、税務だけでなく
              経営全般にわたるご相談にも誠実に対応しています。
            </p>

            {/* Career timeline */}
            <div className="mb-10">
              <h4 className="text-white/50 text-xs font-medium tracking-widest uppercase mb-5">
                Career
              </h4>
              <div className="space-y-3">
                {career.map((item) => (
                  <div key={item.event} className="flex gap-6 text-sm">
                    <span className="text-gold-400 font-medium w-16 flex-shrink-0">
                      {item.year}
                    </span>
                    <span className="text-white/55">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {[
                { value: "2010年", label: "事務所設立" },
                { value: "15年+", label: "業界経験" },
                { value: "500社+", label: "顧問先実績" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl font-bold text-gold-400">
                    {item.value}
                  </div>
                  <div className="text-white/35 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
