'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  FiArrowUpRight,
  FiChevronDown,
  FiHeart,
  FiMail,
  FiMenu,
  FiPhone,
  FiShield,
  FiX
} from 'react-icons/fi'

const navItems = [
  ['About Us', '/about'],
  ['Our Focus', '/#focus'],
  ['Live Projects', '/programs'],
  ['Field Reels', '/#reels'],
  ['Stories of Hope', '/stories'],
  ['Get Involved', '/get-involved'],
  ['Contact', '/contact'],
]

export function SiteHeader({ onDonateClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top Announcement & Information Bar */}
      <div className="bg-[var(--brand-deep)] px-4 py-2 text-xs font-semibold text-white/90 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-0.5">
            <span className="flex items-center gap-1.5 text-[var(--brand-soft)]">
              <FiShield className="shrink-0" />
              <span>Registered Govt. Trust Foundation</span>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <a
              href="tel:+8801712345678"
              className="hidden sm:flex items-center gap-1.5 hover:text-[var(--brand-soft)] transition"
            >
              <FiPhone className="shrink-0" /> +880 1712 345 678
            </a>
            <span className="hidden md:inline text-white/30">•</span>
            <a
              href="mailto:hello@minoritysupport.org"
              className="hidden md:flex items-center gap-1.5 hover:text-[var(--brand-soft)] transition"
            >
              <FiMail className="shrink-0" /> hello@minoritysupport.org
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline text-xs text-white/70">
              bKash / Nagad Merchant:{' '}
              <strong className="text-[var(--brand-soft)]">01712-345678</strong>
            </span>
            <Link
              href="/#donate"
              onClick={onDonateClick}
              className="hidden items-center gap-1 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[11px] font-bold text-[var(--brand-deep)] hover:brightness-105 transition "
            >
              <FiHeart className="text-red-600 fill-red-600" /> Quick Donate
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <header className="premium-header sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group"
            aria-label="Minority Support Foundation home"
          >
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-md border-2 border-[var(--brand)] transition group-hover:scale-105">
              <img
                src="/minority-support-logo.png"
                alt="Minority Support Foundation logo"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold leading-snug tracking-tight text-[var(--brand-deep)] group-hover:text-[var(--brand)] transition">
                Minority Support
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-7 text-sm font-bold text-[var(--ink-muted)] lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                className="nav-link hover:text-[var(--brand-deep)]"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/#donate"
              onClick={onDonateClick}
              style={{ color: "white" }}
              className="premium-cta flex items-center gap-1.5 rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-white"
            >
              Donate Now <FiArrowUpRight />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-white text-xl text-[var(--brand-deep)] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav className="border-t border-[var(--line)] bg-white px-6 py-6 shadow-xl lg:hidden">
            <div className="flex flex-col gap-4 text-base font-bold text-[var(--brand-deep)]">
              {navItems.map(([label, href]) => (
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  key={href}
                  className="py-1 border-b border-gray-100 flex items-center justify-between"
                >
                  <span>{label}</span>
                  <FiChevronDown className="-rotate-90 text-gray-400 text-sm" />
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/#donate"
                  onClick={() => {
                    setMenuOpen(false)
                    if (onDonateClick) onDonateClick()
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--brand)] py-3.5 text-center text-base font-bold text-white shadow-md"
                >
                  <FiHeart /> Donate Now
                </Link>
                <div className="flex items-center justify-between text-xs text-[var(--ink-muted)] pt-2">
                  <span>Hotline: +880 1712 345 678</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-20 overflow-hidden bg-[var(--brand-deep)] text-white relative">
      {/* Decorative Brand Accent Lines */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[var(--brand)] via-[var(--brand-soft)] to-[var(--brand)]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr] lg:px-8 lg:py-20">
        {/* Col 1: Brand Info */}
        <div>
          <div className="flex items-center gap-3.5 bg-white/90 backdrop-blur w-fit rounded-2xl p-2.5 shadow-lg border border-white/20">
            <img
              src="/minority-support-logo.png"
              alt="Minority Support Foundation logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-[var(--brand-deep)]">
              <p className="font-serif text-base font-bold leading-snug">
                Minority Support Foundation
              </p>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--brand)]">
                Bangladesh
              </p>
            </div>
          </div>

          <p className="mt-6 font-serif text-2xl leading-snug text-white/95 max-w-sm">
            Empowering minority communities through dignity, legal rights, and equal opportunity.
          </p>

          <p className="mt-4 text-xs leading-relaxed text-white/70 max-w-sm">
            Minority Support Foundation is a registered humanitarian organization committed to standing alongside vulnerable minority families across Bangladesh.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <FooterCol
          title="Explore"
          links={[
            ['About Foundation', '/about'],
            ['Focus Areas', '/#focus'],
            ['Live Campaigns', '/programs'],
            ['Field Video Reels', '/#reels'],
            ['Stories of Hope', '/stories'],
            ['Get Involved / Volunteer', '/get-involved'],
          ]}
        />

        {/* Col 3: Contact & Office */}
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-[var(--brand-soft)]">
            Contact & Office
          </p>
          <div className="mt-5 flex flex-col gap-3.5 text-xs text-white/80 leading-relaxed">
            <div>
              <span className="block text-white/50 text-[10px] uppercase font-bold tracking-wider">
                Emergency Helpline
              </span>
              <a
                href="tel:+8801712345678"
                className="text-sm font-bold text-white hover:text-[var(--brand-soft)] transition"
              >
                +880 1712 345 678
              </a>
            </div>

            <div>
              <span className="block text-white/50 text-[10px] uppercase font-bold tracking-wider">
                Official Email
              </span>
              <a
                href="mailto:hello@minoritysupport.org"
                className="hover:text-white font-medium"
              >
                hello@minoritysupport.org
              </a>
            </div>

            <div>
              <span className="block text-white/50 text-[10px] uppercase font-bold tracking-wider">
                Headquarters
              </span>
              <span>
                House 24, Road 7, Dhanmondi
                <br />
                Dhaka 1205, Bangladesh
              </span>
            </div>

            <div>
              <span className="block text-white/50 text-[10px] uppercase font-bold tracking-wider">
                Working Hours
              </span>
              <span>Sunday – Thursday: 9:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Col 4: Action / Direct Donation */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm flex flex-col justify-between">
          <div>
            <p className="eyebrow text-[var(--brand-soft)]">Stand With Us</p>
            <h3 className="mt-3 font-serif text-2xl leading-tight font-bold text-white">
              Your contribution creates lasting change.
            </h3>
            <p className="mt-3 text-xs text-white/70 leading-relaxed">
              Every gift goes directly to funding emergency relief, legal defense, and educational resources.
            </p>
          </div>

          <Link
            href="/#donate"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-soft)] px-5 py-3 text-xs font-bold text-[var(--brand-deep)] shadow-lg hover:brightness-110 transition"
          >
            Make a Donation <FiArrowUpRight />
          </Link>
        </div>
      </div>

      {/* Payment Gateway Ribbon (BetterHope Inspired) */}
      <div className="mx-auto max-w-7xl border-t border-white/15 px-6 pt-8 pb-4 lg:px-8">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
            Supported Secured Payment Channels & Mobile Banking
          </p>
          <div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white p-2 shadow-inner">
            <img
              src="https://betterhope.com.bd/assets/ssl-Bamqb8w5.jpg"
              alt="Payment options including bKash, Nagad, Rocket, Visa, Mastercard, AMEX"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between border-t border-white/10 px-6 py-6 text-center text-xs text-white/50 gap-4 lg:px-8">
        <span>© 2026 Minority Support Foundation. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-white">
            Support & Help
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-wider text-[var(--brand-soft)]">
        {title}
      </p>
      <div className="mt-5 flex flex-col gap-2.5 text-xs text-white/70">
        {links.map(([label, href]) => (
          <Link href={href} key={href} className="hover:text-white transition">
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
