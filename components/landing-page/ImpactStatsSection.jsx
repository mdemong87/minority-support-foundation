export default function ImpactStatsSection() {
  return (
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
  )
}
