'use client';

import FadeIn from '@/components/shared/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Investment Analysis',
    description:
      'Evaluating direct investments (equity placements, project-based investments) and indirect investments (fund placements, capital market instruments) within BPKH portfolio mandates.',
    span: 'md:col-span-7',
  },
  {
    number: '02',
    name: 'Financial Modeling',
    description:
      'Building projection and simulation models, from BPIH cost projections to currency exposure and feasibility studies, that translate assumptions into decision-ready numbers.',
    span: 'md:col-span-5',
  },
  {
    number: '03',
    name: 'Strategic Advisory',
    description:
      'Advising across BPKH, BPKH Limited, Bank Muamalat Indonesia, and APIF on positioning, structuring, and portfolio strategy within Islamic finance mandates.',
    span: 'md:col-span-5',
  },
  {
    number: '04',
    name: 'Policy & Regulatory Analysis',
    description:
      "Reading regulatory shifts (Perpres, PP, PKBP, RUU) for second-order effects on institutional strategy, capital allocation, and the Hajj-Umrah ecosystem.",
    span: 'md:col-span-7',
  },
  {
    number: '05',
    name: 'Ecosystem Mapping',
    description:
      'Structuring knowledge bases and entity maps across the Hajj-Umrah value chain to surface hidden opportunities and structural risks.',
    span: 'md:col-span-12',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <div className="mx-auto mb-16 flex max-w-6xl items-end justify-between gap-6 sm:mb-20 md:mb-24">
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Services
          </h2>
          <span className="hidden max-w-[260px] pb-2 text-sm uppercase leading-snug tracking-widest text-[#0C0C0C] opacity-40 md:block">
            What I bring to BPKH and the wider Islamic finance ecosystem
          </span>
        </div>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-12">
        {SERVICES.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.08} className={service.span}>
            <div className="flex h-full flex-col gap-6 rounded-[28px] border border-[#0C0C0C]/10 p-7 transition-colors duration-200 hover:border-[#0C0C0C]/30 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="max-w-[20ch] font-medium uppercase leading-tight text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1.15rem, 2vw, 1.7rem)' }}
                >
                  {service.name}
                </h3>
                <span className="font-black text-[#0C0C0C] opacity-15" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
                  {service.number}
                </span>
              </div>
              <p
                className="max-w-xl font-light leading-relaxed text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', opacity: 0.6 }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
