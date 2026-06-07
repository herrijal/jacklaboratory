'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/shared/FadeIn';
import LiveProjectButton from '@/components/shared/LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  url?: string;
  visualSeed?: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Tooling',
    name: 'Investment Monitor',
    description:
      'Portfolio monitoring application tracking BPKH direct and indirect investments, deployed as a live web app for institutional use.',
    url: 'https://bpkh-investment-monitor-v3-678241194738.us-west1.run.app',
  },
  {
    number: '02',
    category: 'Financial Modeling',
    name: 'Dashboard Proyeksi BPIH',
    description:
      'Live interactive dashboard for the BPIH (Biaya Penyelenggaraan Ibadah Haji) multi-year projection model, stress-testing assumptions on Nilai Manfaat sustainability for BPKH portfolio allocation decisions.',
    url: 'https://script.google.com/macros/s/AKfycbx43czO5fijwAet9adle5hMnHnTOswfkJT7DdTCix-MLei8sdk6UOLGFT9jVvS10315/exec',
  },
  {
    number: '03',
    category: 'Feasibility Study',
    name: 'DAM Project Proyeksi',
    description:
      'Live projection dashboard for the DAM project, modeling assumptions and outputs for institutional review.',
    url: 'https://script.google.com/macros/s/AKfycbxTzAfs6ab1T4zcne-HdSUj7V-C3BApXShOY2zzjpgigDFbi7sSIHTArbvzS3qQe_Gotw/exec',
  },
  {
    number: '04',
    category: 'Research Brief',
    name: 'Brief',
    description:
      'Live research brief platform publishing structured analysis and strategic notes for institutional stakeholders.',
    url: 'https://brief.jacklaboratory.com/',
  },
  {
    number: '05',
    category: 'Market Intelligence',
    name: 'Market',
    description:
      'Live market intelligence platform tracking sector trends and data relevant to investment and strategic decisions.',
    url: 'http://market.jacklaboratory.com/',
  },
  {
    number: '06',
    category: 'Playbook',
    name: 'Playbook Akomodasi Makkah dan Madinah',
    description:
      'Live operational playbook for Hajj accommodation strategy in Makkah and Madinah, structuring guidance for BPKH and BPKH Limited Saudi operations.',
    url: 'https://playbook.jacklaboratory.com/',
  },
  {
    number: '07',
    category: 'Commercial',
    name: 'Commercial',
    description:
      'Demo platform for leasing commercial space during the Hajj season, supporting an asset-optimization project for accommodation leased by the Ministry of Hajj and Umrah, designed so rental value flows back to the ummah.',
    url: 'https://commercial.jacklaboratory.com/',
  },
  {
    number: '08',
    category: 'Investment Analysis',
    name: 'Kajian Kriteria Investasi BPKH',
    description:
      'Investment criteria study for BPKH with a full simulation model and interactive dashboard, linking BPIH projection assumptions to portfolio screening rules for direct and indirect placements.',
    visualSeed: 'kajian-kriteria-investasi-bpkh',
  },
  {
    number: '09',
    category: 'Macro & Currency Strategy',
    name: 'Kajian Nilai Tukar IDR vs USD/SAR',
    description:
      'Currency exposure study showing IDR real return of -2.40% per year against +2.00% for USD/SAR, recommending a 25-30% rebalancing toward USD/SAR over five years through dollar-cost averaging.',
    visualSeed: 'kajian-nilai-tukar-idr-usd-sar',
  },
  {
    number: '10',
    category: 'Knowledge Base',
    name: 'Ekosistem Perhajian',
    description:
      'Structured reference layer mapping the Hajj and Umrah ecosystem.',
    visualSeed: 'ekosistem-perhajian',
  },
];

const TOTAL_CARDS = PROJECTS.length;

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky top-24 h-auto md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:rounded-[50px] sm:p-8 md:rounded-[60px] md:p-10"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <span
              className="font-black text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', WebkitTextStroke: '2px #D7E2EA' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col items-start gap-1">
              <span className="text-sm uppercase tracking-widest text-[#D7E2EA] opacity-60">
                {project.category}
              </span>
              <h3 className="text-2xl font-medium uppercase text-[#D7E2EA] sm:text-3xl md:text-4xl">
                {project.name}
              </h3>
            </div>
            {project.url && <LiveProjectButton href={project.url} />}
          </div>

          <p className="max-w-[640px] font-light leading-relaxed text-[#D7E2EA] opacity-80">
            {project.description}
          </p>

          {project.visualSeed && (
            <div className="relative h-[180px] w-full overflow-hidden rounded-[24px] sm:h-[220px] md:h-[260px] md:rounded-[32px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${project.visualSeed}/1200/700`}
                alt={`Abstract reference visual for ${project.name}`}
                className="h-full w-full object-cover grayscale"
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{ background: '#D7E2EA' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg, rgba(12,12,12,0.65) 0%, rgba(12,12,12,0.15) 60%)' }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="mt-16 flex flex-col gap-7">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
