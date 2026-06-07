const WHATSAPP_URL = 'https://wa.me/6281221885522';

export default function ContactButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#0C0C0C] transition-transform duration-200 hover:-translate-y-[1px] active:scale-[0.98] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
    >
      Contact Me
    </a>
  );
}
