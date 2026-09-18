import Link from 'next/link'
import { FiActivity, FiArrowUpRight, FiBookOpen, FiShield } from 'react-icons/fi'

export default function FocusAreasSection() {
  return (
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
  )
}
