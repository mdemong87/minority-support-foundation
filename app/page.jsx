'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
  FiHeart,
  FiLock,
  FiPause,
  FiPlay,
  FiShare2,
  FiShield,
  FiUsers,
  FiX
} from 'react-icons/fi'
import { SiteFooter, SiteHeader } from '../components/site-shell'

// Local Image Assets
const HERO_SLIDES = [
  {
    title: 'Standing United For',
    accent: 'Justice & Dignity.',
    text: 'Minority Support Foundation works directly with marginalized communities across Bangladesh to ensure safety, legal support, and opportunity.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.06 AM.jpeg',
    badge: 'Human Rights & Support'
  },
  {
    title: 'Empowering Minority Youth',
    accent: 'Through Education.',
    text: 'Providing scholarships, learning materials, and mentorship to students from underrepresented communities.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.11 AM.jpeg',
    badge: 'Education & Future'
  },
  {
    title: 'Immediate Crisis &',
    accent: 'Flood Relief Support.',
    text: 'Delivering urgent food aid, medical supplies, and rehabilitation for families affected by disasters and displacement.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.16 AM.jpeg',
    badge: 'Emergency Response'
  },
  {
    title: 'Building Resilient',
    accent: 'Livelihoods Together.',
    text: 'Equipping women and local entrepreneurs with tools, micro-grants, and skills to establish self-reliant livelihoods.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.13 AM.jpeg',
    badge: 'Community Empowerment'
  },
]

const CAMPAIGNS = [
  {
    id: 'flood-relief',
    title: 'Emergency Flood Relief for Marginalized Families',
    category: 'Emergency Relief',
    location: 'Sylhet & Hill Tracts',
    raised: 385000,
    goal: 500000,
    donors: 420,
    daysLeft: 12,
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.07 AM.jpeg',
    desc: 'Providing emergency food packs, clean drinking water, shelter tarps, and medical aid to flood-affected minority families.'
  },
  {
    id: 'legal-defense',
    title: 'Minority Legal Aid & Defense Fund',
    category: 'Legal Aid & Rights',
    location: 'All Bangladesh',
    raised: 210000,
    goal: 300000,
    donors: 280,
    daysLeft: 18,
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.09 AM.jpeg',
    desc: 'Ensuring pro-bono legal advocacy, emergency protection, and legal documentation support for victims of discrimination.'
  },
  {
    id: 'student-scholarship',
    title: 'Indigenous & Minority Youth Education Fund',
    category: 'Education Support',
    location: 'Rangamati & Bandarban',
    raised: 310000,
    goal: 400000,
    donors: 350,
    daysLeft: 8,
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.12 AM.jpeg',
    desc: 'Funding annual tuition fees, textbooks, bags, and living stipends for deserving minority students.'
  },
  {
    id: 'women-empowerment',
    title: 'Women Self-Reliance Micro-Grant Circle',
    category: 'Livelihoods',
    location: 'Khagrachari',
    raised: 195000,
    goal: 250000,
    donors: 215,
    daysLeft: 22,
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.13 AM (1).jpeg',
    desc: 'Providing sewing machines, handicraft supplies, and small business start-up grants to widowed & marginalized women.'
  },
]

const FIELD_REELS = [
  {
    id: 'reel-1',
    title: 'Distributing Emergency Relief in Remote Communities',
    category: 'Field Action',
    duration: '0:45',
    views: '14.2K views',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.16 AM (1).jpeg',
    caption: 'Our team on the ground navigating tough terrains to reach affected families with essential emergency rations.',
    date: 'Sep 2026'
  },
  {
    id: 'reel-2',
    title: 'Pro-Bono Legal Consultation Camp in Rural District',
    category: 'Legal Rights',
    duration: '1:12',
    views: '18.9K views',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.17 AM (1).jpeg',
    caption: 'Lawyers providing free guidance on land rights, documentation, and safety for minority community members.',
    date: 'Aug 2026'
  },
  {
    id: 'reel-3',
    title: 'New Community Learning Center Launch',
    category: 'Education',
    duration: '0:58',
    views: '22.5K views',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.17 AM (2).jpeg',
    caption: 'Joy and excitement as children receive new school kits and begin their daily reading circles.',
    date: 'Aug 2026'
  },
  {
    id: 'reel-4',
    title: 'Women Artisans Workshop & Enterprise Journey',
    category: 'Livelihoods',
    duration: '1:05',
    views: '11.8K views',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.17 AM.jpeg',
    caption: 'Celebrating self-reliance as local women share products from their newly formed handicraft enterprise.',
    date: 'Jul 2026'
  },
]

export default function HomePage() {
  // Hero Carousel State
  const [slide, setSlide] = useState(0)
  const [playing, setPlaying] = useState(true)

  // Donation Form State (BetterHope Direct Bar)
  const [cause, setCause] = useState('General Donation')
  const [amount, setAmount] = useState('1000')
  const [isCustom, setIsCustom] = useState(false)
  const [donorName, setDonorName] = useState('')
  const [donorPhone, setDonorPhone] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [onBehalf, setOnBehalf] = useState('')
  const [agreedTerms, setAgreedTerms] = useState(true)

  // Payment Modal State
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState('bKash')
  const [trxId, setTrxId] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  // Reels Lightbox Modal State
  const [activeReel, setActiveReel] = useState(null)

  // Carousel Auto-play effect
  useEffect(() => {
    if (!playing) return undefined
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [playing])

  const activeHero = HERO_SLIDES[slide]

  const handlePresetSelect = (val) => {
    if (val === 'Other') {
      setIsCustom(true)
      setAmount('')
    } else {
      setIsCustom(false)
      setAmount(val)
    }
  }

  const handleDonateSubmit = (e) => {
    if (e) e.preventDefault()
    if (!amount || Number(amount) <= 0) {
      alert('Please select or enter a valid donation amount.')
      return
    }
    setPaymentSuccess(false)
    setShowPaymentModal(true)
  }

  const handleCopyNumber = (num) => {
    navigator.clipboard.writeText(num)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleConfirmPayment = (e) => {
    e.preventDefault()
    if (!trxId.trim()) {
      alert('Please enter your payment Transaction ID (TrxID).')
      return
    }
    setPaymentSuccess(true)
  }

  return (
    <main className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      <SiteHeader onDonateClick={() => setShowPaymentModal(true)} />

      {/* HERO CAROUSEL SECTION */}
      <section
        className="hero-grid relative min-h-[70vh] sm:min-h-[75vh] overflow-hidden bg-[var(--brand-deep)] flex items-center"
        onMouseEnter={() => setPlaying(false)}
        onMouseLeave={() => setPlaying(true)}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)] via-[var(--brand-deep)]/85 to-transparent" />
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
                <span className="text-[var(--brand-soft)] italic font-normal">
                  {activeHero.accent}
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/85">
                {activeHero.text}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#donate-now"
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
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6 text-xs text-white/75">
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

          {/* Slider Controls */}
          <div className="absolute bottom-6 right-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-white backdrop-blur-md lg:right-8">
            <button
              onClick={() =>
                setSlide((slide + HERO_SLIDES.length - 1) % HERO_SLIDES.length)
              }
              aria-label="Previous slide"
              className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white/20"
            >
              <FiChevronLeft />
            </button>
            <span className="min-w-12 text-center text-xs font-bold">
              0{slide + 1} <span className="text-white/40">/ 0{HERO_SLIDES.length}</span>
            </span>
            <button
              onClick={() => setSlide((slide + 1) % HERO_SLIDES.length)}
              aria-label="Next slide"
              className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white/20"
            >
              <FiChevronRight />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? 'Pause slider' : 'Play slider'}
              className="grid h-8 w-8 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-deep)] font-bold"
            >
              {playing ? <FiPause /> : <FiPlay />}
            </button>
          </div>
        </div>
      </section>

      {/* QUICK DONATION BAR (Exact BetterHope Layout Reference) */}
      <section id="donate-now" className="bg-[var(--sand)] px-4 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="donation-bar-container">
            {/* Bar Header Banner */}
            <div className="donation-bar-header">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--brand)] font-bold shadow">
                  <FiHeart />
                </div>
                <div>
                  <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                    Minority Support Foundation
                  </h2>
                  <p className="text-xs text-white/80">
                    DIRECT DONATION WIDGET · SECURED PAYMENT
                  </p>
                </div>
              </div>

              {/* Cause Dropdown Selector & Preset Amounts Header */}
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="rounded-xl border border-white/30 bg-white/20 px-3.5 py-2 text-xs font-bold text-white outline-none focus:bg-white focus:text-[var(--brand-deep)] transition"
                >
                  <option value="General Donation" className="text-gray-900">
                    General Donation Fund
                  </option>
                  <option value="Emergency Flood Relief" className="text-gray-900">
                    Emergency Flood Relief
                  </option>
                  <option value="Legal Aid & Human Rights" className="text-gray-900">
                    Legal Aid & Human Rights Defense
                  </option>
                  <option value="Youth Education Fund" className="text-gray-900">
                    Minority Youth Education Fund
                  </option>
                  <option value="Women Empowerment" className="text-gray-900">
                    Women Self-Reliance Grant
                  </option>
                </select>

                {/* Preset Chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {['10000', '5000', '2000', '1000', '500', '250', 'Other'].map(
                    (val) => {
                      const isActive =
                        val === 'Other' ? isCustom : !isCustom && amount === val
                      return (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handlePresetSelect(val)}
                          className={`donation-preset-btn ${isActive ? 'active' : ''
                            }`}
                        >
                          {val === 'Other' ? 'Other' : `৳${Number(val).toLocaleString()}`}
                        </button>
                      )
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Bar Form Body */}
            <form onSubmit={handleDonateSubmit} className="p-6 bg-white">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.5fr_1.5fr_1.5fr_1.5fr_auto] items-center">
                {/* Amount Input */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Donation Amount (BDT)
                  </label>
                  <div className="relative flex items-center rounded-xl border-2 border-gray-200 bg-gray-50 px-3 py-2.5 focus-within:border-[var(--brand)] focus-within:bg-white transition">
                    <span className="text-sm font-bold text-gray-500 mr-1.5">৳</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => {
                        setIsCustom(true)
                        setAmount(e.target.value)
                      }}
                      placeholder="Amount"
                      className="w-full bg-transparent font-black text-lg text-[var(--brand-deep)] outline-none"
                    />
                  </div>
                </div>

                {/* Donor Full Name */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Full Name (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Rahat Chowdhury"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-xs font-semibold text-gray-900 outline-none focus:border-[var(--brand)] focus:bg-white transition"
                  />
                </div>

                {/* Donor Phone */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-xs font-semibold text-gray-900 outline-none focus:border-[var(--brand)] focus:bg-white transition"
                  />
                </div>

                {/* Donor Email (Optional) */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-xs font-semibold text-gray-900 outline-none focus:border-[var(--brand)] focus:bg-white transition"
                  />
                </div>

                {/* On Behalf of (Optional) */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    On Behalf Of (Optional)
                  </label>
                  <input
                    type="text"
                    value={onBehalf}
                    onChange={(e) => setOnBehalf(e.target.value)}
                    placeholder="Family or Organization"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-xs font-semibold text-gray-900 outline-none focus:border-[var(--brand)] focus:bg-white transition"
                  />
                </div>

                {/* Action Submit Button */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-transparent mb-1 hidden lg:block">
                    Submit
                  </label>
                  <button
                    type="submit"
                    className="premium-cta w-full flex items-center justify-center gap-1.5 rounded-xl bg-[var(--brand)] px-6 py-3.5 text-sm font-extrabold text-white shadow-md hover:bg-[var(--brand-hover)] transition shrink-0"
                  >
                    DONATE NOW <FiArrowUpRight />
                  </button>
                </div>
              </div>

              {/* Terms Checkbox Row */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 border-t border-gray-100 pt-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="rounded text-[var(--brand)] focus:ring-[var(--brand)] h-4 w-4"
                  />
                  <span>
                    I agree to the Terms, Privacy Policy &amp; Refund Policy.
                  </span>
                </label>
                <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                  <FiLock className="text-[var(--brand)]" /> SSL Encrypted &amp; Audit Verified
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* THREE FOCUS AREAS ("THREE WAYS WE CREATE CHANGE") */}
      <section id="focus" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">OUR CORE FOCUS</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-[var(--brand-deep)] leading-tight">
              Three Ways We Create Lasting Change
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)]">
              Empowering minority communities through a holistic approach covering legal defense, quality education, and immediate crisis support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Pillar 1: Education */}
            <div className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/WhatsApp Image 2026-09-07 at 10.17.07 AM (1).jpeg"
                  alt="Education for minority students"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[11px] font-bold text-[var(--brand-deep)]">
                  Pillar 01
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand)]">
                  <FiBookOpen /> Education &amp; Mentorship
                </div>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[var(--brand-deep)]">
                  Minority Youth Education
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[var(--ink-muted)]">
                  Scholarships, school kit distribution, literacy circles, and computer training for indigenous and minority children.
                </p>
                <Link
                  href="/programs"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--brand)] hover:underline"
                >
                  Explore Education Programs <FiArrowUpRight />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Legal Aid */}
            <div className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/WhatsApp Image 2026-09-07 at 10.17.08 AM.jpeg"
                  alt="Legal aid and human rights"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[11px] font-bold text-[var(--brand-deep)]">
                  Pillar 02
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand)]">
                  <FiShield /> Legal Aid &amp; Defense
                </div>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[var(--brand-deep)]">
                  Human Rights Protection
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[var(--ink-muted)]">
                  Free legal advocacy, emergency hotline protection, legal documentation support, and civil rights awareness.
                </p>
                <Link
                  href="/programs"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--brand)] hover:underline"
                >
                  View Legal Aid Network <FiArrowUpRight />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Emergency Relief & Livelihoods */}
            <div className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/WhatsApp Image 2026-09-07 at 10.17.14 AM.jpeg"
                  alt="Emergency relief and micro-grants"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[11px] font-bold text-[var(--brand-deep)]">
                  Pillar 03
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand)]">
                  <FiActivity /> Crisis Relief &amp; Livelihood
                </div>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[var(--brand-deep)]">
                  Disaster Relief &amp; Self-Reliance
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[var(--ink-muted)]">
                  Delivering flood rations, winter relief, medical assistance, and women-led enterprise start-up micro-grants.
                </p>
                <Link
                  href="/programs"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--brand)] hover:underline"
                >
                  See Relief Operations <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENT CAUSES & LIVE CAMPAIGN CARDS */}
      <section className="py-16 lg:py-24 bg-[var(--sand)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">URGENT CAUSES</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[var(--brand-deep)] leading-tight">
                Featured Live Campaigns
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--brand)] hover:underline"
            >
              Browse All Campaigns <FiArrowUpRight />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAMPAIGNS.map((item) => {
              const percentage = Math.min(
                100,
                Math.round((item.raised / item.goal) * 100)
              )
              return (
                <div
                  key={item.id}
                  className="donation-card flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-[var(--brand-deep)]/80 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand)]">
                        {item.location}
                      </span>
                      <h3 className="mt-1 font-serif text-lg font-bold text-[var(--brand-deep)] line-clamp-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-[var(--ink-muted)] line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Progress bar */}
                      <div className="mt-5">
                        <div className="flex justify-between text-xs font-bold text-gray-700">
                          <span>
                            Raised: ৳{item.raised.toLocaleString()}
                          </span>
                          <span className="text-[var(--brand)]">{percentage}%</span>
                        </div>
                        <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-full rounded-full bg-[var(--brand)] progress-bar-fill"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
                          <span>Target: ৳{item.goal.toLocaleString()}</span>
                          <span>{item.donors} Donors</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      type="button"
                      onClick={() => {
                        setCause(item.title)
                        setShowPaymentModal(true)
                      }}
                      className="w-full rounded-xl bg-[var(--brand)] py-2.5 text-xs font-bold text-white shadow hover:bg-[var(--brand-hover)] transition"
                    >
                      Donate to Campaign
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FACEBOOK REELS & FIELD VIDEO HIGHLIGHTS SECTION */}
      <section id="reels" className="py-16 lg:py-24 bg-[var(--brand-deep)] text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-[var(--brand-soft)]">
                FIELD STORIES IN MOTION
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold leading-tight">
                Watch Our Facebook Video Reels
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/75 max-w-xl">
                Direct insights and real video logs captured from our team&apos;s field work across Bangladesh.
              </p>
            </div>
            <a
              href="https://web.facebook.com/minoritysupportfoundation/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition"
            >
              Visit Official FB Reels Page <FiArrowUpRight />
            </a>
          </div>

          {/* Reels Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FIELD_REELS.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveReel(reel)}
                className="reel-card group"
              >
                <img src={reel.image} alt={reel.title} />
                <div className="reel-overlay" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {reel.category}
                  </span>
                  <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold text-[var(--brand-soft)] backdrop-blur-md">
                    {reel.duration}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 grid place-items-center z-10">
                  <div className="play-badge">
                    <FiPlay className="text-xl ml-1 fill-[var(--brand-deep)]" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <div className="flex items-center gap-2 text-[10px] text-white/70">
                    <span>{reel.views}</span>
                    <span>•</span>
                    <span>{reel.date}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-lg font-bold leading-snug line-clamp-2">
                    {reel.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATISTICS & TRUST STATEMENT */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-[var(--line)] bg-[var(--sand)] p-8 lg:p-12 md:grid-cols-4 text-center">
            <div>
              <p className="font-serif text-5xl font-black text-[var(--brand-deep)]">
                18,500+
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--brand)]">
                Lives Impacted
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Direct beneficiaries across programs
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-[var(--brand-deep)]">
                45+
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--brand)]">
                Districts Covered
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Active community presence
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-[var(--brand-deep)]">
                ৳1.2M+
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--brand)]">
                Relief Aid Delivered
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Food, supplies, and micro-grants
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-[var(--brand-deep)]">
                100%
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--brand)]">
                Transparent Audits
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Open reporting for all donors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES OF HOPE & FIELD TESTIMONIALS */}
      <section className="py-16 lg:py-24 bg-[var(--paper)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">STORIES OF HOPE</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[var(--brand-deep)] leading-tight">
                Voices From The Ground
              </h2>
            </div>
            <Link
              href="/stories"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--brand)] hover:underline"
            >
              Read All Stories <FiArrowRight />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Story Card 1 */}
            <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/WhatsApp Image 2026-09-07 at 10.17.13 AM (2).jpeg"
                    alt="Beneficiary story"
                    className="h-16 w-16 rounded-full object-cover border-2 border-[var(--brand)]"
                  />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[var(--brand-deep)]">
                      Suhita Tripura
                    </h3>
                    <p className="text-xs text-[var(--brand)] font-bold">
                      Student Scholarship Beneficiary · Khagrachari
                    </p>
                  </div>
                </div>
                <blockquote className="mt-6 font-serif text-lg text-gray-800 leading-relaxed italic">
                  “When my family lost everything during last year&apos;s flood, I thought my education was over. Minority Support Foundation provided school tuition and books so I could complete my college entrance.”
                </blockquote>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span>Program: Youth Education</span>
                <span>Verified Field Report</span>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/WhatsApp Image 2026-09-07 at 10.17.13 AM.jpeg"
                    alt="Legal aid beneficiary story"
                    className="h-16 w-16 rounded-full object-cover border-2 border-[var(--brand)]"
                  />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[var(--brand-deep)]">
                      Bishwajit Das
                    </h3>
                    <p className="text-xs text-[var(--brand)] font-bold">
                      Legal Defense Assistance · Sylhet
                    </p>
                  </div>
                </div>
                <blockquote className="mt-6 font-serif text-lg text-gray-800 leading-relaxed italic">
                  “Having access to pro-bono legal help gave our village community confidence. The foundation stood beside us every step of the legal advocacy process.”
                </blockquote>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span>Program: Human Rights Legal Aid</span>
                <span>Verified Field Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION: VOLUNTEER & PARTNER ("SOCIAL HEROES") */}
      <section className="mx-4 lg:mx-auto lg:max-w-7xl my-16 rounded-3xl bg-[var(--sage)] p-8 sm:p-14 border border-[var(--line)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">JOIN OUR MISSION</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[var(--brand-deep)] leading-tight">
              Become a Partner or Volunteer Hero
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)] max-w-2xl">
              Whether you are a legal expert, student advocate, doctor, corporate sponsor, or volunteer, there is a place for your energy in our work.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/get-involved"
              className="rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-extrabold text-white shadow hover:bg-[var(--brand-hover)] transition"
            >
              Sign Up To Volunteer <FiArrowUpRight />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--brand-deep)] px-6 py-3.5 text-sm font-bold text-[var(--brand-deep)] hover:bg-[var(--brand-deep)] hover:text-white transition"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE REELS LIGHTBOX MODAL */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[var(--brand-deep)] text-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white hover:bg-black transition"
            >
              <FiX />
            </button>

            {/* Reel Video Thumbnail Simulation */}
            <div className="relative aspect-[9/14] w-full overflow-hidden">
              <img
                src={activeReel.image}
                alt={activeReel.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)] via-transparent to-black/40" />

              {/* Simulated Reel Play Overlay */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-deep)] font-bold shadow-xl animate-pulse">
                  <FiPlay className="text-2xl ml-1 fill-[var(--brand-deep)]" />
                </div>
              </div>

              {/* Reels Details & Share */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[10px] font-bold text-[var(--brand-deep)]">
                  {activeReel.category}
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold leading-snug">
                  {activeReel.title}
                </h3>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">
                  {activeReel.caption}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-xs">
                  <span>FB Reels Archive</span>
                  <a
                    href="https://web.facebook.com/minoritysupportfoundation/reels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-bold text-[var(--brand-soft)] hover:underline"
                  >
                    Open on Facebook <FiShare2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE PAYMENT GATEWAY MODAL (bKash, Nagad, Rocket, Bank) */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-[var(--brand-deep)] px-6 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-deep)] font-bold">
                  <FiHeart />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Secured Payment Gateway</h3>
                  <p className="text-[11px] text-white/70">
                    Cause: {cause} · Amount: ৳{Number(amount || 0).toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <FiX />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {paymentSuccess ? (
                <div className="py-8 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 text-3xl font-bold">
                    <FiCheckCircle />
                  </div>
                  <h4 className="mt-4 font-serif text-2xl font-bold text-[var(--brand-deep)]">
                    Thank You For Your Support!
                  </h4>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed max-w-md mx-auto">
                    Your payment notification (TrxID: <strong>{trxId}</strong>) has been submitted for automated audit verification. A receipt will be sent shortly.
                  </p>
                  <button
                    onClick={() => {
                      setShowPaymentModal(false)
                      setPaymentSuccess(false)
                      setTrxId('')
                    }}
                    className="mt-6 rounded-full bg-[var(--brand)] px-6 py-3 text-xs font-bold text-white shadow hover:bg-[var(--brand-hover)]"
                  >
                    Done &amp; Close Window
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                    Select Payment Method:
                  </p>

                  {/* Tabs */}
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {['bKash', 'Nagad', 'Rocket', 'Bank'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setSelectedMethod(method)}
                        className={`rounded-xl py-2.5 text-xs font-bold transition border ${selectedMethod === method
                            ? 'border-[var(--brand)] bg-[var(--sage)] text-[var(--brand-deep)] shadow-sm'
                            : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>

                  {/* Payment Details Box */}
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-gray-400">
                          {selectedMethod} Merchant Account Number
                        </span>
                        <p className="font-mono text-lg font-bold text-gray-900 mt-0.5">
                          01712-345678
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopyNumber('01712345678')}
                        className="flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-[var(--brand)] border border-gray-200 shadow-sm hover:bg-gray-50"
                      >
                        {copied ? <FiCheck /> : <FiCopy />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    <ol className="mt-3 list-decimal list-inside text-[11px] text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
                      <li>Go to your {selectedMethod} App or Dial *247#</li>
                      <li>
                        Select <strong>Make Payment</strong> or Send Money to{' '}
                        <strong>01712-345678</strong>
                      </li>
                      <li>
                        Enter Amount: <strong>৳{Number(amount || 0).toLocaleString()}</strong>
                      </li>
                      <li>Enter Reference: <strong>MSF</strong></li>
                      <li>Copy the Transaction ID (TrxID) and enter below:</li>
                    </ol>
                  </div>

                  {/* Transaction ID Submission Form */}
                  <form onSubmit={handleConfirmPayment} className="mt-5">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Enter Transaction ID (TrxID) *
                    </label>
                    <input
                      type="text"
                      required
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      placeholder="e.g. 9J28XKL01"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-mono font-bold text-gray-900 uppercase outline-none focus:border-[var(--brand)]"
                    />

                    <button
                      type="submit"
                      className="mt-4 w-full rounded-xl bg-[var(--brand)] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[var(--brand-hover)] transition"
                    >
                      Confirm Payment &amp; Submit Receipt
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </main>
  )
}
