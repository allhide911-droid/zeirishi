import Image from "next/image";

const quickLinks = [
  { href: "#home", label: "ホーム" },
  { href: "#services", label: "サービス一覧" },
  { href: "#profile", label: "代表プロフィール" },
  { href: "#contact", label: "お問い合わせ" },
];

const serviceLinks = [
  { href: "#services", label: "確定申告・所得税" },
  { href: "#services", label: "法人税務" },
  { href: "#services", label: "記帳代行・会計" },
  { href: "#services", label: "相続税・贈与税" },
  { href: "#services", label: "税務調査対応" },
  { href: "#services", label: "経営コンサルティング" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-mark.png"
                alt="田中税理士事務所"
                width={36}
                height={36}
                className="rounded flex-shrink-0"
              />
              <div>
                <div className="font-bold text-sm leading-tight">
                  田中税理士事務所
                </div>
                <div className="text-gold-400 text-xs tracking-widest">
                  TANAKA TAX OFFICE
                </div>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              信頼と実績で、お客様の財務を守ります。
              個人・法人を問わず、丁寧な税務サービスをご提供します。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Menu
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-gold-400 text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-gold-400 text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-xs text-white/40 leading-relaxed">
              <p>〒100-0001<br />東京都千代田区千代田1丁目</p>
              <p>TEL: 03-1234-5678</p>
              <p>info@tanaka-tax.jp</p>
              <p>平日 9:00〜18:00<br />土曜 10:00〜15:00（要予約）</p>
            </address>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} 田中税理士事務所 All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/25 hover:text-white/50 text-xs transition-colors"
            >
              プライバシーポリシー
            </a>
            <a
              href="#"
              className="text-white/25 hover:text-white/50 text-xs transition-colors"
            >
              免責事項
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
