import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function CtaSection() {
  return (
    <section className='max-w-7xl mx-auto  px-4 lg:px-8'>
      <section className="rounded-3xl bg-[var(--sage)] p-4 sm:p-8 border border-[var(--line)]">
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
    </section>
  )
}
