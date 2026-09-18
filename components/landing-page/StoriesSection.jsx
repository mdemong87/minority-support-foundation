import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function StoriesSection() {
  return (
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
  )
}
