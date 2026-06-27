"use client";

import { useState } from "react";

const faqs = [
  {
    question: "初回相談は本当に無料ですか？",
    answer:
      "はい、初回60分は完全無料です。費用が発生するのはご依頼いただいてからとなります。無理な営業は一切行いませんので、お気軽にご相談ください。",
  },
  {
    question: "オンライン相談は可能ですか？",
    answer:
      "Zoom・Google Meet等を使ったオンライン相談に対応しています。全国どこからでもご相談いただけます。遠方の方や外出が難しい方もご安心ください。",
  },
  {
    question: "初回相談で契約になりますか？",
    answer:
      "なりません。相談だけで終わっても大丈夫です。その場でご提案することはありますが、契約を急かすことは一切いたしません。",
  },
  {
    question: "今の税理士から変更を検討中でも相談できますか？",
    answer:
      "もちろん可能です。変更のメリット・デメリットも含めて正直にお伝えします。まずはお気軽にご状況をお聞かせください。",
  },
  {
    question: "顧問料の目安はどのくらいですか？",
    answer:
      "事業規模・内容により異なります。初回相談時に内容を確認した上で明確なお見積りをご提示します。追加費用が発生する場合も事前にご説明しますのでご安心ください。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-600 text-xs font-medium tracking-[0.2em] uppercase">
              FAQ
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            よくあるご質問
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            ご相談前によく寄せられるご質問をまとめました。
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-navy-800 font-medium text-sm pr-4">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="pt-1 border-t border-gray-100">
                    <p className="text-gray-500 text-sm leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
