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
              <div className="w-9 h-9 bg-gold-500 rounded flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
              </div>
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
              <p>〒100-0001<br />東京都千代田区千代田1-1-1<br />なかまちビル5F</p>
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
