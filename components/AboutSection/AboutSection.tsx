'use client';

import FadeIn from '@/components/shared/FadeIn';
import AnimatedText from '@/components/shared/AnimatedText';
import ContactButton from '@/components/shared/ContactButton';

const STAT_LINES = [
  { value: '4', label: 'institutions advised' },
  { value: '10+', label: 'live models & platforms shipped' },
  { value: '2', label: 'sectors — Islamic finance & Hajj-Umrah' },
];

const ABOUT_TEXT =
  "I'm Herrijal Jaka Utama, Senior Manager for Portfolio Management at BPKH. I drive strategic oversight for BPKH subsidiaries and our direct investment portfolios, while orchestrating ecosystem positioning across Islamic finance and the Hajj-Umrah sectors. From high-stakes direct investments to optimized indirect placements, I bridge institutional rigor with high-impact growth. Let's build something rigorous together.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[340px] w-[340px] rounded-full opacity-[0.16] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #D7E2EA 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full opacity-[0.1] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #D7E2EA 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        <div className="flex flex-col gap-10">
          <FadeIn y={30}>
            <span className="text-sm uppercase tracking-[0.3em] text-[#D7E2EA] opacity-50">
              About
            </span>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[620px] font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.75rem)' }}
          />

          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        <div className="flex flex-col justify-center gap-10 md:border-l md:border-[#D7E2EA]/15 md:pl-12">
          {STAT_LINES.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.1 + index * 0.12} y={24}>
              <div className="flex items-baseline gap-4">
                <span className="font-black tracking-tight text-[#D7E2EA]" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
                  {stat.value}
                </span>
                <span className="max-w-[180px] text-sm uppercase leading-snug tracking-wide text-[#D7E2EA] opacity-50">
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
