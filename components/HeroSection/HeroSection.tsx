'use client';

import FadeIn from '@/components/shared/FadeIn';
import Magnet from '@/components/shared/Magnet';
import ContactButton from '@/components/shared/ContactButton';

const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact'];

const PORTRAIT_URL = '/Jack.png';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="overflow-hidden">
        <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m jaka
        </h1>
      </FadeIn>

      <div className="mt-auto flex items-end justify-between pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            steering portfolio strategy at the crossroads of Islamic finance and the Hajj-Umrah economy
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0 sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PORTRAIT_URL} alt="Herrijal Jaka Utama portrait" className="w-full" />
        </Magnet>
      </FadeIn>
    </section>
  );
}
