import { ShieldCheck, GraduationCap, Lock } from "lucide-react";
import { firm } from "../content";
import { Container } from "./ui";

const signals = [
  { icon: ShieldCheck, label: "ICAI Registered Firm" },
  { icon: GraduationCap, label: `${firm.founderCreds} Qualified Leadership` },
  { icon: Lock, label: "100% Confidential & Compliant" },
];

/**
 * A terse, one-line credibility strip — distinct from Hero's stat tiles
 * (track record: years, clients) and WhyChooseUs (differentiators: why
 * this firm). This is specifically the "are they legitimate and
 * qualified" beat, kept to icon + short label with no supporting
 * sentence so it reads as a quick credential check, not a full section.
 */
export default function TrustSignals() {
  return (
    <div className="border-y border-border bg-surface-alt py-6">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {signals.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-navy-950">
            <Icon className="w-4 h-4 text-gold-700 shrink-0" aria-hidden="true" />
            {label}
          </div>
        ))}
      </Container>
    </div>
  );
}
