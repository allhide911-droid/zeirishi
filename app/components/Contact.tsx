"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const officeInfo = [
  {
    label: "住所",
    value: "〒100-0001\n東京都千代田区千代田1丁目",
    iconPath:
      "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    label: "電話番号",
    value: "03-1234-5678",
    iconPath:
      "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "メールアドレス",
    value: "info@tanaka-tax.jp",
    iconPath:
      "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    label: "営業時間",
    value: "平日 9:00〜18:00\n土曜 10:00〜15:00（要予約）",
    iconPath:
      "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const subjectOptions = [
  "確定申告・所得税",
  "法人税務",
  "記帳代行・会計",
  "相続税・贈与税",
  "税務調査対応",
  "経営コンサルティング",
  "その他",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded border border-gray-200 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/10 text-sm text-gray-700 transition placeholder:text-gray-300";

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-600 text-xs font-medium tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            税務に関するご質問・ご相談はお気軽にお問い合わせください。
            <br />
            初回相談は無料です。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Office info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-navy-800 font-bold text-base mb-6">
              事務所情報
            </h3>
            {officeInfo.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            ))}

            <div className="mt-8 p-5 bg-navy-800 rounded-lg">
              <p className="text-gold-400 text-xs font-medium tracking-wide mb-2">
                初回無料相談
              </p>
              <p className="text-white text-sm leading-relaxed">
                初回60分無料です。まずはお気軽にご相談ください。
              </p>
            </div>

            <div className="mt-4 rounded-lg overflow-hidden border border-gold-500/20">
              <iframe
                src="https://www.google.com/maps?q=東京都千代田区千代田1丁目&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="事務所地図"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 bg-white rounded-lg border border-gray-100 shadow-sm h-full">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  送信完了しました
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  お問い合わせありがとうございます。
                  <br />
                  2営業日以内にご連絡いたします。
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="mt-8 text-navy-700 text-sm hover:text-gold-600 underline transition-colors"
                >
                  別のお問い合わせをする
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg border border-gray-100 shadow-sm p-8 space-y-5"
              >
                <div className="bg-gray-50 rounded p-4 space-y-1.5">
                  {[
                    "通常1営業日以内にご返信いたします",
                    "無理な営業は一切行いません",
                    "ご相談内容は秘密厳守いたします",
                  ].map((text) => (
                    <p key={text} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="text-gold-500">✓</span>{text}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      お名前{" "}
                      <span className="text-red-400 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="田中 太郎"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03-0000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    メールアドレス{" "}
                    <span className="text-red-400 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="taro@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    お問い合わせ種別
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">選択してください</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    お問い合わせ内容{" "}
                    <span className="text-red-400 ml-0.5">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="ご質問・ご相談の内容をご記入ください"
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold py-4 rounded transition-colors duration-200 text-sm"
                >
                  送信する
                </button>

                <p className="text-xs text-gray-400 text-center">
                  送信後、2営業日以内にご返信いたします。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
