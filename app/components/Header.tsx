"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "ホーム" },
  { href: "#services", label: "サービス" },
  { href: "#profile", label: "代表プロフィール" },
  { href: "#testimonials", label: "お客様の声" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-800 shadow-lg shadow-navy-900/30"
          : "bg-navy-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt="田中税理士事務所"
              width={36}
              height={36}
              className="rounded flex-shrink-0"
            />
            <div>
              <div className="text-white font-bold text-base leading-tight tracking-wide">
                田中税理士事務所
              </div>
              <div className="text-gold-400 text-xs tracking-widest">
                TANAKA TAX OFFICE
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-gold-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
            >
              無料相談
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/75 hover:text-gold-400 px-2 py-2.5 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-5 py-3 rounded text-center transition-colors"
              >
                無料相談
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
