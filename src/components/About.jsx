import { firm } from "../content";
import BrandRing from "./BrandRing";
import { Section, Eyebrow, Heading } from "./ui";

export default function About() {
  return (
    <Section tone="light">
      <div className="grid md:grid-cols-5 gap-14 items-center">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-2xl bg-navy-900 ring-1 ring-inset ring-gold-500/25 flex items-center justify-center relative overflow-hidden">
            <BrandRing size={280} className="absolute opacity-[0.14]" />
            <span className="relative font-serif text-6xl text-gold-500/70" aria-hidden="true">
              {firm.founderInitials}
            </span>
            <div className="absolute bottom-0 inset-x-0 bg-navy-950/80 px-6 py-4">
              <p className="text-white font-serif text-lg">{firm.founder}</p>
              <p className="text-gold-400 text-sm">{firm.founderCreds} &middot; Founder</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <Eyebrow>Our Story</Eyebrow>
          <Heading level={2}>From One Client&rsquo;s Trust to Five Hundred</Heading>
          <p className="mt-6 text-ink-muted leading-relaxed">{firm.founderBio}</p>
        </div>
      </div>
    </Section>
  );
}
