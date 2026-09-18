'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FiArrowUpRight,
  FiHeart,
  FiShield,
  FiUsers
} from 'react-icons/fi'
import { HERO_SLIDES } from './data'

export default function HeroSection({ onDonateClick }) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const activeHero = HERO_SLIDES[slide]

  return (
    <section
      className="hero-grid relative min-h-[70vh] sm:min-h-[75vh] overflow-hidden bg-[var(--brand-deep)] flex items-center"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={activeHero.image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.65, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          src={activeHero.image}
          alt="Minority Support Foundation field work"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Hero Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)]/25 via-[var(--brand-deep)]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)] via-transparent to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end px-5 py-16 sm:py-24 lg:px-8 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl text-white"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-soft)]/30 bg-black/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-soft)] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-soft)] animate-pulse" />
              {activeHero.badge}
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              {activeHero.title}{' '}
              <span className="text-[var(--brand-soft)] ">
                {activeHero.accent}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/85">
              {activeHero.text}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#donate-now"
                onClick={onDonateClick}
                className="premium-cta flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg"
              >
                <FiHeart className="text-[var(--brand-soft)] fill-[var(--brand-soft)]" /> Donate Now
              </a>
              <Link
                href="/about"
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Learn Our Story <FiArrowUpRight />
              </Link>
            </div>

            {/* Quick Stat Highlights */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6 text-xs text-white/75 hidden">
              <span className="flex items-center gap-2">
                <FiUsers className="text-[var(--brand-soft)] text-base" />{' '}
                <strong className="text-white">18,500+</strong> Lives Impacted
              </span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="flex items-center gap-2">
                <FiShield className="text-[var(--brand-soft)] text-base" />{' '}
                <strong className="text-white">45+</strong> Districts Reached
              </span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-[var(--brand-soft)] font-bold">
                100% Transparent Financial Audit
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

