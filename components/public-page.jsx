'use client'

import Link from 'next/link'
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheckCircle,
  FiHeart,
  FiMapPin,
  FiShield,
  FiUsers
} from 'react-icons/fi'
import { SiteFooter, SiteHeader } from './site-shell'

const PAGE_CONTENT = {
  about: {
    eyebrow: 'WHO WE ARE',
    title: 'Belonging, Safety & Equal Opportunity For All.',
    intro:
      'Minority Support Foundation is a registered legal and humanitarian body dedicated to protecting minority communities across Bangladesh.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.06 AM.jpeg',
    cards: [
      [
        'Community Led Partnership',
        'We work directly alongside local leadership to ensure that every initiative addresses genuine community needs.',
        FiUsers
      ],
      [
        'Uncompromising Legal Defense',
        'We stand with vulnerable families to provide free legal advocacy, protection, and civil rights defense.',
        FiShield
      ],
      [
        'Built For Lasting Impact',
        'We invest in long-term education, emergency resilience, and women empowerment micro-grants.',
        FiHeart
      ]
    ]
  },
  programs: {
    eyebrow: 'OUR WORK & CAMPAIGNS',
    title: 'Direct Action Sourced From Real Needs.',
    intro:
      'Our programs deliver practical aid, human rights defense, and educational pathways to minority families in all districts.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.11 AM.jpeg',
    cards: [
      [
        'Minority Youth Education Fund',
        'Scholarships, school kits, and computer literacy centers for indigenous and minority children.',
        FiBookOpen
      ],
      [
        'Human Rights Legal Defense',
        'Pro-bono legal consultation, emergency legal aid helpline, and legal document support.',
        FiShield
      ],
      [
        'Emergency Relief & Micro-Grants',
        'Flood relief distribution, winter package assistance, and self-reliance grants for women.',
        FiHeart
      ]
    ]
  },
  stories: {
    eyebrow: 'FIELD REPORTS & STORIES',
    title: 'Real People. Real Impact. Lasting Hope.',
    intro:
      'Read verified reports and testimonials directly from the field where our community members lead the change.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.16 AM.jpeg',
    cards: [
      [
        'A Bell Rings Again in Rangamati',
        'How 120 indigenous students returned to school following our annual learning kit drive.',
        FiBookOpen
      ],
      [
        'Legal Aid Camp in Sylhet',
        'Over 85 families received legal guidance and land rights documentation assistance.',
        FiShield
      ],
      [
        'Women Micro-Enterprise Success',
        'Meet the women turning handicraft skill training into sustainable family income.',
        FiHeart
      ]
    ]
  },
  'get-involved': {
    eyebrow: 'GET INVOLVED',
    title: 'Stand Beside Minority Communities Today.',
    intro:
      'Whether by donating, volunteering your legal or technical skills, or sharing our field reels, you make a difference.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.13 AM.jpeg',
    cards: [
      [
        'Donate with Purpose',
        'Fund emergency relief rations, legal aid fees, or student scholarships.',
        FiHeart
      ],
      [
        'Volunteer Your Skills',
        'Lawyers, doctors, teachers, and field workers are welcome to join our volunteer network.',
        FiUsers
      ],
      [
        'Amplify Our Voice',
        'Share our Facebook reels, field reports, and campaigns with your community.',
        FiShield
      ]
    ]
  },
  contact: {
    eyebrow: 'GET IN TOUCH',
    title: 'Reach Out To Our Head Office.',
    intro:
      'Have questions or need emergency assistance? Contact our team anytime or visit our Dhaka office.',
    image: '/images/WhatsApp Image 2026-09-07 at 10.17.14 AM.jpeg',
    cards: [
      [
        'Dhaka Headquarters',
        'House 24, Road 7, Dhanmondi, Dhaka 1205, Bangladesh',
        FiMapPin
      ],
      [
        'Emergency Phone Line',
        '+880 1712 345 678 (Available Sun-Thu, 9am-5pm)',
        FiShield
      ],
      [
        'Official Email',
        'hello@minoritysupport.org / support@minoritysupport.org',
        FiHeart
      ]
    ]
  }
}

export function PublicPage({ type }) {
  const page = PAGE_CONTENT[type] || PAGE_CONTENT.about

  return (
    <main className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      <SiteHeader />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[var(--brand-deep)] text-white py-20 lg:py-28">
        <img
          src={page.image}
          alt={page.title}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)] via-[var(--brand-deep)]/90 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow text-[var(--brand-soft)]">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl sm:text-6xl font-bold leading-tight">
            {page.title}
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            {page.intro}
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {page.cards.map(([title, text, Icon]) => (
            <div
              key={title}
              className="rounded-2xl border border-[var(--line)] bg-white p-7 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--sage)] text-2xl text-[var(--brand)]">
                  <Icon />
                </div>
                <h2 className="mt-6 font-serif text-2xl font-bold text-[var(--brand-deep)]">
                  {title}
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-[var(--ink-muted)]">
                  {text}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[var(--brand)]">
                <FiCheckCircle /> MSF Core Initiative
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl bg-[var(--sand)] p-8 sm:p-12 border border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow">STAND WITH US</p>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[var(--brand-deep)]">
              Ready to make a difference for minority communities?
            </h3>
          </div>
          <Link
            href="/#donate"
            className="shrink-0 rounded-full bg-[var(--brand)] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[var(--brand-hover)] transition"
          >
            Donate Now <FiArrowUpRight className="inline ml-1" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
